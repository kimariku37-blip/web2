# JavaScript 中間テスト対策まとめ

## 試験概要

- 実施日：2026年11月2日（月）
- 試験時間：40分
- 問題数：3問
- 満点：20点
- 範囲：第1回～第6回
- HTMLファイルとJavaScriptファイルを自分で作成
- CSS不要
- 実行結果は主に `console.log()` を使用
- 生成AI利用可（ただし説明できることが前提）

---

# まず覚えるべきHTMLテンプレート

## index.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Test</title>
</head>
<body>

    <script src="script.js"></script>

</body>
</html>
```

---

# 第1回 JavaScript基礎

## コンソール出力

```javascript
console.log("こんにちは");
```

## アラート

```javascript
alert("警告です");
```

## 確認ダイアログ

```javascript
confirm("実行しますか？");
```

## document.write

```javascript
document.write("Hello");
```

---

# 第2回 変数・データ型

## 変数

```javascript
let name = "陸斗";
```

## 定数

```javascript
const TAX = 0.1;
```

## データ型

```javascript
let str = "文字列";
let num = 100;
let flag = true;
```

---

## 型変換

```javascript
let score = Number("80");
```

---

## テンプレートリテラル

```javascript
let name = "田中";

console.log(`名前は${name}です`);
```

---

## 算術演算子

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

---

# 第3回 条件分岐

## if文

```javascript
let score = 80;

if (score >= 60) {
    console.log("合格");
}
```

---

## if ～ else

```javascript
if (score >= 60) {
    console.log("合格");
} else {
    console.log("不合格");
}
```

---

## if ～ else if ～ else

```javascript
if (score >= 80) {
    console.log("A");
} else if (score >= 60) {
    console.log("B");
} else {
    console.log("C");
}
```

---

## 比較演算子

```javascript
==
===
!=
!==
>
<
>=
<=
```

---

## 論理演算子

### AND

```javascript
if (age >= 18 && age <= 65)
```

### OR

```javascript
if (day === "土" || day === "日")
```

### NOT

```javascript
if (!isLogin)
```

---

## switch文

```javascript
let day = 1;

switch(day) {
    case 1:
        console.log("月曜日");
        break;

    case 2:
        console.log("火曜日");
        break;

    default:
        console.log("その他");
}
```

---

# 第4回 繰り返し処理

## for文

```javascript
for(let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

## while文

```javascript
let i = 0;

while(i < 5) {
    console.log(i);
    i++;
}
```

---

## break

```javascript
for(let i = 0; i < 10; i++) {

    if(i === 5) {
        break;
    }

    console.log(i);
}
```

---

## continue

```javascript
for(let i = 0; i < 10; i++) {

    if(i === 5) {
        continue;
    }

    console.log(i);
}
```

---

## よく出る処理

### 1～10を表示

```javascript
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### 合計を求める

```javascript
let total = 0;

for(let i = 1; i <= 10; i++) {
    total += i;
}

console.log(total);
```

---

# 第5回 配列・オブジェクト

## 配列

```javascript
const fruits = ["りんご", "みかん", "ぶどう"];
```

---

## 要素取得

```javascript
console.log(fruits[0]);
```

---

## length

```javascript
console.log(fruits.length);
```

---

## push

```javascript
fruits.push("バナナ");
```

---

## pop

```javascript
fruits.pop();
```

---

## includes

```javascript
console.log(fruits.includes("りんご"));
```

---

## join

```javascript
console.log(fruits.join(","));
```

---

## 配列のループ

```javascript
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

---

## オブジェクト

```javascript
const student = {
    name: "田中",
    score: 80
};
```

---

## プロパティ取得

```javascript
console.log(student.name);
console.log(student["score"]);
```

---

## オブジェクト配列

```javascript
const students = [
    {name:"田中", score:80},
    {name:"佐藤", score:90}
];
```

---

# 第6回 関数

## 関数定義

```javascript
function hello() {
    console.log("こんにちは");
}
```

---

## 呼び出し

```javascript
hello();
```

---

## 引数

```javascript
function greet(name) {
    console.log(name);
}

greet("田中");
```

---

## 戻り値

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(3, 5));
```

---

## 関数式

```javascript
const add = function(a, b) {
    return a + b;
};
```

---

## アロー関数

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

## forEach

```javascript
const fruits = ["りんご", "みかん", "ぶどう"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

---

## map

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);
```

---

# 試験直前チェックリスト

以下を見ずに書ければかなり安心。

## □ HTMLとJavaScriptを連携できる

```html
<script src="script.js"></script>
```

---

## □ if文が書ける

```javascript
if (条件) {

}
```

---

## □ for文が書ける

```javascript
for(let i = 0; i < 10; i++) {

}
```

---

## □ 配列をループできる

```javascript
for(let i = 0; i < array.length; i++) {

}
```

---

## □ オブジェクトの値を取得できる

```javascript
object.name
```

---

## □ 関数を作れる

```javascript
function add(a, b) {
    return a + b;
}
```

---

# 出題予想

## 問題1

変数 + 条件分岐

例

- 点数による合否判定
- 年齢による判定

---

## 問題2

繰り返し + 配列

例

- 配列を表示
- 合計値計算
- 最大値検索

---

## 問題3

関数 + オブジェクト

例

- 学生データ管理
- 商品データ管理
- 合否判定関数

---

# 口頭試問対策

説明できるようにしておく

## i は何？

→ カウンタ変数

## i++ は何？

→ 1増やす

## score >= 60 は何？

→ 条件式

## return は何？

→ 呼び出し元へ値を返す

## 引数とは？

→ 関数に渡す値

## 配列とは？

→ 複数の値をまとめて管理する仕組み

## オブジェクトとは？

→ 関連するデータをキーと値で管理する仕組み

---

# 最終目標

次の5つを見ずに書ける状態にする。

1. 1～100まで表示
2. 1～100の合計を求める
3. 配列を全部表示
4. 点数の合否判定
5. 引数と戻り値のある関数