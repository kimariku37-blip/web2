# 本日のゴール

- DOMの仕組みを理解し、JavaScriptからHTML要素を取得できる
- `textContent`や`innerHTML`を使用して、HTML要素の内容を変更できる
- HTML要素の属性やCSSをJavaScriptから操作し、Webページの表示を変更できる

# 0. 作業フォルダの準備

今回の授業では、JavaScriptからHTML要素を操作する「DOM操作」について学習します。

これまでは主にコンソールでプログラムの実行結果を確認してきましたが、今回はWebページに表示される文章や画像、見た目などをJavaScriptから変更していきます。

## 0-1. Lesson08フォルダの作成

Visual Studio Codeを起動し、`Lesson08`フォルダを作成してください。

続いて、その中に`handson`フォルダを作成してください。

`handson`フォルダには、以下の3つのファイルを作成します。

- `index.html`
- `style.css`
- `script.js`

フォルダ構成は以下のとおりです。

```
Lesson08/
└── handson/
    ├── index.html
    ├── style.css
    └── script.js
```

## 0-2. HTML・CSS・JavaScriptファイルの準備

まず、`index.html`に以下のコードを記述してください。

**index.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>第8回 DOM操作の基本</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>学校イベント案内</h1>

        <section class="event-card">
            <p id="event-status" class="status">準備中</p>

            <h2 id="event-title">イベント情報を準備中です</h2>

            <p id="event-description">
                イベントの詳細情報は、後日公開予定です。
            </p>

            <a id="event-link" href="#">詳細はこちら</a>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

続いて、`style.css`に以下のコードを記述してください。

**style.css**

```css
body {
    margin: 0;
    padding: 40px 20px;
    background-color: #f3f4f6;
    font-family: sans-serif;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

.event-card {
    background-color: white;
    padding: 30px;
    border-radius: 12px;
}

.status {
    display: inline-block;
    padding: 6px 12px;
    background-color: #e5e7eb;
    border-radius: 20px;
    font-size: 14px;
}

#event-description {
    line-height: 1.8;
}

#event-link {
    color: #2563eb;
}
```

最後に、`script.js`に以下のコードを記述してください。

**script.js**

```javascript
console.log("第8回の準備ができました！");
```

## 0-3. 動作確認

`index.html`をブラウザで開き、「学校イベント案内」のページが表示されることを確認してください。

続いて、開発者ツールのConsoleを開き、以下のメッセージが表示されていることを確認してください。

```
第8回の準備ができました！
```

これで準備は完了です。

今回の授業では、主に`handson`フォルダ内のファイルを編集しながら、DOM操作を学習していきます。

また、各章の確認問題と最後の演習問題では、それぞれ専用のフォルダを作成して取り組みます。

準備ができたら、第1章へ進みましょう。

# 1. DOMの基本

これまでの授業では、JavaScriptを使って計算や条件分岐、繰り返し処理などを実行してきました。

しかし、JavaScriptの大きな特徴の1つは、HTMLやCSSと組み合わせて、Webページの内容や見た目を変更できることです。

例えば、次のようなWebページがあるとします。

```html
<h1>お知らせ</h1>
<p>イベントの準備中です。</p>
```

このHTMLをブラウザで開くと、見出しと文章が表示されます。

では、JavaScriptを使って「イベントの準備中です。」という文章を「イベントの開催が決定しました！」に変更することはできるのでしょうか。

実は、JavaScriptには、ブラウザに表示されているHTML要素を取得し、その内容を書き換える仕組みが用意されています。

この仕組みを理解するために必要なのが、**DOM（Document Object Model）**です。

この章では、DOMの基本的な仕組みと、JavaScriptからWebページを操作する考え方を学習します。

## 1-1. DOMとは

DOMとは、**Document Object Model（ドキュメント・オブジェクト・モデル）**の略称です。

ブラウザがHTMLを読み込むと、その内容をプログラムから扱えるように、オブジェクトを使った構造として表現します。

この仕組みがDOMです。

ここでいうオブジェクトとは、データや機能をまとめて扱うためのものです。

第5回の授業では、次のようなオブジェクトを学習しました。

```javascript
const student = {
    name: "田中",
    score: 85
};

console.log(student.name);
```

このコードでは、`student`というオブジェクトに`name`や`score`というプロパティが用意されています。

JavaScriptでは、このようなオブジェクトを使って、さまざまな情報を管理できます。

DOMでも、HTML要素などがオブジェクトとして表現されます。

例えば、次のHTMLを考えてみましょう。

```html
<h1>学校イベント案内</h1>
<p>イベント情報を公開しています。</p>
```

ブラウザは、このHTMLを読み込むと、`h1`要素や`p`要素をDOMの中で扱えるようにします。

そのため、JavaScriptから次のような操作が可能になります。

- `h1`要素を取得する
- `h1`要素の文字列を変更する
- `p`要素の文字列を変更する
- HTML要素の属性を変更する
- HTML要素にCSSのクラスを追加する

つまり、DOMは、**JavaScriptからWebページの構造や内容を操作するための仕組み**と考えることができます。

### HTMLとJavaScriptの役割

これまで学習してきたHTML・CSS・JavaScriptの役割を整理しましょう。

| 技術 | 主な役割 |
| --- | --- |
| HTML | Webページの構造や内容を定義する |
| CSS | Webページの見た目を整える |
| JavaScript | Webページに処理や動きを追加する |
| DOM | JavaScriptなどからWebページの構造や内容を扱うための仕組み |

例えば、HTMLで「準備中」という文章を記述し、CSSで背景色を灰色に設定したとします。

その後、JavaScriptからDOMを操作すれば、文章を「開催決定」に変更し、背景色を緑色にすることもできます。

このように、DOMを利用すると、HTMLファイルを直接編集しなくても、ブラウザ上のWebページを変更できるようになります。

## 1-2. HTMLとDOMの関係

DOMの重要な特徴は、HTMLの構造が階層的に表現されることです。

例えば、次のHTMLを確認してください。

```html
<body>
    <main>
        <h1>学校イベント案内</h1>

        <section>
            <h2>作品展示会</h2>
            <p>学生の作品を展示します。</p>
        </section>
    </main>
</body>
```

このHTMLでは、`body`要素の中に`main`要素があり、その中に`h1`要素や`section`要素があります。

さらに、`section`要素の中には`h2`要素と`p`要素があります。

このように、HTML要素は別のHTML要素の中に配置されることがあります。

DOMでは、このような構造を**ツリー構造（Tree Structure）**として表現します。

### DOMツリーとは

ツリー構造とは、データが親子関係を持ちながら、木の枝のようにつながっている構造のことです。

先ほどのHTMLを、要素の関係が分かるように簡略化すると、次のようになります。

```
body
└── main
    ├── h1
    └── section
        ├── h2
        └── p
```

このようなDOMの階層構造を、**DOMツリー（DOM Tree）**と呼びます。

実際のDOMには、要素だけでなく文字列などを表すノードも含まれていますが、まずはHTML要素同士の関係を理解しましょう。

### 親要素と子要素

HTMLでは、ある要素の中に別の要素が配置されている場合、親子関係が生まれます。

例えば、次のHTMLを確認してください。

```html
<section>
    <h2>作品展示会</h2>
    <p>学生の作品を展示します。</p>
</section>
```

この場合、要素同士の関係は次のようになります。

| 要素 | 関係 |
| --- | --- |
| `section` | `h2`と`p`の親要素 |
| `h2` | `section`の子要素 |
| `p` | `section`の子要素 |

`h2`と`p`は同じ親要素を持っているため、兄弟要素と呼ばれます。

DOMでは、このような要素同士の関係も扱うことができます。

なお、JavaScriptから要素を操作する際に、必ずしも親子関係をたどる必要はありません。

後ほど学習する方法を使えば、`id`や`class`などを指定して、目的のHTML要素を直接取得することもできます。

### 開発者ツールでDOMを確認する

実際に、ブラウザでDOMを確認してみましょう。

1. `handson`フォルダの`index.html`をブラウザで開く
2. `F12`キーを押して開発者ツールを開く
3. 「Elements（要素）」タブを選択する
4. HTMLの構造が表示されていることを確認する

Elementsタブでは、ブラウザが現在扱っているDOMの構造を確認できます。

`html`や`body`、`main`、`section`などの要素が階層的に表示されているはずです。

要素の左側にある矢印をクリックすると、その要素の中にある子要素を確認できます。

また、Elementsタブで表示されているHTMLは、元のHTMLファイルの内容と必ずしも同じではありません。

JavaScriptなどによってDOMが変更された場合、Elementsタブには変更後の構造が表示されます。

**HTMLファイルはWebページの元となる内容を記述したものであり、DOMはブラウザが現在扱っているWebページの構造**です。

この違いを覚えておきましょう。

## 1-3. documentオブジェクトとは

JavaScriptからDOMを操作するときに重要なのが、`document`というオブジェクトです。

`document`は、**現在のWebページの文書を表すオブジェクト**です。

ブラウザでは、この`document`を使って、HTML要素を取得したり、Webページの情報を確認したりできます。

例えば、次のコードを確認してください。

```javascript
console.log(document);
```

このコードでは、`document`オブジェクトをコンソールに表示しています。

それでは、実際に試してみましょう。

`handson`フォルダの`script.js`に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
console.log(document);
```

ファイルを保存したら、ブラウザを再読み込みして、開発者ツールのConsoleを確認してください。

コンソールには、HTML文書の構造が表示されます。

ブラウザによって表示形式は異なりますが、`document`の内容を展開すると、HTML要素などを確認できます。

ここで重要なのは、**JavaScriptからWebページ全体を表すオブジェクトにアクセスできている**ということです。

### documentのプロパティ

第5回で学習したオブジェクトと同じように、`document`にもさまざまなプロパティが用意されています。

例えば、`document.title`というプロパティがあります。

これは、現在のWebページのタイトルを表すプロパティです。

次のコードを、`script.js`の最後に追加してください。

**script.js（追加部分）**

```javascript
console.log(document.title);
```

実行結果：

```
第8回 DOM操作の基本
```

この文字列は、`index.html`の`title`要素に記述されている内容です。

```html
<title>第8回 DOM操作の基本</title>
```

つまり、`document.title`を使用すると、現在のWebページのタイトルを取得できます。

このように、`document`のプロパティを利用することで、Webページに関する情報を取得できます。

### documentにはメソッドも用意されている

`document`には、プロパティだけでなく、さまざまなメソッドも用意されています。

メソッドとは、オブジェクトに関連付けられた関数のことです。

これまでにも、次のようなメソッドを使用してきました。

```javascript
console.log("こんにちは！");
```

`console.log()`は、`console`オブジェクトに用意されたメソッドです。

同じように、`document`にもHTML要素を取得するためのメソッドなどが用意されています。

例えば、次のようなメソッドがあります。

| メソッド | 役割 |
| --- | --- |
| `querySelector()` | 条件に一致する最初のHTML要素を取得する |
| `querySelectorAll()` | 条件に一致するすべてのHTML要素を取得する |

これらを使用すると、Webページの中から目的のHTML要素を探して取得できます。

詳しい書き方は、第2章で学習します。

## 1-4. JavaScriptからHTMLを操作する仕組み

ここまで、DOMの基本的な仕組みと、`document`オブジェクトについて学習しました。

DOMを利用すると、JavaScriptからWebページの情報を取得するだけでなく、変更することもできます。

まずは、簡単な例として、Webページのタイトルを変更してみましょう。

### JavaScriptからページのタイトルを変更する

先ほどは、`document.title`を使用して、Webページのタイトルを取得しました。

```javascript
console.log(document.title);
```

実は、このプロパティには新しい文字列を代入することもできます。

`handson`フォルダの`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
document.title = "学校イベント案内";
```

ファイルを保存し、ブラウザを再読み込みしてください。

ブラウザのタブに表示されているタイトルが「学校イベント案内」に変更されます。

ここで重要なのは、HTMLファイルの`title`要素を書き換えていないことです。

`index.html`には、引き続き次のように記述されています。

```html
<title>第8回 DOM操作の基本</title>
```

しかし、JavaScriptによってDOMの情報が変更されたため、ブラウザ上では新しいタイトルが表示されています。

このように、JavaScriptからDOMを操作することで、元のHTMLファイルを編集せずにWebページの表示を変更できます。

なお、今回変更したのはブラウザのタブに表示されるタイトルです。

Webページ内にある`h1`要素の文字列は変更されません。

### DOM操作の基本的な流れ

実際にWebページ内の文章や画像などを変更するときは、基本的に次の流れで処理を行います。

1. JavaScriptから目的のHTML要素を取得する
2. 取得したHTML要素の内容や属性などを変更する
3. ブラウザの表示に変更結果が反映される

例えば、イベント告知ページの見出しを変更する場合を考えてみましょう。

現在の`index.html`には、次のようなHTMLが記述されています。

```html
<h2 id="event-title">イベント情報を準備中です</h2>
```

この見出しを「秋の作品展示会」に変更したい場合、JavaScriptから次のような処理を行います。

```
① idが「event-title」のHTML要素を取得する
            ↓
② 取得した要素の文字列を変更する
            ↓
③ Webページの見出しが「秋の作品展示会」に変わる
```

このように、DOM操作では、**どのHTML要素を操作するのか**と、**その要素をどのように変更するのか**を考えることが重要です。

DOM操作を使うと、文章の変更だけでなく、画像の変更やCSSの操作なども実現できます。

また、これまでに学習した変数や条件分岐、関数などと組み合わせることで、より複雑な処理を作成することもできます。

例えば、条件分岐を使って「開催前」「開催中」「終了」といった表示を変更することも可能です。

今回の授業では、このようなDOM操作を少しずつ実装していきます。

次の第2章では、実際にJavaScriptからHTML要素を取得する方法を学習しましょう。

# 2. HTML要素の取得

第1章では、DOMの基本的な仕組みと、`document`オブジェクトについて学習しました。

DOMを利用すると、JavaScriptからWebページのHTML要素を取得したり、内容や見た目を変更したりできます。

しかし、WebページにはさまざまなHTML要素があります。

例えば、今回作成したイベント告知ページにも、`h1`、`h2`、`p`、`a`など、複数のHTML要素が存在しています。

これらの要素の中から、JavaScriptで操作したい要素を指定するにはどうすればよいのでしょうか。

そこで使用するのが、`querySelector()`や`querySelectorAll()`というメソッドです。

この章では、JavaScriptから目的のHTML要素を取得する方法を学習します。

## 2-1. querySelector()の基本

`querySelector()`は、**指定した条件に一致する最初のHTML要素を取得するメソッド**です。

`document`オブジェクトに用意されており、次のように使用します。

```javascript
document.querySelector("セレクタ");
```

ここでいうセレクタとは、取得したいHTML要素を指定するためのものです。

CSSで要素を指定するときに使用してきたセレクタと同じ書き方を利用できます。

例えば、次のようなHTMLがあるとします。

```html
<h1>学校イベント案内</h1>
<p>イベント情報を公開しています。</p>
```

このHTMLから`h1`要素を取得したい場合は、次のように記述します。

```javascript
document.querySelector("h1");
```

このコードを実行すると、HTMLの中から最初の`h1`要素を探し、その要素を表すオブジェクトが返されます。

### 実際にHTML要素を取得する

それでは、今回作成したイベント告知ページで試してみましょう。

まず、`handson`フォルダの`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const heading = document.querySelector("h1");

console.log(heading);
```

ファイルを保存し、ブラウザを再読み込みしてConsoleを確認してください。

実行結果：

```html
<h1>学校イベント案内</h1>
```

※ Consoleでの表示形式は、ブラウザによって異なる場合があります。

このように、HTML要素がコンソールに表示されます。

今回のコードでは、次の処理を行っています。

1. `document.querySelector("h1")`で`h1`要素を取得する
2. 取得した要素を変数`heading`に代入する
3. `console.log(heading)`で取得した要素を確認する

ここで重要なのは、**取得しているのは単なる文字列ではなく、HTML要素を表すオブジェクトである**という点です。

そのため、取得した要素に対して、後ほど学習する文章の変更やCSSの操作などを行うことができます。

### 複数の要素がある場合

では、同じ種類のHTML要素が複数存在する場合はどうなるのでしょうか。

例えば、次のHTMLを考えてみましょう。

```html
<p>1つ目の文章</p>
<p>2つ目の文章</p>
<p>3つ目の文章</p>
```

このHTMLに対して、次のコードを実行します。

```javascript
const paragraph = document.querySelector("p");

console.log(paragraph);
```

実行結果：

```html
<p>1つ目の文章</p>
```

`querySelector()`は、指定した条件に一致する**最初の1つの要素だけ**を取得します。

今回の場合、`p`要素は3つありますが、最初の`p`要素だけが取得されます。

複数の要素をまとめて取得する方法については、後ほど学習します。

## 2-2. CSSセレクタを使った要素の取得

`querySelector()`では、CSSと同じセレクタを使用してHTML要素を指定できます。

これまでCSSを学習した際に、次のような指定方法を使用してきました。

- 要素セレクタ：`h1`、`p`など
- クラスセレクタ：`.card`、`.title`など
- IDセレクタ：`#main`、`#message`など

JavaScriptでも、これらをそのまま利用できます。

### IDを指定して取得する

まずは、IDを使ってHTML要素を取得してみましょう。

今回の`index.html`には、次の要素があります。

```html
<h2 id="event-title">イベント情報を準備中です</h2>
```

この要素には、`event-title`というIDが設定されています。

IDを指定する場合は、CSSと同じように`#`を使用します。

`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const eventTitle = document.querySelector("#event-title");

console.log(eventTitle);
```

実行結果：

```html
<h2 id="event-title">イベント情報を準備中です</h2>
```

今回は、`id="event-title"`が設定された要素を取得しています。

```javascript
document.querySelector("#event-title");
```

`#`を付けることで、IDを指定していることを表します。

なお、HTMLの`id`属性には、同じページ内で重複しない値を設定することが基本です。

特定の要素を1つだけ取得したい場合には、IDを指定する方法が分かりやすいでしょう。

### classを指定して取得する

次は、classを使用してHTML要素を取得してみましょう。

今回の`index.html`には、次の要素があります。

```html
<p id="event-status" class="status">準備中</p>
```

この要素には、`status`というクラスが設定されています。

クラスを指定する場合は、CSSと同じように`.`を使用します。

`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const status = document.querySelector(".status");

console.log(status);
```

実行結果：

```html
<p id="event-status" class="status">準備中</p>
```

今回は、`class="status"`が設定された要素を取得しています。

```javascript
document.querySelector(".status");
```

クラスは複数のHTML要素に設定できますが、`querySelector()`で取得されるのは最初に一致した1つの要素だけです。

### セレクタの書き方を整理する

ここまでに学習した3つの指定方法を整理しましょう。

| 指定方法 | 書き方 | 取得する要素 |
| --- | --- | --- |
| 要素セレクタ | `"h1"` | 最初の`h1`要素 |
| IDセレクタ | `"#event-title"` | IDが`event-title`の要素 |
| クラスセレクタ | `".status"` | クラスが`status`の最初の要素 |

セレクタは文字列として指定するため、`"`や`'`で囲む必要があります。

また、CSSと同じように、次のような組み合わせも使用できます。

```javascript
document.querySelector(".event-card h2");
```

このコードでは、`event-card`というクラスを持つ要素の中にある、最初の`h2`要素を取得します。

CSSで学習したセレクタの知識を、そのままDOM操作でも活用できることを覚えておきましょう。

## 2-3. 取得した要素を変数に保存する

ここまでのコードでは、取得したHTML要素を変数に代入してきました。

例えば、次のコードです。

```javascript
const eventTitle = document.querySelector("#event-title");
```

このコードでは、取得したHTML要素を`eventTitle`という変数に保存しています。

なぜ、わざわざ変数に保存しているのでしょうか。

それは、**取得した要素を後から何度でも使用できるようにするため**です。

### 変数に保存するメリット

例えば、次のようなコードを考えてみましょう。

```javascript
console.log(document.querySelector("#event-title"));
console.log(document.querySelector("#event-title"));
```

このコードでも、HTML要素を取得して表示できます。

しかし、同じ要素を取得するためのコードを2回記述しています。

一方、変数を使うと次のようになります。

```javascript
const eventTitle = document.querySelector("#event-title");

console.log(eventTitle);
console.log(eventTitle);
```

こちらでは、`querySelector()`を使って取得した要素を変数に保存しています。

そのため、同じ要素を使用するときに、毎回`querySelector()`を記述する必要がありません。

また、取得する要素を変更したい場合も、変数に代入している部分を修正するだけで済みます。

### 複数のHTML要素を取得する

それでは、イベント告知ページで使用する複数のHTML要素を取得してみましょう。

`handson`フォルダの`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const eventStatus = document.querySelector("#event-status");
const eventLink = document.querySelector("#event-link");

console.log(eventTitle);
console.log(eventDescription);
console.log(eventStatus);
console.log(eventLink);
```

ブラウザを再読み込みし、Consoleを確認してください。

次の4つのHTML要素が取得されていれば成功です。

- イベントのタイトルを表示する`h2`要素
- イベントの説明文を表示する`p`要素
- 開催状況を表示する`p`要素
- 詳細ページへのリンクを表示する`a`要素

今回は、それぞれのHTML要素を別の変数に保存しています。

| 変数名 | 取得するHTML要素 |
| --- | --- |
| `eventTitle` | イベントのタイトル |
| `eventDescription` | イベントの説明文 |
| `eventStatus` | 開催状況 |
| `eventLink` | 詳細ページへのリンク |

このように、取得した要素を変数に保存しておくことで、それぞれのHTML要素をJavaScriptから操作しやすくなります。

また、変数名には、取得した要素の役割が分かる名前を付けることを意識しましょう。

次の章では、これらの変数を使って、実際にHTML要素の内容を変更していきます。

## 2-4. querySelectorAll()で複数の要素を取得する

ここまで使用してきた`querySelector()`は、条件に一致する最初のHTML要素を1つだけ取得するメソッドでした。

しかし、Webページでは、同じ条件に一致する複数のHTML要素をまとめて取得したい場合もあります。

そのような場合に使用するのが、`querySelectorAll()`です。

`querySelectorAll()`は、**指定した条件に一致するすべてのHTML要素を取得するメソッド**です。

基本的な書き方は次のとおりです。

```javascript
document.querySelectorAll("セレクタ");
```

### 複数のp要素を取得する

今回の`index.html`には、複数の`p`要素があります。

```html
<p id="event-status" class="status">準備中</p>
```

```html
<p id="event-description">
    イベントの詳細情報は、後日公開予定です。
</p>
```

これらをまとめて取得してみましょう。

`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
```

実行結果の例：

```
NodeList(2) [p#event-status.status, p#event-description]
```

※ 表示形式はブラウザによって異なります。

今回は、2つの`p`要素がまとめて取得されています。

`querySelector()`では最初の1つしか取得できませんでしたが、`querySelectorAll()`では条件に一致するすべての要素を取得できます。

### NodeListとは

`querySelectorAll()`で取得した結果は、**NodeList（ノードリスト）**という形式で返されます。

NodeListとは、複数のノードを順番にまとめて扱うためのものです。

今回の場合、取得した2つのHTML要素がNodeListに格納されています。

NodeListは配列と似た方法で扱うことができますが、通常の配列とは異なるオブジェクトです。

例えば、次のように`length`を使用すると、取得した要素の数を確認できます。

```javascript
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs.length);
```

実行結果：

```
2
```

今回のページには`p`要素が2つあるため、`2`が表示されます。

### インデックスを使って要素を取得する

NodeListでは、配列と同じようにインデックスを使用して、それぞれの要素を取り出すことができます。

`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs[0]);
console.log(paragraphs[1]);
```

実行結果：

```html
<p id="event-status" class="status">準備中</p>
```

```html
<p id="event-description">
    イベントの詳細情報は、後日公開予定です。
</p>
```

配列と同じように、インデックスは`0`から始まります。

| インデックス | 取得する要素 |
| --- | --- |
| `0` | 1つ目の`p`要素 |
| `1` | 2つ目の`p`要素 |

このように、NodeListを使用すると、複数のHTML要素をまとめて管理し、必要な要素を取り出すことができます。

### forEach()で複数の要素を処理する

第6回の授業では、`forEach()`を使って配列の要素を順番に処理する方法を学習しました。

実は、NodeListにも`forEach()`メソッドが用意されています。

そのため、取得したHTML要素を順番に処理することができます。

`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
    console.log(paragraph);
});
```

実行すると、取得した2つの`p`要素が順番にコンソールに表示されます。

今回の`forEach()`では、各HTML要素がコールバック関数の仮引数`paragraph`に渡されます。

1回目は最初の`p`要素、2回目は次の`p`要素が渡されます。

つまり、次のような流れで処理されます。

1. `querySelectorAll("p")`で2つの`p`要素を取得する
2. `forEach()`で1つ目の要素を処理する
3. `forEach()`で2つ目の要素を処理する
4. すべての要素の処理が終了する

このように、これまでに学習したコールバック関数をDOM操作でも利用できます。

### querySelector()とquerySelectorAll()の違い

ここまでの2つのメソッドを比較してみましょう。

| 比較項目 | querySelector() | querySelectorAll() |
| --- | --- | --- |
| 取得する要素 | 最初の1つ | 条件に一致するすべて |
| 戻り値 | HTML要素、またはnull | NodeList |
| 複数要素の取得 | できない | できる |
| 主な用途 | 特定の要素を1つ取得する | 複数の要素をまとめて取得する |

例えば、イベントのタイトルを1つだけ取得する場合は、`querySelector()`が適しています。

一方、同じクラスが設定された複数のカードをまとめて取得したい場合は、`querySelectorAll()`が便利です。

操作したいHTML要素の数に応じて、使い分けましょう。

## 2-5. 要素を取得できなかった場合

`querySelector()`や`querySelectorAll()`を使用するときには、注意しなければならないことがあります。

それは、**指定した条件に一致するHTML要素が存在しない場合**です。

例えば、今回の`index.html`には、`message`というIDが設定された要素は存在しません。

では、次のコードを実行するとどうなるでしょうか。

```javascript
const message = document.querySelector("#message");

console.log(message);
```

実行結果：

```
null
```

`null`は、値が存在しないことを表す特別な値です。

`querySelector()`は、一致する要素が見つからなかった場合、`null`を返します。

### nullのまま要素を操作するとどうなる？

例えば、次のコードを確認してください。

```javascript
const message = document.querySelector("#message");

console.log(message.id);
```

このコードでは、取得した要素の`id`プロパティを確認しようとしています。

しかし、`#message`に一致するHTML要素が存在しないため、変数`message`には`null`が格納されています。

そのため、実行するとエラーが発生します。

エラーの例：

```
Uncaught TypeError: Cannot read properties of null (reading 'id')
```

これは、`null`に対して`id`プロパティを読み取ろうとしたために発生するエラーです。

DOM操作でこのようなエラーが発生した場合は、まず指定したセレクタが正しいか確認しましょう。

特に、以下のような間違いに注意してください。

- IDの指定で`#`を付け忘れている
- classの指定で`.`を付け忘れている
- HTMLに設定したIDやclassの名前を間違えている
- 対象のHTML要素が存在していない
- 対象のHTML要素が作られる前にJavaScriptを実行している

### 要素が存在するか確認する

取得したHTML要素が存在するかどうかは、`if`文を使って確認できます。

例えば、次のコードです。

```javascript
const message = document.querySelector("#message");

if (message !== null) {
    console.log(message);
} else {
    console.log("要素が見つかりませんでした");
}
```

実行結果：

```
要素が見つかりませんでした
```

今回は、`message`が`null`ではない場合にだけ、取得した要素を表示するようにしています。

このように、条件分岐を組み合わせることで、HTML要素が存在しない場合にも対応できます。

なお、`querySelectorAll()`の場合は、要素が見つからなくても`null`にはなりません。

一致する要素がない場合は、要素数が`0`のNodeListが返されます。

```javascript
const elements = document.querySelectorAll(".unknown");

console.log(elements.length);
```

実行結果：

```
0
```

この違いも覚えておきましょう。

## 2-6. 確認問題（practice01）

ここまでに学習した`querySelector()`と`querySelectorAll()`を使って、HTML要素を取得するプログラムを作成してみましょう。

今回は、学校の施設案内ページから、指定されたHTML要素を取得します。

### 作業フォルダ

`Lesson08`フォルダの中に`practice01`フォルダを作成してください。

その中に、次の2つのファイルを作成します。

- `index.html`
- `script.js`

フォルダ構成は以下のようになります。

```
Lesson08/
├── handson/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── practice01/
    ├── index.html
    └── script.js
```

### 使用するHTML

`practice01`フォルダの`index.html`には、以下のコードを記述してください。

**index.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>学校施設案内</title>
</head>
<body>
    <h1 id="page-title">学校施設案内</h1>

    <main>
        <section class="facility">
            <h2>図書室</h2>
            <p>本を読んだり、自習したりできます。</p>
        </section>

        <section class="facility">
            <h2>PCルーム</h2>
            <p>プログラミングの学習ができます。</p>
        </section>

        <section class="facility">
            <h2>学生ラウンジ</h2>
            <p>休憩や学生同士の交流に利用できます。</p>
        </section>

        <a id="contact-link" href="#">お問い合わせ</a>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

`script.js`は空の状態から作成してください。

### 問題

上記のHTMLから、JavaScriptを使って指定されたHTML要素を取得してください。

今回は、次の4つの処理を実装します。

**1. ページの見出しを取得する**

- `querySelector()`を使用すること
- IDが`page-title`の要素を取得すること
- 取得した要素を変数`pageTitle`に代入すること
- 取得した要素を`console.log()`で表示すること

**2. お問い合わせリンクを取得する**

- `querySelector()`を使用すること
- IDが`contact-link`の要素を取得すること
- 取得した要素を変数`contactLink`に代入すること
- 取得した要素を`console.log()`で表示すること

**3. 施設情報をまとめて取得する**

- `querySelectorAll()`を使用すること
- クラスが`facility`の要素をすべて取得すること
- 取得したNodeListを変数`facilities`に代入すること
- `length`を使用して、取得した要素の数を表示すること

**4. すべての施設情報を表示する**

- 取得したNodeListに対して`forEach()`を使用すること
- コールバック関数にはアロー関数を使用すること
- 各要素を`console.log()`で順番に表示すること

### 実行結果

Consoleには、次の内容が順番に表示されるようにしてください。

1. `h1`要素（学校施設案内）
2. `a`要素（お問い合わせ）
3. 数値の`3`
4. 1つ目の`section`要素（図書室）
5. 2つ目の`section`要素（PCルーム）
6. 3つ目の`section`要素（学生ラウンジ）

※ HTML要素は、ブラウザによって表示形式が異なる場合があります。

### 完成条件

- `querySelector()`を使って、指定された2つの要素を取得できていること
- 取得した要素を、それぞれ指定された変数に代入できていること
- `querySelectorAll()`で3つの施設情報をまとめて取得できていること
- NodeListの`length`を使って、要素数の`3`を表示できていること
- `forEach()`を使って、3つの施設情報を順番に表示できていること
- Consoleに指定された結果が正しい順番で表示されること

これで、第2章の確認問題は終了です。

ここまでで、JavaScriptからHTML要素を取得する方法を学習しました。

次の第3章では、取得したHTML要素の文章やHTMLの内容を実際に変更していきましょう。

# 3. HTML要素の内容を変更する

第2章では、`querySelector()`や`querySelectorAll()`を使用して、JavaScriptからHTML要素を取得する方法を学習しました。

しかし、HTML要素を取得するだけでは、Webページの表示は変わりません。

DOM操作では、取得したHTML要素に対して、文章の変更や属性の変更など、さまざまな操作を行うことができます。

この章では、HTML要素の内容を変更するための、次の2つのプロパティを学習します。

- `textContent`：HTML要素のテキストを取得・変更する
- `innerHTML`：HTML要素の中にあるHTMLを取得・変更する

これらを使って、イベント告知ページの文章をJavaScriptから変更していきましょう。

## 3-1. textContentでテキストを変更する

`textContent`は、**HTML要素に含まれるテキストを取得したり、変更したりするためのプロパティ**です。

第2章で学習した`querySelector()`と組み合わせることで、Webページに表示されている文章をJavaScriptから変更できます。

### textContentの基本構文

`textContent`を使用してHTML要素のテキストを変更する場合は、次のように記述します。

```javascript
取得した要素.textContent = "変更後の文字列";
```

このコードでは、取得したHTML要素のテキストを、指定した文字列に変更しています。

例えば、次のHTMLがあるとします。

```html
<h1 id="title">お知らせ</h1>
```

この見出しを「イベント開催決定」に変更したい場合は、次のように記述します。

```javascript
const title = document.querySelector("#title");

title.textContent = "イベント開催決定";
```

このコードを実行すると、Webページの見出しが変更されます。

変更前：

```
お知らせ
```

変更後：

```
イベント開催決定
```

JavaScriptからDOMを操作することで、HTMLファイルを書き換えずに、ブラウザに表示されている文字列を変更できました。

### イベント告知ページのタイトルを変更する

それでは、実際に今回のイベント告知ページを変更してみましょう。

`handson`フォルダの`index.html`には、次のHTML要素があります。

```html
<h2 id="event-title">イベント情報を準備中です</h2>
```

現在は「イベント情報を準備中です」と表示されていますが、これを「秋の作品展示会」に変更してみます。

`handson`フォルダの`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const eventTitle = document.querySelector("#event-title");

eventTitle.textContent = "秋の作品展示会";
```

ファイルを保存し、ブラウザを再読み込みしてください。

イベント告知ページのタイトルが「秋の作品展示会」に変更されます。

ここで、今回のコードを確認しましょう。

```javascript
const eventTitle = document.querySelector("#event-title");
```

まず、`querySelector()`を使用して、IDが`event-title`のHTML要素を取得しています。

取得したHTML要素は、変数`eventTitle`に代入しています。

続いて、次のコードでテキストを変更しています。

```javascript
eventTitle.textContent = "秋の作品展示会";
```

`textContent`に新しい文字列を代入することで、取得したHTML要素のテキストが変更されます。

これが、DOM操作によってHTML要素の内容を変更する基本的な流れです。

### textContentで現在のテキストを取得する

`textContent`は、テキストを変更するだけでなく、現在のテキストを取得することもできます。

例えば、次のコードを確認してください。

```javascript
const eventTitle = document.querySelector("#event-title");

console.log(eventTitle.textContent);
```

実行結果：

```
イベント情報を準備中です
```

今回は、`textContent`の値を`console.log()`で表示しています。

JavaScriptから文字列を変更していないため、HTMLに記述された元の文字列が取得されます。

つまり、`textContent`には次の2つの使い方があります。

| 書き方 | 役割 |
| --- | --- |
| `要素.textContent` | 現在のテキストを取得する |
| `要素.textContent = "文字列"` | テキストを変更する |

なお、代入する前にテキストを取得するか、代入した後に取得するかによって、結果は変わります。

例えば、次のコードを確認してください。

```javascript
const eventTitle = document.querySelector("#event-title");

console.log(eventTitle.textContent);

eventTitle.textContent = "秋の作品展示会";

console.log(eventTitle.textContent);
```

実行結果：

```
イベント情報を準備中です
秋の作品展示会
```

最初の`console.log()`では変更前の文字列が表示され、2回目では変更後の文字列が表示されます。

このように、JavaScriptの処理によってHTML要素の状態が変化していることが分かります。

### 複数のHTML要素のテキストを変更する

続いて、イベント告知ページのタイトルだけでなく、説明文や開催状況も変更してみましょう。

今回のHTMLには、次の要素があります。

```html
<p id="event-status" class="status">準備中</p>

<h2 id="event-title">イベント情報を準備中です</h2>

<p id="event-description">
    イベントの詳細情報は、後日公開予定です。
</p>
```

これらをJavaScriptから変更します。

`script.js`を以下のように書き換えてください。

**script.js**

```javascript
const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const eventStatus = document.querySelector("#event-status");

eventTitle.textContent = "秋の作品展示会";
eventDescription.textContent = "学生が制作したWebサイトやアプリを展示します。";
eventStatus.textContent = "開催決定";
```

ブラウザを再読み込みすると、イベント告知ページの表示が変更されます。

| HTML要素 | 変更前 | 変更後 |
| --- | --- | --- |
| イベントタイトル | イベント情報を準備中です | 秋の作品展示会 |
| イベント説明文 | イベントの詳細情報は、後日公開予定です。 | 学生が制作したWebサイトやアプリを展示します。 |
| 開催状況 | 準備中 | 開催決定 |

今回は、3つのHTML要素を取得し、それぞれの`textContent`を変更しています。

このように、HTML要素ごとに変数を用意しておくことで、複数の箇所をJavaScriptから変更できます。

また、変更する文字列を別の値に書き換えれば、異なるイベント情報を表示することも可能です。

### 条件分岐と組み合わせる

`textContent`は、これまで学習した条件分岐と組み合わせることもできます。

例えば、イベントの開催状況を変数で管理してみましょう。

次のコードを確認してください。

```javascript
const eventStatus = document.querySelector("#event-status");

const isOpen = true;

if (isOpen) {
    eventStatus.textContent = "開催中";
} else {
    eventStatus.textContent = "開催前";
}
```

このコードでは、変数`isOpen`の値によって、表示する文字列を変更しています。

- `true`の場合：「開催中」
- `false`の場合：「開催前」

`isOpen`の値を`false`に変更して、表示結果が変わることを確認してみましょう。

今回は`true`または`false`を直接指定していますが、今後学習するイベント処理などと組み合わせることで、さまざまな条件に応じて表示内容を変更できるようになります。

## 3-2. innerHTMLでHTMLを変更する

ここまで学習した`textContent`では、HTML要素のテキストを変更できました。

しかし、Webページでは、文章の一部分を太字にしたり、改行を入れたりしたい場合もあります。

例えば、次のHTMLを考えてみましょう。

```html
<p>
    <strong>重要なお知らせ</strong>
    明日は休校です。
</p>
```

このHTMLでは、`strong`要素によって「重要なお知らせ」が強調されます。

では、JavaScriptからこのようなHTMLを設定するにはどうすればよいのでしょうか。

そこで使用するのが、`innerHTML`です。

`innerHTML`は、**HTML要素の内側にあるHTMLを取得したり、変更したりするためのプロパティ**です。

### innerHTMLの基本構文

`innerHTML`を使ってHTML要素の内容を変更する場合は、次のように記述します。

```javascript
取得した要素.innerHTML = "HTMLを含む文字列";
```

例えば、次のHTMLがあるとします。

```html
<p id="message">お知らせを表示します。</p>
```

この要素の内容を変更したい場合は、次のように記述できます。

```javascript
const message = document.querySelector("#message");

message.innerHTML = "<strong>重要なお知らせ</strong>";
```

このコードを実行すると、`p`要素の中に`strong`要素が作られます。

変更後のDOMは、次のような構造になります。

```html
<p id="message">
    <strong>重要なお知らせ</strong>
</p>
```

`innerHTML`では、指定した文字列がHTMLとして解釈されます。

そのため、HTML要素を含む内容に変更できるのです。

### イベントの説明文を変更する

それでは、今回のイベント告知ページでも`innerHTML`を使用してみましょう。

第3章の前半では、次のコードでイベントの説明文を変更しました。

```javascript
eventDescription.textContent = "学生が制作したWebサイトやアプリを展示します。";
```

この説明文の一部分を太字にしてみます。

`script.js`にある説明文を変更するコードを、次のように書き換えてください。

**script.js（変更部分）**

```javascript
eventDescription.innerHTML = "学生が制作した<strong>Webサイトやアプリ</strong>を展示します。";
```

ブラウザを再読み込みすると、「Webサイトやアプリ」の部分が強調されて表示されます。

今回は、文字列の中に次のHTMLを含めています。

```html
<strong>Webサイトやアプリ</strong>
```

`innerHTML`によって、この部分がHTML要素として解釈されるため、Webページの一部分を強調できています。

### br要素を使って改行する

`innerHTML`では、`br`要素を使って改行を入れることもできます。

先ほどのコードを次のように変更してください。

**script.js（変更部分）**

```javascript
eventDescription.innerHTML = "学生が制作した<strong>Webサイトやアプリ</strong>を展示します。<br>ぜひご覧ください！";
```

ブラウザを再読み込みすると、次のように表示されます。

```
学生が制作したWebサイトやアプリを展示します。
ぜひご覧ください！
```

※ 実際の画面では、「Webサイトやアプリ」が太字で表示されます。

今回は、`<br>`によって文章を改行しています。

このように、`innerHTML`を使用すると、単純な文字列だけでなく、HTML要素を含む内容を設定できます。

### innerHTMLで現在のHTMLを取得する

`innerHTML`も、`textContent`と同じように、現在の内容を取得できます。

例えば、次のHTMLがあるとします。

```html
<p id="message">今日は<strong>晴れ</strong>です。</p>
```

このHTMLに対して、次のJavaScriptを実行します。

```javascript
const message = document.querySelector("#message");

console.log(message.innerHTML);
```

実行結果：

```
今日は<strong>晴れ</strong>です。
```

`innerHTML`では、要素の内側にあるHTMLを文字列として取得できます。

そのため、`strong`要素のタグも含まれています。

なお、`innerHTML`で取得できるのは、指定した要素自身のHTMLではなく、**その要素の内側にあるHTML**です。

今回の場合、外側の`p`要素自体は取得結果に含まれません。

## 3-3. textContentとinnerHTMLの違い

ここまで、`textContent`と`innerHTML`の2つを学習しました。

どちらもHTML要素の内容を変更できますが、重要な違いがあります。

それは、**文字列に含まれているHTMLタグを、HTMLとして解釈するかどうか**です。

この違いを、実際のコードで確認してみましょう。

### textContentでHTMLタグを指定した場合

まずは、`textContent`を使ってHTMLタグを含む文字列を設定してみます。

`handson`フォルダの`script.js`で、説明文を変更する部分を次のように書き換えてください。

**script.js（変更部分）**

```javascript
eventDescription.textContent = "<strong>作品展示会</strong>を開催します。";
```

ファイルを保存し、ブラウザを再読み込みしてください。

実行結果：

```
<strong>作品展示会</strong>を開催します。
```

今回は、`<strong>`や`</strong>`という文字列が、そのまま画面に表示されます。

これは、`textContent`が指定された内容をHTMLとして解釈せず、通常のテキストとして扱うためです。

### innerHTMLでHTMLタグを指定した場合

続いて、`textContent`を`innerHTML`に変更してみましょう。

**script.js（変更部分）**

```javascript
eventDescription.innerHTML = "<strong>作品展示会</strong>を開催します。";
```

今度は、ブラウザ上で「作品展示会」の部分が太字で表示されます。

`innerHTML`では、文字列に含まれる`strong`要素がHTMLとして解釈されるためです。

このように、同じ文字列を指定していても、使用するプロパティによって結果が変わります。

### 2つの違いを整理する

| 比較項目 | textContent | innerHTML |
| --- | --- | --- |
| 主な役割 | テキストの取得・変更 | HTMLの取得・変更 |
| HTMLタグの扱い | 通常の文字列として扱う | HTMLとして解釈する |
| 文字列の変更 | できる | できる |
| HTML要素を含む内容の設定 | できない | できる |
| 主な用途 | 見出しや文章の変更 | 強調や改行などを含む内容の変更 |

例えば、イベントのタイトルを変更するだけであれば、`textContent`で十分です。

```javascript
eventTitle.textContent = "秋の作品展示会";
```

一方、文章の一部分を強調したい場合は、`innerHTML`を使用できます。

```javascript
eventDescription.innerHTML = "学生の<strong>優秀作品</strong>を展示します。";
```

このように、目的に応じて使い分けることが大切です。

### innerHTMLを使用するときの注意点

`innerHTML`は便利ですが、使用するときには注意が必要です。

特に、利用者が入力した文字列や、外部から取得したデータを、そのまま`innerHTML`に代入しないようにしましょう。

`innerHTML`では、指定された文字列がHTMLとして解釈されます。

そのため、信頼できない文字列をそのまま代入すると、意図しないHTMLが作られたり、悪意のあるJavaScriptが実行されたりする危険性があります。

このような問題は、Webサイトのセキュリティに関わる重要なものです。

一方、`textContent`はHTMLタグを通常の文字列として扱うため、文字列をそのまま表示したい場合に適しています。

今回の授業では、`innerHTML`には自分で用意した固定のHTMLだけを指定します。

**単純に文字列を変更したい場合は`textContent`を優先し、HTML要素を含む内容が必要な場合に`innerHTML`を使用する**ことを意識しましょう。

### イベント告知ページを完成させる

最後に、ここまでの内容を組み合わせて、イベント告知ページの文章を整えましょう。

`handson`フォルダの`script.js`を以下のように書き換えてください。

**script.js（第3章終了時点）**

```javascript
const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const eventStatus = document.querySelector("#event-status");

eventTitle.textContent = "秋の作品展示会";

eventDescription.innerHTML = "学生が制作した<strong>Webサイトやアプリ</strong>を展示します。<br>ぜひご覧ください！";

eventStatus.textContent = "開催決定";
```

ブラウザを再読み込みして、イベント告知ページのタイトル・説明文・開催状況が変更されていることを確認してください。

また、開発者ツールのElementsタブを開き、`event-description`の中に`strong`要素や`br`要素が作られていることも確認してみましょう。

この時点で、HTMLファイルを直接編集しなくても、JavaScriptからWebページの文章やHTMLを変更できるようになりました。

ただし、JavaScriptによる今回のDOM操作は、元のHTMLファイルを書き換えて保存するものではありません。

ページを再読み込みすると、HTMLファイルが改めて読み込まれ、その後にJavaScriptが実行されることで、再び表示が変更されます。

この違いも覚えておきましょう。

## 3-4. 確認問題（practice02）

ここまでに学習した`querySelector()`、`textContent`、`innerHTML`を使って、学校のお知らせページの内容を変更してみましょう。

今回は、HTMLに用意された文章をJavaScriptから書き換え、一部分を強調したお知らせを作成します。

### 作業フォルダ

`Lesson08`フォルダの中に`practice02`フォルダを作成してください。

その中に、以下の2つのファイルを作成します。

- `index.html`
- `script.js`

フォルダ構成は以下のとおりです。

```
Lesson08/
├── handson/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── practice01/
│   ├── index.html
│   └── script.js
└── practice02/
    ├── index.html
    └── script.js
```

### 使用するHTML

`practice02`フォルダの`index.html`には、以下のコードを記述してください。

**index.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>学校からのお知らせ</title>
</head>
<body>
    <h1>学校からのお知らせ</h1>

    <main>
        <section>
            <h2 id="notice-title">新しいお知らせ</h2>

            <p id="notice-summary">
                お知らせの内容は準備中です。
            </p>

            <p id="notice-detail">
                詳細は後日公開します。
            </p>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

`script.js`は空の状態から作成してください。

### 問題

上記のHTMLを、JavaScriptからDOM操作して「図書室の利用時間変更のお知らせ」に変更してください。

今回は、次の3つの内容を変更します。

**1. お知らせのタイトルを変更する**

- `querySelector()`を使用して、IDが`notice-title`の要素を取得すること
- 取得した要素を変数`noticeTitle`に代入すること
- `textContent`を使用して、タイトルを「図書室の利用時間変更」に変更すること

**2. お知らせの説明文を変更する**

- `querySelector()`を使用して、IDが`notice-summary`の要素を取得すること
- 取得した要素を変数`noticeSummary`に代入すること
- `textContent`を使用して、文章を「11月から図書室の利用時間が変更されます。」に変更すること

**3. 詳細情報を変更する**

- `querySelector()`を使用して、IDが`notice-detail`の要素を取得すること
- 取得した要素を変数`noticeDetail`に代入すること
- `innerHTML`を使用して、次の内容を表示すること

```
利用時間：9:00～19:00
土曜日は17:00まで利用できます。
```

ただし、表示する際には、次の条件を満たしてください。

- 「9:00～19:00」の部分を`strong`要素で強調すること
- 1行目と2行目の間には`br`要素を使用すること
- JavaScriptからHTMLを変更すること
- `index.html`に記述された元の文章は変更しないこと

### 完成後の表示

Webページには、次の内容が表示されるようにしてください。

```
学校からのお知らせ

図書室の利用時間変更

11月から図書室の利用時間が変更されます。

利用時間：9:00～19:00
土曜日は17:00まで利用できます。
```

※ 実際の画面では、「9:00～19:00」の部分が太字で表示されます。

### 完成条件

- `querySelector()`を使って、指定された3つのHTML要素を取得できていること
- 取得した要素を、それぞれ指定された変数に代入できていること
- `textContent`を使用して、タイトルと説明文を変更できていること
- `innerHTML`を使用して、詳細情報を変更できていること
- `strong`要素によって、利用時間の部分が強調されていること
- `br`要素によって、詳細情報が2行に分かれて表示されていること
- HTMLファイルを書き換えず、JavaScriptによって指定された内容を表示できていること

これで、第3章の確認問題は終了です。

ここまでで、HTML要素を取得し、その内容をJavaScriptから変更する方法を学習しました。

次の第4章では、文章だけでなく、画像の`src`属性やリンクの`href`属性など、HTML要素の属性を変更する方法を学習していきましょう。

# 4. HTML要素の属性を変更する

第3章では、`textContent`や`innerHTML`を使って、HTML要素の内容を変更する方法を学習しました。

しかし、DOM操作で変更できるのは、文章やHTMLの内容だけではありません。

例えば、次のような操作もできます。

- Webページに表示する画像を変更する
- リンクをクリックしたときの移動先を変更する
- 画像の代替テキストを変更する
- HTML要素に新しい属性を設定する

これらの操作では、HTMLの**属性（Attribute）**を扱います。

この章では、JavaScriptからHTML要素の属性を取得・変更する方法を学習していきましょう。

## 4-1. HTMLの属性を復習する

HTMLの属性とは、HTML要素に追加の情報や設定を指定するためのものです。

例えば、次のHTMLを確認してください。

```html
<a href="https://example.com">Webサイトを見る</a>
```

このコードでは、`a`要素に`href`属性が設定されています。

`href`属性は、リンクをクリックしたときの移動先を指定するための属性です。

ほかにも、次のような属性があります。

| 属性 | 主な役割 |
| --- | --- |
| `id` | HTML要素を識別するための名前を指定する |
| `class` | HTML要素にクラス名を指定する |
| `src` | 画像などの読み込み元を指定する |
| `href` | リンク先を指定する |
| `alt` | 画像の代替テキストを指定する |
| `title` | HTML要素に補足情報を設定する |

これらは、これまでのHTML・CSSの授業でも使用してきました。

### JavaScriptから属性を操作する

これまで、HTMLの属性はHTMLファイルに直接記述していました。

しかし、DOMを利用すると、JavaScriptから属性を変更することもできます。

例えば、次のHTMLがあるとします。

```html
<a id="link" href="https://example.com">Webサイトを見る</a>
```

この要素の`href`属性を変更したい場合は、次のように記述できます。

```javascript
const link = document.querySelector("#link");

link.href = "https://developer.mozilla.org/";
```

このコードでは、まず`querySelector()`で`a`要素を取得しています。

そして、次のコードでリンク先を変更しています。

```javascript
link.href = "https://developer.mozilla.org/";
```

第3章で学習した`textContent`と同じように、取得した要素のプロパティに新しい値を代入しています。

DOMでは、HTMLの属性に対応するプロパティが用意されている場合があります。

そのため、`href`や`src`などは、プロパティを使って直接変更できます。

ただし、すべてのHTML属性を同じ名前のプロパティで操作できるわけではありません。

属性を指定して操作するための`setAttribute()`というメソッドも、後ほど学習します。

## 4-2. 画像のsrc属性を変更する

まずは、JavaScriptからWebページの画像を変更してみましょう。

画像を表示するときは、HTMLの`img`要素を使用します。

例えば、次のようなHTMLです。

```html
<img src="sample.jpg" alt="サンプル画像">
```

このコードでは、次の2つの属性を指定しています。

- `src`：画像ファイルの読み込み元
- `alt`：画像の代替テキスト

JavaScriptでは、これらの属性を変更することができます。

### イベント告知ページに画像を追加する

まず、今回作成しているイベント告知ページに画像を追加しましょう。

`handson`フォルダの`index.html`を開いてください。

`section`要素の中にある、開催状況を表示する`p`要素の直後に、次のコードを追加してください。

**index.html（追加部分）**

```html
<img
    id="event-image"
    class="event-image"
    src="https://placehold.co/680x280/e5e7eb/475569?text=Coming+Soon"
    alt="イベント準備中の画像"
>
```

今回の画像には、インターネット上でサンプル画像を表示できるサービス「placehold.co」を使用しています。

URLに指定する値によって、画像の大きさや背景色、表示する文字列を変更できます。

※ 画像を表示するにはインターネット接続が必要です。

続いて、`style.css`の最後に次のコードを追加してください。

**style.css（追加部分）**

```css
.event-image {
    display: block;
    width: 100%;
    margin: 20px 0;
    border-radius: 8px;
}
```

ファイルを保存し、ブラウザを再読み込みしてください。

イベント告知ページに「Coming Soon」と書かれた画像が表示されます。

### JavaScriptから画像を変更する

続いて、JavaScriptから画像を変更してみましょう。

`img`要素の`src`属性は、JavaScriptから`src`プロパティを使って変更できます。

基本的な書き方は次のとおりです。

```javascript
取得した画像要素.src = "新しい画像のURL";
```

それでは、実際に試してみましょう。

`handson`フォルダの`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
const eventImage = document.querySelector("#event-image");

eventImage.src = "https://placehold.co/680x280/2563eb/ffffff?text=Student+Exhibition";
```

ブラウザを再読み込みしてください。

先ほどの灰色の画像が、青色の「Student Exhibition」と書かれた画像に変更されます。

今回のコードを確認しましょう。

まず、次のコードで`img`要素を取得しています。

```javascript
const eventImage = document.querySelector("#event-image");
```

続いて、`src`プロパティに新しいURLを代入しています。

```javascript
eventImage.src = "https://placehold.co/680x280/2563eb/ffffff?text=Student+Exhibition";
```

これにより、ブラウザが新しい画像を読み込み、画面に表示します。

### alt属性も変更する

画像を変更した場合は、`alt`属性も画像の内容に合わせて変更しましょう。

`alt`属性は、画像が表示されない場合や、スクリーンリーダーなどでページを利用する場合に重要な情報となります。

先ほどのコードの下に、次の1行を追加してください。

**script.js（追加部分）**

```javascript
eventImage.alt = "学生作品展示会の案内画像";
```

これで、画像の代替テキストも変更できました。

`script.js`に追加した画像操作のコードは、次のようになります。

```javascript
const eventImage = document.querySelector("#event-image");

eventImage.src = "https://placehold.co/680x280/2563eb/ffffff?text=Student+Exhibition";

eventImage.alt = "学生作品展示会の案内画像";
```

このように、JavaScriptでは画像の`src`属性だけでなく、`alt`属性も変更できます。

なお、今回JavaScriptで変更した内容は、元のHTMLファイルに保存されるわけではありません。

開発者ツールのElementsタブを開き、`img`要素の`src`属性と`alt`属性が変更されていることを確認してみましょう。

## 4-3. リンクのhref属性を変更する

続いて、JavaScriptからリンク先を変更する方法を学習します。

HTMLでリンクを作成する場合は、`a`要素の`href`属性を使用します。

例えば、次のHTMLです。

```html
<a href="https://example.com">Webサイトを見る</a>
```

この場合、リンクをクリックすると、`href`属性に指定されたURLへ移動します。

JavaScriptでは、この`href`属性も変更できます。

### hrefプロパティの基本

リンク先を変更する場合は、次のように記述します。

```javascript
取得したリンク要素.href = "新しいリンク先";
```

`src`属性の変更と同じように、取得した要素のプロパティに新しい値を代入します。

### イベント告知ページのリンクを変更する

今回の`index.html`には、次のリンクが用意されています。

```html
<a id="event-link" href="#">詳細はこちら</a>
```

このリンクの`href`属性には、現在`#`が指定されています。

今回は、リンクをクリックしたときに、同じページ内のイベント説明文へ移動するように変更してみましょう。

HTMLでは、`href`属性に`#`とIDを指定することで、同じページ内の指定した要素へ移動できます。

今回の説明文には、次のIDが設定されています。

```html
<p id="event-description">
    イベントの詳細情報は、後日公開予定です。
</p>
```

そのため、リンク先を`#event-description`に変更すれば、説明文の位置へ移動できます。

`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
const eventLink = document.querySelector("#event-link");

eventLink.href = "#event-description";
```

ブラウザを再読み込みして、リンクをクリックしてみましょう。

今回はリンク先が同じページ内にあるため、別のWebページへ移動するわけではありません。

リンクをクリックすると、URLの末尾に`#event-description`が追加されます。

ページが十分に長い場合は、指定された要素の位置までスクロールします。

このように、`href`属性を変更することで、リンクの移動先をJavaScriptから設定できます。

### リンクの文字列も変更する

第3章で学習した`textContent`を組み合わせることで、リンク先だけでなく、表示する文字列も変更できます。

先ほどのコードの下に、次の1行を追加してください。

**script.js（追加部分）**

```javascript
eventLink.textContent = "展示会の詳細を見る";
```

これで、リンクの表示が「詳細はこちら」から「展示会の詳細を見る」に変更されます。

今回追加したコードを整理すると、次のようになります。

```javascript
const eventLink = document.querySelector("#event-link");

eventLink.href = "#event-description";

eventLink.textContent = "展示会の詳細を見る";
```

今回は、次の2つの操作を行っています。

| コード | 役割 |
| --- | --- |
| `eventLink.href` | リンク先を変更する |
| `eventLink.textContent` | リンクの表示文字列を変更する |

このように、1つのHTML要素に対して、複数のプロパティを変更することもできます。

## 4-4. setAttribute()で属性を変更する

ここまで、`src`や`href`などのプロパティを使って、HTML要素の属性を変更してきました。

JavaScriptには、属性を操作するための専用のメソッドも用意されています。

それが、`setAttribute()`です。

`setAttribute()`は、**HTML要素の属性に値を設定するためのメソッド**です。

指定した属性が存在する場合は値を変更し、存在しない場合は新しく属性を追加します。

### setAttribute()の基本構文

基本的な書き方は次のとおりです。

```javascript
取得した要素.setAttribute("属性名", "属性の値");
```

`setAttribute()`では、2つの引数を指定します。

| 引数 | 役割 |
| --- | --- |
| 1つ目 | 設定したい属性の名前 |
| 2つ目 | 属性に設定する値 |

例えば、次のHTMLがあるとします。

```html
<a id="link" href="#">リンク</a>
```

このリンクの`href`属性を変更する場合は、次のように記述できます。

```javascript
const link = document.querySelector("#link");

link.setAttribute("href", "https://example.com");
```

このコードでは、`href`属性に新しいURLを設定しています。

先ほど学習したプロパティを使う方法でも、同様の変更ができます。

```javascript
link.href = "https://example.com";
```

どちらの方法でも、今回の例ではリンク先を変更できます。

### title属性を追加する

それでは、`setAttribute()`を使って、イベント告知ページのリンクに新しい属性を追加してみましょう。

今回は、`title`属性を設定します。

`title`属性は、HTML要素に補足情報を設定するための属性です。

ブラウザによっては、マウスカーソルを要素の上に置くと、その内容がツールチップとして表示されます。

`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
eventLink.setAttribute("title", "イベントの説明文へ移動します");
```

ブラウザを再読み込みし、「展示会の詳細を見る」というリンクにマウスカーソルを合わせてみましょう。

少しすると、「イベントの説明文へ移動します」という補足情報が表示されます。

※ ツールチップの表示方法はブラウザや利用環境によって異なります。

また、開発者ツールのElementsタブでも属性が追加されていることを確認できます。

変更後のDOMは、次のようになります。

```html
<a id="event-link" href="#event-description" title="イベントの説明文へ移動します">展示会の詳細を見る</a>
```

このように、`setAttribute()`では、HTMLファイルに記述されていなかった属性を追加することもできます。

### getAttribute()で属性の値を取得する

属性を設定する`setAttribute()`に対して、属性の値を取得するためのメソッドも用意されています。

それが、`getAttribute()`です。

基本的な書き方は次のとおりです。

```javascript
取得した要素.getAttribute("属性名");
```

例えば、先ほどのイベントリンクの`href`属性を確認してみましょう。

`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
console.log(eventLink.getAttribute("href"));
```

実行結果：

```
#event-description
```

今回は、`href`属性に設定されている値を取得しています。

また、`title`属性も取得できます。

```javascript
console.log(eventLink.getAttribute("title"));
```

実行結果：

```
イベントの説明文へ移動します
```

このように、`getAttribute()`を使用すると、HTML要素の属性に設定されている値を確認できます。

なお、指定した属性が存在しない場合、`getAttribute()`は`null`を返します。

### 属性を操作する方法の整理

ここまでに学習した属性操作を整理しましょう。

| 書き方 | 役割 |
| --- | --- |
| `element.src = "URL"` | 画像などの読み込み元を変更する |
| `element.href = "URL"` | リンク先を変更する |
| `element.alt = "文字列"` | 画像の代替テキストを変更する |
| `element.setAttribute("属性名", "値")` | 属性の値を設定する |
| `element.getAttribute("属性名")` | 属性の値を取得する |

なお、`href`や`src`などをプロパティから取得すると、ブラウザによって相対URLが絶対URLに変換された値が返されます。

一方、`getAttribute()`は、属性に設定されている文字列を取得します。

そのため、読み取る方法によって結果が異なる場合があります。

まずは、属性を変更したい場合は対応するプロパティを使い、属性名を指定して操作したい場合は`setAttribute()`や`getAttribute()`を使えることを覚えましょう。

### イベント告知ページを完成させる

最後に、第3章までの内容と今回の属性操作を組み合わせて、イベント告知ページを完成させましょう。

`handson`フォルダの`script.js`を、以下のコードに書き換えてください。

**script.js（第4章終了時点）**

```javascript
const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const eventStatus = document.querySelector("#event-status");
const eventImage = document.querySelector("#event-image");
const eventLink = document.querySelector("#event-link");

eventTitle.textContent = "秋の作品展示会";

eventDescription.innerHTML = "学生が制作した<strong>Webサイトやアプリ</strong>を展示します。<br>ぜひご覧ください！";

eventStatus.textContent = "開催決定";

eventImage.src = "https://placehold.co/680x280/2563eb/ffffff?text=Student+Exhibition";

eventImage.alt = "学生作品展示会の案内画像";

eventLink.href = "#event-description";

eventLink.textContent = "展示会の詳細を見る";

eventLink.setAttribute("title", "イベントの説明文へ移動します");
```

ブラウザを再読み込みして、以下の内容を確認してください。

1. イベントのタイトルが「秋の作品展示会」になっている
2. 説明文が変更され、一部が太字になっている
3. 開催状況が「開催決定」になっている
4. 青色のイベント画像が表示されている
5. リンクの文字列が「展示会の詳細を見る」になっている
6. リンク先が`#event-description`になっている
7. リンクに補足情報が設定されている

ここまでで、JavaScriptからWebページの文章や画像、リンク先を変更できるようになりました。

次の第5章では、JavaScriptからCSSを操作し、Webページの見た目を変更する方法を学習します。

## 4-5. 確認問題（practice03）

ここまでに学習したDOM操作を使って、図書室のイベント案内ページを変更してみましょう。

今回は、画像の変更、リンク先の変更、属性の追加を実装します。

### 作業フォルダ

`Lesson08`フォルダの中に`practice03`フォルダを作成してください。

その中に、次の2つのファイルを作成します。

- `index.html`
- `script.js`

フォルダ構成は以下のとおりです。

```
Lesson08/
├── handson/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── practice01/
│   ├── index.html
│   └── script.js
├── practice02/
│   ├── index.html
│   └── script.js
└── practice03/
    ├── index.html
    └── script.js
```

### 使用するHTML

`practice03`フォルダの`index.html`には、以下のコードを記述してください。

**index.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>図書室イベント案内</title>
</head>
<body>
    <h1>図書室イベント案内</h1>

    <main>
        <section>
            <h2 id="event-title">イベント準備中</h2>

            <img
                id="event-image"
                src="https://placehold.co/600x250/e5e7eb/333333?text=Coming+Soon"
                alt="準備中の案内画像"
            >

            <p id="event-message">
                詳細は後日公開します。
            </p>

            <a id="detail-link" href="#">詳細はこちら</a>
        </section>

        <section id="library-info">
            <h2>図書室について</h2>
            <p>開館時間：9:00～18:00</p>
            <p>場所：本館2階</p>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

`script.js`は空の状態から作成してください。

### 問題

上記のHTMLを、JavaScriptからDOM操作して「図書室読書週間」の案内ページに変更してください。

今回は、次の5つの処理を実装します。

**1. イベントタイトルの変更**

- `querySelector()`を使って、IDが`event-title`の要素を取得すること
- 取得した要素を変数`eventTitle`に代入すること
- `textContent`を使って「図書室読書週間」に変更すること

**2. イベント画像の変更**

- `querySelector()`を使って、IDが`event-image`の要素を取得すること
- 取得した要素を変数`eventImage`に代入すること
- `src`プロパティを使って、画像のURLを以下に変更すること

```
https://placehold.co/600x250/0f766e/ffffff?text=Library+Week
```

**3. 画像の代替テキストの変更**

- `alt`プロパティを使って、画像の代替テキストを変更すること
- 代替テキストは「図書室読書週間の案内画像」とすること

**4. イベント説明文の変更**

- `querySelector()`を使って、IDが`event-message`の要素を取得すること
- 取得した要素を変数`eventMessage`に代入すること
- `textContent`を使って、次の文章に変更すること

```
11月は読書週間です。おすすめの本を紹介します！
```

**5. リンクの変更**

- `querySelector()`を使って、IDが`detail-link`の要素を取得すること
- 取得した要素を変数`detailLink`に代入すること
- `href`プロパティを使って、リンク先を`#library-info`に変更すること
- `textContent`を使って、リンクの文字列を「図書室の情報を見る」に変更すること
- `setAttribute()`を使って、`title`属性に「図書室の基本情報へ移動します」を設定すること

### 完成後の表示

Webページには、次の内容が表示されるようにしてください。

```
図書室イベント案内

図書室読書週間

［Library Weekと書かれた緑色の画像］

11月は読書週間です。おすすめの本を紹介します！

図書室の情報を見る

図書室について

開館時間：9:00～18:00
場所：本館2階
```

※ リンクをクリックすると、同じページ内の「図書室について」の位置へ移動するようにしてください。

### 完成条件

- `querySelector()`を使って、指定されたHTML要素を取得できていること
- イベントタイトルと説明文を`textContent`で変更できていること
- `src`プロパティを使って、指定された画像に変更できていること
- `alt`プロパティを使って、画像の代替テキストを変更できていること
- `href`プロパティを使って、リンク先を変更できていること
- リンクの文字列が「図書室の情報を見る」になっていること
- `setAttribute()`を使って、リンクに`title`属性を設定できていること
- HTMLファイルを書き換えず、JavaScriptによって指定された内容を表示できていること

これで、第4章の確認問題は終了です。

ここまでで、JavaScriptからHTML要素の内容だけでなく、画像やリンクなどの属性も変更できるようになりました。

次の第5章では、`style`プロパティや`classList`を使用して、JavaScriptからWebページのデザインを変更していきましょう。

# 5. JavaScriptからCSSを操作する

第4章では、JavaScriptからHTML要素の属性を変更する方法を学習しました。

これまでのDOM操作によって、イベント告知ページの文章や画像、リンク先を変更できるようになりました。

しかし、JavaScriptから変更できるのはHTMLの内容や属性だけではありません。

実は、JavaScriptを使ってWebページの見た目を変更することもできます。

例えば、次のような処理が可能です。

- イベントの開催状況に応じて背景色を変更する
- 重要な見出しの文字色を変更する
- 特定のカードに枠線を追加して目立たせる
- CSSのクラスを追加・削除してデザインを切り替える

このような処理を実現するために、JavaScriptには`style`プロパティや`classList`という機能が用意されています。

この章では、JavaScriptからCSSを操作する方法を学習し、イベント告知ページの見た目を変更していきましょう。

## 5-1. styleプロパティでCSSを変更する

`style`プロパティは、HTML要素に設定するCSSをJavaScriptから操作するためのプロパティです。

CSSでは、例えば次のように文字色を変更できます。

```css
h1 {
    color: blue;
}
```

これと同じような処理を、JavaScriptから実行することもできます。

### styleプロパティの基本構文

JavaScriptからCSSを変更する場合は、次のように記述します。

```javascript
取得した要素.style.CSSプロパティ名 = "値";
```

例えば、次のHTMLがあるとします。

```html
<h1 id="title">お知らせ</h1>
```

この見出しの文字色を赤色に変更したい場合は、次のように記述します。

```javascript
const title = document.querySelector("#title");

title.style.color = "red";
```

このコードを実行すると、見出しの文字色が赤色になります。

今回は、`style`プロパティの中にある`color`プロパティに、`"red"`という文字列を代入しています。

`color`は、CSSでも使用してきた文字色を指定するためのプロパティです。

### イベント告知ページの文字色を変更する

それでは、実際にイベント告知ページの文字色を変更してみましょう。

第4章までに作成した`script.js`には、次のコードがあります。

```javascript
const eventTitle = document.querySelector("#event-title");
```

この変数には、イベントのタイトルを表示する`h2`要素が保存されています。

`handson`フォルダの`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
eventTitle.style.color = "#1d4ed8";
```

ファイルを保存し、ブラウザを再読み込みしてください。

イベントのタイトルが青色に変更されます。

今回のコードでは、`eventTitle`に保存されているHTML要素に対して、CSSの`color`プロパティを設定しています。

このように、JavaScriptからCSSの値を直接変更できます。

### 複数のCSSプロパティを変更する

`style`プロパティでは、複数のCSSプロパティを変更することもできます。

例えば、文字色だけでなく、文字の大きさも変更してみましょう。

先ほどのコードの下に、次の1行を追加してください。

**script.js（追加部分）**

```javascript
eventTitle.style.fontSize = "28px";
```

ブラウザを再読み込みすると、イベントタイトルの文字サイズが28pxになります。

ここで注目してほしいのが、`fontSize`という書き方です。

CSSでは、次のように記述します。

```css
font-size: 28px;
```

しかし、JavaScriptの`style`プロパティでは、次のように記述します。

```javascript
eventTitle.style.fontSize = "28px";
```

CSSの`font-size`が、JavaScriptでは`fontSize`になっています。

これは、JavaScriptのプロパティ名では、ハイフンを含むCSSのプロパティ名を**キャメルケース**にした書き方を使用するためです。

キャメルケースは、これまで変数名や関数名でも使用してきた書き方です。

代表的なCSSプロパティを比較してみましょう。

| CSSでの書き方 | JavaScriptでの書き方 |
| --- | --- |
| `color` | `style.color` |
| `background-color` | `style.backgroundColor` |
| `font-size` | `style.fontSize` |
| `font-weight` | `style.fontWeight` |
| `margin-top` | `style.marginTop` |
| `border-radius` | `style.borderRadius` |

例えば、背景色を変更する場合は、次のようになります。

```javascript
element.style.backgroundColor = "yellow";
```

文字の太さを変更する場合は、次のように記述します。

```javascript
element.style.fontWeight = "bold";
```

また、`fontSize`や`marginTop`などに値を指定するときは、基本的に`"20px"`のように単位を含めた文字列を代入します。

### イベントのリンクを太字にする

続いて、イベント告知ページのリンクを太字にしてみましょう。

第4章では、次のコードでリンクを取得しました。

```javascript
const eventLink = document.querySelector("#event-link");
```

この変数を使って、リンクの文字を太字にします。

`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
eventLink.style.fontWeight = "bold";
```

ブラウザを再読み込みすると、「展示会の詳細を見る」というリンクが太字になります。

ここまでで、次の3つのCSSプロパティを変更しました。

```javascript
eventTitle.style.color = "#1d4ed8";
eventTitle.style.fontSize = "28px";

eventLink.style.fontWeight = "bold";
```

このように、`style`プロパティを使用すると、JavaScriptからHTML要素の見た目を直接変更できます。

### 開発者ツールで確認する

ここで、開発者ツールのElementsタブを確認してみましょう。

`event-title`の要素を確認すると、次のような状態になっています。

```html
<h2 id="event-title" style="color: rgb(29, 78, 216); font-size: 28px;">秋の作品展示会</h2>
```

※ 色の表記や属性の表示形式は、ブラウザによって異なる場合があります。

今回は、JavaScriptによってHTML要素に`style`属性が設定されています。

このように、JavaScriptの`style`プロパティで設定したCSSは、HTML要素のインラインスタイルとして反映されます。

ただし、今回も元のHTMLファイルが書き換えられたわけではありません。

ブラウザ上のDOMに対して変更が行われています。

## 5-2. classListとは

ここまで、`style`プロパティを使用してCSSを変更する方法を学習しました。

しかし、実際のWeb制作では、1つの要素に複数のCSSプロパティを設定することもあります。

例えば、イベントの開催状況を目立たせるために、次のようなデザインを設定したいとします。

```css
.status-active {
    background-color: #dcfce7;
    color: #166534;
    font-weight: bold;
}
```

このCSSでは、次の3つをまとめて設定しています。

- 背景色を薄い緑色にする
- 文字色を濃い緑色にする
- 文字を太字にする

これらをJavaScriptの`style`プロパティで変更する場合、基本的には3つのプロパティをそれぞれ設定する必要があります。

しかし、あらかじめCSSにクラスを用意しておけば、JavaScriptからクラスを追加するだけで、まとめてデザインを変更できます。

このときに使用するのが、`classList`です。

`classList`は、**HTML要素に設定されているCSSのクラスを取得・操作するためのプロパティ**です。

### HTMLのclass属性を復習する

まずは、HTMLの`class`属性を復習しましょう。

例えば、次のHTMLがあります。

```html
<p class="status">準備中</p>
```

このHTMLには、`status`というクラスが設定されています。

CSSで次のように記述すれば、見た目を変更できます。

```css
.status {
    background-color: #e5e7eb;
}
```

また、HTML要素には複数のクラスを設定することもできます。

```html
<p class="status status-active">開催決定</p>
```

このHTMLでは、1つの`p`要素に次の2つのクラスが設定されています。

- `status`
- `status-active`

CSSでは、それぞれのクラスに対してスタイルを設定できます。

JavaScriptでは、`classList`を使って、このクラスの追加や削除を行います。

### classListを確認する

それでは、現在のイベント告知ページに設定されているクラスを確認してみましょう。

`handson`フォルダの`script.js`には、次のコードがあります。

```javascript
const eventStatus = document.querySelector("#event-status");
```

この変数には、開催状況を表示する`p`要素が保存されています。

`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
console.log(eventStatus.classList);
```

ブラウザを再読み込みし、Consoleを確認してください。

実行結果の例：

```
DOMTokenList ['status']
```

※ 表示形式はブラウザによって異なります。

今回は、`status`というクラスが設定されていることを確認できます。

`classList`の値は、**DOMTokenList（DOMトークンリスト）**というオブジェクトで管理されています。

DOMTokenListは、クラス名などの複数の値を扱うためのものです。

通常の配列とは異なりますが、複数の値をまとめて管理していると考えると分かりやすいでしょう。

### classListでできること

`classList`には、クラスを操作するためのメソッドが用意されています。

今回の授業では、次の3つを学習します。

| メソッド | 役割 |
| --- | --- |
| `add()` | クラスを追加する |
| `remove()` | クラスを削除する |
| `toggle()` | クラスの追加と削除を切り替える |

例えば、次のような処理ができます。

```javascript
element.classList.add("active");
```

このコードでは、HTML要素に`active`というクラスを追加します。

一方、次のように記述すると、そのクラスを削除できます。

```javascript
element.classList.remove("active");
```

このように、クラスを操作することで、JavaScriptからWebページのデザインを変更できます。

## 5-3. classList.add()でクラスを追加する

`classList.add()`は、**HTML要素に指定したクラスを追加するためのメソッド**です。

基本的な書き方は次のとおりです。

```javascript
取得した要素.classList.add("クラス名");
```

例えば、次のHTMLがあるとします。

```html
<p id="message" class="notice">お知らせ</p>
```

この要素に`important`というクラスを追加したい場合は、次のように記述します。

```javascript
const message = document.querySelector("#message");

message.classList.add("important");
```

実行後のDOMは、次のようになります。

```html
<p id="message" class="notice important">お知らせ</p>
```

もともと設定されていた`notice`クラスは残ったまま、新しく`important`クラスが追加されています。

このように、`classList.add()`は、既存のクラスを消さずに新しいクラスを追加できます。

### イベントの開催状況を目立たせる

それでは、イベント告知ページの開催状況を変更してみましょう。

現在は「開催決定」と表示されていますが、背景色は灰色のままです。

今回は、JavaScriptからクラスを追加することで、開催状況を緑色に変更します。

まず、`handson`フォルダの`style.css`の最後に、次のコードを追加してください。

**style.css（追加部分）**

```css
.status-active {
    background-color: #dcfce7;
    color: #166534;
    font-weight: bold;
}
```

このCSSでは、`status-active`クラスが設定された要素に対して、緑色のデザインを適用しています。

ただし、この時点ではHTMLのどの要素にも`status-active`クラスが設定されていません。

そのため、CSSを追加しただけでは画面の見た目は変わりません。

続いて、`script.js`の最後に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
eventStatus.classList.add("status-active");
```

ブラウザを再読み込みしてください。

「開催決定」と表示されている部分の背景色が、薄い緑色に変更されます。

今回のコードを確認しましょう。

```javascript
eventStatus.classList.add("status-active");
```

このコードでは、`eventStatus`に保存されている`p`要素に、`status-active`というクラスを追加しています。

その結果、追加したCSSが適用され、背景色や文字色が変更されます。

### 元のクラスは残っている

開発者ツールのElementsタブで、開催状況の`p`要素を確認してください。

変更後のDOMは、次のようになっています。

```html
<p id="event-status" class="status status-active">開催決定</p>
```

もともとの`status`クラスに加えて、`status-active`クラスが追加されています。

それぞれのクラスには、次の役割があります。

| クラス | 役割 |
| --- | --- |
| `status` | 余白や角丸など、基本的なデザイン |
| `status-active` | 開催決定時の背景色や文字色 |

このように、基本的なデザインと、状況に応じたデザインを別々のクラスで管理できます。

### イベントカードに枠線を追加する

続いて、イベントカード全体を目立たせてみましょう。

今回は、イベントカードに青色の枠線を追加します。

まず、`style.css`の最後に、次のコードを追加してください。

**style.css（追加部分）**

```css
.event-featured {
    outline: 3px solid #2563eb;
    outline-offset: 4px;
}
```

このCSSでは、`event-featured`クラスが設定された要素に青色の輪郭線を表示します。

続いて、`script.js`の最後に次のコードを追加してください。

**script.js（追加部分）**

```javascript
const eventCard = document.querySelector(".event-card");

eventCard.classList.add("event-featured");
```

ブラウザを再読み込みしてください。

イベントカードの周囲に青色の線が表示されます。

今回は、次の処理を行っています。

1. `querySelector()`でイベントカードを取得する
2. `classList.add()`で`event-featured`クラスを追加する
3. CSSの`.event-featured`が適用される
4. イベントカードの周囲に青色の線が表示される

このように、JavaScriptからクラスを追加するだけで、複数のCSSプロパティをまとめて適用できます。

## 5-4. classList.remove()でクラスを削除する

`classList.remove()`は、**HTML要素から指定したクラスを削除するためのメソッド**です。

基本的な書き方は次のとおりです。

```javascript
取得した要素.classList.remove("クラス名");
```

例えば、次のHTMLがあるとします。

```html
<p class="notice important">重要なお知らせ</p>
```

この要素から`important`クラスを削除したい場合は、次のように記述します。

```javascript
message.classList.remove("important");
```

実行後のDOMは、次のようになります。

```html
<p class="notice">重要なお知らせ</p>
```

`important`クラスだけが削除され、`notice`クラスは残っています。

このように、`classList.remove()`を使うと、指定したクラスだけを削除できます。

### イベントカードの枠線を削除する

それでは、先ほど追加したイベントカードの枠線を削除してみましょう。

現在、`script.js`には次のコードがあります。

```javascript
const eventCard = document.querySelector(".event-card");

eventCard.classList.add("event-featured");
```

このコードによって、イベントカードには`event-featured`クラスが追加されています。

その下に、次のコードを追加してください。

**script.js（追加部分）**

```javascript
eventCard.classList.remove("event-featured");
```

ブラウザを再読み込みしてください。

先ほど表示されていた青色の枠線が消えます。

今回の処理は、次の順番で実行されています。

1. `classList.add()`で`event-featured`クラスを追加する
2. `classList.remove()`で`event-featured`クラスを削除する
3. 最終的に、青色の枠線が表示されなくなる

つまり、CSSのコード自体は残っていますが、HTML要素にそのクラスが設定されていないため、枠線が適用されなくなっています。

### クラスを削除してもCSSは消えない

ここで重要なのは、**クラスを削除しても、CSSファイルに記述されたスタイルは削除されない**ということです。

例えば、`style.css`には引き続き次のコードが存在しています。

```css
.event-featured {
    outline: 3px solid #2563eb;
    outline-offset: 4px;
}
```

しかし、`event-featured`クラスが設定されている要素がなければ、このCSSは適用されません。

もう一度クラスを追加すれば、再び青色の枠線を表示できます。

```javascript
eventCard.classList.add("event-featured");
```

このように、クラスの追加と削除によって、CSSの適用状態を切り替えられます。

確認できたら、先ほど追加した次の1行は削除して、青色の枠線が表示される状態に戻してください。

```javascript
eventCard.classList.remove("event-featured");
```

## 5-5. classList.toggle()でクラスを切り替える

ここまで、`classList.add()`でクラスを追加し、`classList.remove()`でクラスを削除する方法を学習しました。

では、クラスが存在する場合は削除し、存在しない場合は追加するという処理を行いたい場合はどうすればよいでしょうか。

このような処理に便利なのが、`classList.toggle()`です。

`classList.toggle()`は、**指定したクラスが存在する場合は削除し、存在しない場合は追加するメソッド**です。

基本的な書き方は次のとおりです。

```javascript
取得した要素.classList.toggle("クラス名");
```

### toggle()の動作

例えば、次のHTMLがあるとします。

```html
<div class="card">カード</div>
```

この要素に対して、次のコードを実行します。

```javascript
card.classList.toggle("active");
```

最初は`active`クラスが存在しないため、クラスが追加されます。

```html
<div class="card active">カード</div>
```

同じコードをもう一度実行すると、今度は`active`クラスが削除されます。

```html
<div class="card">カード</div>
```

つまり、実行するたびにクラスの有無が切り替わります。

| 実行前の状態 | toggle()実行後 |
| --- | --- |
| クラスがない | クラスが追加される |
| クラスがある | クラスが削除される |

このような動作を、トグル（Toggle）と呼びます。

### イベントカードでtoggle()を試す

それでは、今回のイベントカードで試してみましょう。

現在の`script.js`には、次のコードがあります。

```javascript
const eventCard = document.querySelector(".event-card");

eventCard.classList.add("event-featured");
```

ここで、`classList.add()`の行を、次のように書き換えてください。

**script.js（変更部分）**

```javascript
const eventCard = document.querySelector(".event-card");

eventCard.classList.toggle("event-featured");
```

ブラウザを再読み込みしてください。

今回は、最初から`event-featured`クラスが設定されていないため、`toggle()`によってクラスが追加されます。

その結果、イベントカードに青色の枠線が表示されます。

### toggle()を2回実行する

続いて、`toggle()`を2回実行してみましょう。

先ほどのコードを次のように変更してください。

**script.js（変更部分）**

```javascript
const eventCard = document.querySelector(".event-card");

eventCard.classList.toggle("event-featured");

eventCard.classList.toggle("event-featured");
```

ブラウザを再読み込みしてください。

今度は、青色の枠線が表示されません。

なぜでしょうか。

これは、次の順番で処理が行われているためです。

1. 1回目の`toggle()`でクラスが追加される
2. 2回目の`toggle()`でクラスが削除される
3. 最終的にクラスが存在しない状態になる

このように、`toggle()`は、クラスの現在の状態に応じて動作します。

なお、ページを再読み込みするたびに、HTMLが読み込まれてJavaScriptが最初から実行されます。

そのため、今回のようにクラスが存在しない状態から始まる場合、再読み込みするだけでクラスの有無が交互に切り替わるわけではありません。

**同じページ上で`toggle()`が実行されるたびに、クラスの状態が切り替わる**という点が重要です。

### toggle()はどんなときに使う？

`toggle()`は、Webページの状態を切り替える処理でよく使用されます。

例えば、次のような機能です。

- ボタンを押すたびにメニューを開閉する
- カードをクリックすると選択状態になる
- お気に入りボタンの色を切り替える
- ダークモードとライトモードを切り替える

これらの機能では、利用者の操作によって、クラスの追加と削除を切り替えます。

ただし、今回の授業では、利用者の操作をきっかけにJavaScriptを実行する方法はまだ扱っていません。

そのため、現時点ではJavaScriptのコードに`toggle()`を記述して、クラスが切り替わる仕組みを確認しています。

次回学習するイベント処理と組み合わせることで、実際にボタンを押してデザインを切り替える機能を作成できるようになります。

## 5-6. styleとclassListの使い分け

ここまで、JavaScriptからCSSを変更する2つの方法を学習しました。

- `style`プロパティ：CSSプロパティを直接変更する
- `classList`：HTML要素のクラスを操作する

どちらもWebページの見た目を変更できますが、使い方には違いがあります。

### styleプロパティを使用する場合

例えば、JavaScriptから文字色を変更したい場合は、次のように記述できます。

```javascript
eventTitle.style.color = "red";
```

この方法では、CSSファイルに新しいクラスを用意しなくても、直接文字色を変更できます。

そのため、特定のCSSプロパティだけを変更したい場合に便利です。

ただし、変更したいプロパティが増えると、次のようにコードも長くなります。

```javascript
eventTitle.style.color = "red";
eventTitle.style.fontSize = "30px";
eventTitle.style.fontWeight = "bold";
eventTitle.style.backgroundColor = "yellow";
```

### classListを使用する場合

同じデザインを、CSSのクラスとして用意する方法もあります。

例えば、次のCSSを考えてみましょう。

```css
.highlight {
    color: red;
    font-size: 30px;
    font-weight: bold;
    background-color: yellow;
}
```

このクラスを使用すれば、JavaScriptでは次の1行でデザインを適用できます。

```javascript
eventTitle.classList.add("highlight");
```

クラスを削除すれば、追加したデザインを解除することもできます。

```javascript
eventTitle.classList.remove("highlight");
```

このように、`classList`を使用すると、複数のCSSプロパティをまとめて管理しやすくなります。

### styleとclassListを比較する

| 比較項目 | style | classList |
| --- | --- | --- |
| 操作するもの | CSSプロパティ | HTML要素のクラス |
| CSSファイルへの事前定義 | 必須ではない | 基本的に必要 |
| 複数のスタイル変更 | 個別に指定する | クラスでまとめて変更できる |
| 状態の切り替え | 値を変更する | クラスを追加・削除する |
| 主な用途 | 個別のスタイル変更 | デザインや状態の切り替え |

例えば、JavaScriptで計算した数値に応じて要素の幅を変更したい場合は、`style`プロパティが便利です。

一方、「通常」「選択中」「エラー」など、あらかじめ決められたデザインを切り替えたい場合は、`classList`が適しています。

なお、`style`で設定したインラインスタイルは、通常のCSSクラスで設定したスタイルより優先される場合があります。

例えば、JavaScriptから`style.backgroundColor`を設定していると、クラスを追加しても背景色が変わらないことがあります。

そのため、同じCSSプロパティを`style`と`classList`の両方で変更する場合は注意しましょう。

### イベント告知ページの完成

最後に、ここまでに学習した内容を組み合わせて、イベント告知ページを完成させましょう。

`handson`フォルダの`script.js`を以下のように書き換えてください。

**script.js（第5章終了時点）**

```javascript
const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const eventStatus = document.querySelector("#event-status");
const eventImage = document.querySelector("#event-image");
const eventLink = document.querySelector("#event-link");
const eventCard = document.querySelector(".event-card");

eventTitle.textContent = "秋の作品展示会";

eventDescription.innerHTML = "学生が制作した<strong>Webサイトやアプリ</strong>を展示します。<br>ぜひご覧ください！";

eventStatus.textContent = "開催決定";

eventImage.src = "https://placehold.co/680x280/2563eb/ffffff?text=Student+Exhibition";
eventImage.alt = "学生作品展示会の案内画像";

eventLink.href = "#event-description";
eventLink.textContent = "展示会の詳細を見る";
eventLink.setAttribute("title", "イベントの説明文へ移動します");

eventTitle.style.color = "#1d4ed8";
eventTitle.style.fontSize = "28px";

eventLink.style.fontWeight = "bold";

eventStatus.classList.add("status-active");
eventCard.classList.add("event-featured");
```

また、`style.css`には、第5章で追加した以下のCSSが記述されていることを確認してください。

**style.css（追加した部分）**

```css
.status-active {
    background-color: #dcfce7;
    color: #166534;
    font-weight: bold;
}

.event-featured {
    outline: 3px solid #2563eb;
    outline-offset: 4px;
}
```

ブラウザを再読み込みして、次の内容を確認してください。

1. イベントタイトルが「秋の作品展示会」になっている
2. タイトルの文字色が青色になっている
3. タイトルの文字サイズが28pxになっている
4. イベントの説明文に太字と改行が適用されている
5. 開催状況が「開催決定」と表示され、背景色が緑色になっている
6. 青色のイベント画像が表示されている
7. リンクの文字が太字になっている
8. イベントカードの周囲に青色の枠線が表示されている

これで、今回のイベント告知ページが完成しました。

第2章から第5章までに学習したDOM操作を組み合わせることで、HTMLファイルを直接変更せずに、Webページの内容や見た目をJavaScriptから変更できるようになりました。

## 5-7. 確認問題（practice04）

ここまでに学習した`style`プロパティと`classList`を使って、講座案内ページのデザインを変更してみましょう。

今回は、HTMLとCSSが用意された状態から、JavaScriptを使って講座の募集状況やカードの見た目を変更します。

### 作業フォルダ

`Lesson08`フォルダの中に`practice04`フォルダを作成してください。

その中に、以下の3つのファイルを作成します。

- `index.html`
- `style.css`
- `script.js`

フォルダ構成は以下のとおりです。

```
Lesson08/
├── handson/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── practice01/
│   ├── index.html
│   └── script.js
├── practice02/
│   ├── index.html
│   └── script.js
├── practice03/
│   ├── index.html
│   └── script.js
└── practice04/
    ├── index.html
    ├── style.css
    └── script.js
```

### 使用するHTML

`practice04`フォルダの`index.html`に、以下のコードを記述してください。

**index.html**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>プログラミング講座案内</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>プログラミング講座案内</h1>

        <section id="course-card" class="course-card is-muted">
            <p id="course-status" class="status">準備中</p>

            <h2 id="course-title">JavaScript体験講座</h2>

            <p id="course-description">
                講座の詳細情報を準備しています。
            </p>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

### 使用するCSS

続いて、`style.css`に以下のコードを記述してください。

**style.css**

```css
body {
    margin: 0;
    padding: 40px 20px;
    background-color: #f3f4f6;
    font-family: sans-serif;
    color: #333;
}

.container {
    max-width: 700px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

.course-card {
    background-color: white;
    padding: 30px;
    border-radius: 12px;
}

.status {
    display: inline-block;
    padding: 6px 12px;
    background-color: #e5e7eb;
    border-radius: 20px;
    font-size: 14px;
}

.is-muted {
    opacity: 0.5;
}

.is-open {
    background-color: #dcfce7;
    color: #166534;
    font-weight: bold;
}

.is-featured {
    outline: 3px solid #f59e0b;
    outline-offset: 4px;
}
```

`script.js`は空の状態から作成してください。

### 問題

上記のHTMLとCSSを使って、講座の募集が開始された状態をJavaScriptから表現してください。

最初の状態では、講座の募集状況は「準備中」となっており、カード全体が薄く表示されています。

今回は、JavaScriptを使用して、次の状態に変更します。

- 募集状況を「受付中」に変更する
- 募集状況の背景色を緑色にする
- 講座タイトルの文字色を青色にする
- カード全体の薄い表示を解除する
- カードの周囲にオレンジ色の枠線を追加する

次の要件を満たすように、`script.js`を作成してください。

**1. 募集状況の変更**

- `querySelector()`を使用して、IDが`course-status`の要素を取得すること
- 取得した要素を変数`courseStatus`に代入すること
- `textContent`を使用して「受付中」に変更すること
- `classList.add()`を使用して、`is-open`クラスを追加すること

**2. 講座タイトルの変更**

- `querySelector()`を使用して、IDが`course-title`の要素を取得すること
- 取得した要素を変数`courseTitle`に代入すること
- `style`プロパティを使用して、文字色を`#1d4ed8`に変更すること
- `style`プロパティを使用して、文字サイズを`28px`に変更すること

**3. 講座カードの表示変更**

- `querySelector()`を使用して、IDが`course-card`の要素を取得すること
- 取得した要素を変数`courseCard`に代入すること
- `classList.remove()`を使用して、`is-muted`クラスを削除すること
- `classList.toggle()`を使用して、`is-featured`クラスを追加すること
- `is-featured`クラスは、`toggle()`で1回だけ切り替えること

**4. 講座の説明文の変更**

- `querySelector()`を使用して、IDが`course-description`の要素を取得すること
- 取得した要素を変数`courseDescription`に代入すること
- `textContent`を使用して、次の文章に変更すること

```
JavaScriptを使って、Webページに動きを付ける方法を学びます。
```

### 完成後の表示

Webページには、次の内容が表示されるようにしてください。

```
プログラミング講座案内

受付中

JavaScript体験講座

JavaScriptを使って、Webページに動きを付ける方法を学びます。
```

また、デザインは次の状態になっている必要があります。

- 「受付中」の背景色が緑色になっている
- 講座タイトルが青色で、文字サイズが28pxになっている
- カード全体が薄く表示されなくなっている
- カードの周囲にオレンジ色の枠線が表示されている

### 完成条件

- `querySelector()`を使って、指定されたHTML要素を取得できていること
- `textContent`で募集状況と講座の説明文を変更できていること
- `style`プロパティを使って、タイトルの文字色とサイズを変更できていること
- `classList.add()`で`is-open`クラスを追加できていること
- `classList.remove()`で`is-muted`クラスを削除できていること
- `classList.toggle()`で`is-featured`クラスを追加できていること
- 指定されたデザインが正しく表示されていること
- HTML・CSSファイルを書き換えず、JavaScriptだけで指定された変更を実装できていること

これで、第5章の確認問題は終了です。

ここまでで、JavaScriptからHTML要素を取得し、文章・属性・CSSを変更する方法を学習しました。

次の第6章では、これまでに学習したDOM操作を組み合わせて、複数のWebページを完成させる演習に取り組みましょう。

# 7. まとめ

今回の授業では、DOM（Document Object Model）の基本的な仕組みを学習し、JavaScriptからHTML要素を操作する方法を学びました。

これまでは、主に`console.log()`を使ってプログラムの実行結果を確認していました。

しかし、DOM操作を使うことで、JavaScriptの処理結果をWebページの文章や画像、デザインなどに反映できるようになりました。

最後に、今回学習した内容を整理しましょう。

## 7-1. 今回学習した内容

今回の授業では、主に次の機能を学習しました。

### HTML要素の取得

| メソッド | 役割 |
| --- | --- |
| `querySelector()` | 条件に一致する最初のHTML要素を取得する |
| `querySelectorAll()` | 条件に一致するすべてのHTML要素を取得する |

例えば、次のコードでは、IDが`event-title`のHTML要素を取得しています。

```javascript
const eventTitle = document.querySelector("#event-title");
```

また、次のコードでは、クラスが`product-card`のHTML要素をすべて取得しています。

```javascript
const productCards = document.querySelectorAll(".product-card");
```

`querySelectorAll()`で取得したNodeListは、`forEach()`を使って順番に処理することもできます。

### HTML要素の内容の変更

| プロパティ | 役割 |
| --- | --- |
| `textContent` | HTML要素のテキストを取得・変更する |
| `innerHTML` | HTML要素の内側にあるHTMLを取得・変更する |

例えば、次のコードでは、見出しの文字列を変更しています。

```javascript
eventTitle.textContent = "秋の作品展示会";
```

一方、HTML要素を含む内容を設定したい場合は、`innerHTML`を使用できます。

```javascript
eventDescription.innerHTML = "学生の<strong>優秀作品</strong>を展示します。";
```

ただし、`innerHTML`には、利用者が入力した文字列などをそのまま代入しないように注意しましょう。

通常の文章を表示する場合は、`textContent`を優先します。

### HTML要素の属性の変更

| プロパティ・メソッド | 役割 |
| --- | --- |
| `src` | 画像などの読み込み元を変更する |
| `alt` | 画像の代替テキストを変更する |
| `href` | リンク先を変更する |
| `setAttribute()` | 属性の値を設定する |
| `getAttribute()` | 属性の値を取得する |

例えば、次のコードでは、画像の読み込み元と代替テキストを変更しています。

```javascript
eventImage.src = "images/event.jpg";
eventImage.alt = "イベントの案内画像";
```

また、`setAttribute()`を使って属性を設定することもできます。

```javascript
eventLink.setAttribute("title", "イベントの詳細を確認します");
```

### CSSの操作

JavaScriptからCSSを操作する方法として、`style`プロパティと`classList`を学習しました。

| プロパティ・メソッド | 役割 |
| --- | --- |
| `style` | CSSプロパティを直接変更する |
| `classList.add()` | クラスを追加する |
| `classList.remove()` | クラスを削除する |
| `classList.toggle()` | クラスの追加と削除を切り替える |

例えば、次のコードでは、文字色を青色に変更しています。

```javascript
eventTitle.style.color = "blue";
```

一方、次のコードでは、CSSのクラスを追加しています。

```javascript
eventStatus.classList.add("status-active");
```

`style`は個別のCSSプロパティを変更する場合に便利です。

`classList`は、あらかじめCSSで定義したデザインをまとめて適用したり、解除したりする場合に便利です。

## 7-2. DOM操作の基本的な流れ

今回学習したDOM操作には、基本的な処理の流れがあります。

それは、次の3つです。

1. 操作したいHTML要素を取得する
2. 取得したHTML要素の内容や属性などを変更する
3. ブラウザの表示に変更が反映される

例えば、次のHTMLを考えてみましょう。

```html
<h2 id="event-title">イベント準備中</h2>
```

この要素に対して、次のJavaScriptを実行します。

```javascript
const eventTitle = document.querySelector("#event-title");

eventTitle.textContent = "イベント開催決定";

eventTitle.style.color = "red";
```

このコードでは、次の順番で処理が行われています。

**① HTML要素を取得する**

```javascript
const eventTitle = document.querySelector("#event-title");
```

`querySelector()`を使って、IDが`event-title`のHTML要素を取得します。

**② HTML要素を変更する**

```javascript
eventTitle.textContent = "イベント開催決定";

eventTitle.style.color = "red";
```

取得した要素のテキストと文字色を変更します。

**③ ブラウザに変更が反映される**

その結果、Webページの見出しが「イベント開催決定」に変更され、文字色が赤色になります。

このように、DOM操作では、最初に目的のHTML要素を取得し、その要素に対して必要な操作を行います。

### DOM操作でよくある間違い

最後に、DOM操作でよくある間違いを確認しておきましょう。

**1. IDやclassを指定するときの記号を間違える**

```javascript
document.querySelector("event-title");
```

このコードでは、`event-title`という名前のHTML要素を探してしまいます。

IDを指定する場合は、`#`が必要です。

```javascript
document.querySelector("#event-title");
```

**2. 存在しないHTML要素を操作する**

```javascript
const message = document.querySelector("#unknown");

message.textContent = "こんにちは";
```

対象の要素が存在しない場合、`querySelector()`は`null`を返します。

そのため、`null`に対して`textContent`を使用するとエラーになります。

まずは、セレクタやHTMLの記述を確認しましょう。

**3. CSSプロパティの書き方を間違える**

CSSでは次のように記述します。

```css
font-size: 24px;
```

しかし、JavaScriptの`style`プロパティでは、次のように記述します。

```javascript
eventTitle.style.fontSize = "24px";
```

JavaScriptでは、`fontSize`のようなキャメルケースを使用することを覚えておきましょう。

**4. classListでクラス名に記号を付けてしまう**

```javascript
eventStatus.classList.add(".status-active");
```

`classList.add()`では、クラス名の前に`.`を付けません。

正しくは、次のように記述します。

```javascript
eventStatus.classList.add("status-active");
```

CSSセレクタと`classList`では、クラス名の指定方法が異なるため注意しましょう。

## 7-3. JavaScriptからHTMLを操作するメリット

DOM操作を学習したことで、JavaScriptを使ってWebページの内容や見た目を変更できるようになりました。

しかし、ここで1つ疑問があるかもしれません。

「HTMLやCSSを直接書き換えれば、同じことができるのではないか？」

確かに、単に文章を変更したり、背景色を変更したりするだけであれば、HTMLやCSSを直接編集することでも実現できます。

それでは、なぜJavaScriptからDOMを操作するのでしょうか。

その理由は、**プログラムの処理結果に応じて、Webページの表示を変更できるようになるから**です。

例えば、第6章の演習では、イベントの残り座席数に応じて、表示する文章やCSSのクラスを変更しました。

```javascript
const remainingSeats = 3;

const seatStatus = document.querySelector("#seat-status");

if (remainingSeats >= 10) {
    seatStatus.textContent = "空席あり";
} else if (remainingSeats >= 1) {
    seatStatus.textContent = "残りわずか";
} else {
    seatStatus.textContent = "満席";
}
```

このプログラムでは、変数`remainingSeats`の値に応じて、Webページの表示を変更しています。

つまり、HTMLファイルを編集しなくても、JavaScriptの条件分岐によって表示を切り替えられます。

さらに、DOM操作は、これまで学習した次のような技術とも組み合わせることができます。

- 変数：表示するデータを管理する
- 条件分岐：条件に応じて表示内容を変更する
- 配列：複数のデータをまとめて管理する
- 繰り返し処理：複数のHTML要素をまとめて操作する
- 関数：DOM操作の処理をまとめて再利用する

このように、これまで学習したJavaScriptの基本文法が、実際のWebページ制作でも役立つようになります。