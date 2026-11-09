# 第8回 DOM操作の基本（要約版）

## 目標

- DOMの仕組みを理解し、JavaScriptからHTML要素を取得できる
- `textContent` / `innerHTML` で要素の内容を変更できる
- 属性やCSSをJavaScriptから操作し、表示を変更できる

## 準備

`Lesson08/handson/` に `index.html`・`style.css`・`script.js` を作成し、「学校イベント案内」ページ（`#event-status` / `#event-title` / `#event-description` / `#event-link`）を用意する。確認問題は `practice01`〜`practice04` の専用フォルダで行う。

---

## 1. DOMの基本

- **DOM** = ブラウザがHTMLを読み込み、JavaScriptから扱えるようにしたオブジェクトの**ツリー構造**。
- HTMLファイルは「元の内容」、DOMは「ブラウザが今扱っている構造」。JavaScriptで変更してもHTMLファイルは書き換わらない（再読み込みで元に戻る）。
- `document` は現在のページ全体を表すオブジェクト。`document.title` のようなプロパティや、`querySelector()` のようなメソッドを持つ。
- 基本の流れ：**① 要素を取得 → ② 内容・属性・CSSを変更 → ③ 表示に反映**

| 技術 | 役割 |
| --- | --- |
| HTML | 構造・内容 |
| CSS | 見た目 |
| JavaScript | 処理・動き |
| DOM | JavaScriptからページを扱う仕組み |

## 2. HTML要素の取得

| メソッド | 取得するもの | 戻り値 |
| --- | --- | --- |
| `querySelector("セレクタ")` | 最初の1つ | 要素 または `null` |
| `querySelectorAll("セレクタ")` | 一致するすべて | NodeList（なければ長さ0） |

```javascript
const eventTitle = document.querySelector("#event-title"); // ID
const status = document.querySelector(".status");          // class
const heading = document.querySelector("h1");              // 要素
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length);   // 要素数
console.log(paragraphs[0]);       // インデックスで取得
paragraphs.forEach((p) => console.log(p)); // 順に処理
```

- セレクタはCSSと同じ書き方（`#id` / `.class` / `要素名` / `.card h2` など）。文字列で指定する。
- 取得した要素は変数に保存して使い回す（役割が分かる変数名にする）。
- 要素が見つからないと `null` になり、そのまま操作すると `TypeError` になる。`#` `.` の付け忘れ、名前の間違い、実行タイミングを確認する。`if (el !== null)` で確認もできる。

## 3. 内容の変更

```javascript
eventTitle.textContent = "秋の作品展示会";
eventDescription.innerHTML = "学生が制作した<strong>Webサイトやアプリ</strong>を展示します。<br>ぜひご覧ください！";
```

| | textContent | innerHTML |
| --- | --- | --- |
| 役割 | テキストの取得・変更 | HTMLの取得・変更 |
| タグの扱い | 通常の文字列 | HTMLとして解釈 |
| 用途 | 見出し・文章 | 強調・改行を含む内容 |

- 単なる文字列の変更は `textContent` を優先する。
- **`innerHTML` にユーザー入力や外部データをそのまま入れない**（意図しないHTMLや悪意あるスクリプトが実行される危険がある）。
- 条件分岐と組み合わせれば、変数の値に応じて表示を切り替えられる。

## 4. 属性の変更

```javascript
eventImage.src = "https://placehold.co/680x280/2563eb/ffffff?text=Student+Exhibition";
eventImage.alt = "学生作品展示会の案内画像";   // 画像を変えたら alt も更新

eventLink.href = "#event-description";           // ページ内リンク
eventLink.textContent = "展示会の詳細を見る";

eventLink.setAttribute("title", "イベントの説明文へ移動します");
console.log(eventLink.getAttribute("href"));     // 属性値を取得（なければ null）
```

| 書き方 | 役割 |
| --- | --- |
| `el.src` / `el.href` / `el.alt` | 対応するプロパティで変更 |
| `setAttribute("属性名", "値")` | 属性を設定（なければ追加） |
| `getAttribute("属性名")` | 属性値を取得 |

※ `href` / `src` をプロパティで読むと絶対URLになることがあるが、`getAttribute()` は書かれた文字列そのものを返す。

## 5. CSSの操作

### style プロパティ

```javascript
eventTitle.style.color = "#1d4ed8";
eventTitle.style.fontSize = "28px";   // font-size → fontSize（キャメルケース）
eventLink.style.fontWeight = "bold";
```

- ハイフン付きのCSSプロパティはキャメルケースにする（`background-color` → `backgroundColor`）。
- 値は単位付きの文字列（`"20px"`）。結果は要素の**インラインスタイル**になる。

### classList

```javascript
eventStatus.classList.add("status-active");        // 追加
eventCard.classList.remove("event-featured");      // 削除
eventCard.classList.toggle("event-featured");      // なければ追加、あれば削除
```

- クラス名には `.` を付けない（`"status-active"`）。既存のクラスは残る。
- クラスを外してもCSSファイルのルールは消えない。要素に付いていないだけ。
- `toggle()` は呼ぶたびに状態が反転する（2回呼ぶと元に戻る）。ボタン操作との組み合わせは次回（イベント処理）で学ぶ。

### 使い分け

| | style | classList |
| --- | --- | --- |
| 向いている場面 | 計算した値など個別のスタイル | 「通常／選択中／エラー」など決まったデザインの切り替え |
| 事前のCSS定義 | 不要 | 必要 |
| 複数プロパティ | 個別に指定 | クラスでまとめて適用 |

注意：インラインスタイルはクラスのスタイルより優先されることがある。同じプロパティを両方で変更しないようにする。

## 確認問題の概要

| 問題 | テーマ | 使う機能 |
| --- | --- | --- |
| practice01 | 学校施設案内 | `querySelector` / `querySelectorAll` / `length` / `forEach` |
| practice02 | 図書室の利用時間変更のお知らせ | `textContent` / `innerHTML`（`strong`・`br`） |
| practice03 | 図書室読書週間の案内 | `src` / `alt` / `href` / `setAttribute` |
| practice04 | プログラミング講座案内 | `style` / `classList.add` / `remove` / `toggle` |

---

## まとめ

**DOM操作の流れ：取得 → 変更 → 反映**

| 分類 | 主な機能 |
| --- | --- |
| 取得 | `querySelector()` / `querySelectorAll()` |
| 内容 | `textContent` / `innerHTML` |
| 属性 | `src` / `alt` / `href` / `setAttribute()` / `getAttribute()` |
| CSS | `style` / `classList.add()` / `remove()` / `toggle()` |

### よくある間違い

1. ID指定の `#`、class指定の `.` を付け忘れる
2. 存在しない要素（`null`）を操作してエラーになる
3. `style` で `font-size` のままハイフンで書いてしまう（正しくは `fontSize`）
4. `classList.add(".active")` のようにクラス名に `.` を付ける

### DOM操作を使う意味

変数・条件分岐・配列・繰り返し・関数と組み合わせることで、**プログラムの処理結果に応じてページの表示を変えられる**（例：残り座席数に応じて「空席あり／残りわずか／満席」を表示）。