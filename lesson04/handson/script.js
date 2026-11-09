//for文:for (初期化; 条件式; 更新式) {
//    繰り返し実行する処理
//}
//console.log("===============")
//
//for (let i = 1; i <= 5; i++) {   //繰り返しの回数を管理する変数をカウンタ変数と呼びます
//    console.log("こんにちは");
//    console.log("===============")     //`++`は、変数の値を`1`増やす演算子です。この演算子を**インクリメント演算子**と呼びます
//}                                      //i = i + 1;と意味は同じ
//
////0から始めることもできる
//for (let i = 0; i < 5; i++) {
//    console.log(i);
//}
//
////2ずつ増やすこともできる
//for (let i = 0; i <= 10; i += 2) {   //i += 2は、iの値に2を加えて、その結果をiに代入する処理です。
//    console.log(i);
//}
//
////1つずつ減らす
//for (let i = 5; i >= 1; i--) {   //`--`は、変数の値を`1`減らす演算子です。この演算子を**デクリメント演算子**と呼びます。
//    console.log(i);
//}
//
// for文の中でif文を使う

// for (初期化; 条件式; 更新式) {
//     if (条件式) {
//         条件を満たした場合の処理
//    }
// }
//
//1から10までの数値のうち、6以上の数値だけを表示してみましょう。
//for (let i = 1; i <= 10; i++) {
//    if (i >= 6) {
//        console.log(i);
//    }
//}
//
//for (let i = 1; i <= 20; i++) {   //i % 2 === 0 <- iを2で割った余りが0であるという意味になる
//    if (i % 2 === 0) {            //if (i % 3 === 0) { <- この条件に変えると1から20までの数値のうち、3の倍数だけが表示される
//        console.log(i);
//    }
//}
//
////条件を満たした回数を数える
//let count = 0;
//
//for (let i = 1; i <= 20; i++) {    //これをif文の中で使用すれば、条件を満たした場合だけカウントを増やせます。
//    if (i % 2 === 0) {
//        console.log(i);
//        count++;
//    }
//}
//
//console.log(`偶数の個数：${count}個`);
//
////変数のスコープ
////変数には、使用できる範囲が決まっています。この範囲を**スコープ（Scope）**と呼びます。
//for (let i = 1; i <= 3; i++) {
//    // このブロック内ではmessageを使用できる
//    let message = "こんにちは";
//    console.log(message);
//}                               //最後の`console.log(message)`ではエラーが発生します。
//                                //これは、変数`message`が`for`文の内側で宣言されているためです。 
//// この位置ではmessageを使用できない
//console.log(message);
//
//
//スコープを意識した変数の宣言
//繰り返し処理の結果を、for文の外側でも使用したい場合はどうすればよいのか？
let count = 0;
                                    //その場合は、変数をfor文の外側で宣言します。
for (let i = 1; i <= 5; i++) {
    count++;
}

console.log(count);

//while文
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
//処理の流れ
//1. `let i = 1`で変数`i`を初期化する
//2. `i <= 5`を判定する
//3. 条件式が`true`なら、`console.log(i)`を実行する
//4. `i++`で変数`i`の値を1増やす
//5. 再び`i <= 5`を判定する
//6. 条件式が`false`になるまで、3～5を繰り返す

//条件に応じて繰り返しを終了する
let number = Number(prompt("数値を入力してください（0で終了）"));     //while文を使って「0が入力されていない間は繰り返す」という処理を実装します。

while (number !== 0) {  //!==は、左右の値またはデータ型が異なる場合にtrueとなる比較演算子
    console.log(`入力された数値：${number}`);

    number = Number(prompt("数値を入力してください（0で終了）"));
}

console.log("入力を終了しました");

//繰り返し処理の途中で終了するbreak

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}

console.log("繰り返し終了");

//while文でbreakを使う
while (true) {
    const message = prompt("文字を入力してください（終了で終わる）");

    if (message === "終了" || message === null) {
        break;
    }

    console.log(message);
}

console.log("入力を終了しました");

//現在の繰り返しをスキップするcontinue
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}

//特定の条件を満たす数値をスキップする
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}

//多重ループ
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 4; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}
//わかりやすくしたもの
for (let i = 1; i <= 3; i++) {
    console.log(`外側のループ：${i}回目`);

    for (let j = 1; j <= 4; j++) {
        console.log(`  内側のループ：${j}回目`);
    }
}

//多重ループを使って座席番号を表示する
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 4; col++) {
        console.log(`${row}行${col}列`);
    }
}
//実行結果
//1行1列
//1行2列
//1行3列
//1行4列
//2行1列
//2行2列
//2行3列
//2行4列
//3行1列
//3行2列
//3行3列
//3行4列

//１行ずつまとめて表示する
for (let row = 1; row <= 3; row++) {
    let line = "";

    for (let col = 1; col <= 4; col++) {
        line += `${row}行${col}列  `;
    }

    console.log(line);
}
//実行結果
//1行1列  1行2列  1行3列  1行4列
//2行1列  2行2列  2行3列  2行4列
//3行1列  3行2列  3行3列  3行4列

//このコードでは、`line`という変数を使用しています。
//
//let line = "";
//
//最初に空の文字列を代入し、内側のループで座席番号を追加していきます。
//
//line += `${row}行${col}列  `;
//
//`+=`を文字列に使用すると、元の文字列の末尾に新しい文字列を追加できます。

//九九の表を作る
for (let dan = 1; dan <= 3; dan++) {
    for (let number = 1; number <= 9; number++) {
        console.log(`${dan} × ${number} = ${dan * number}`);
    }
}

//九九を１行ずつ表示する
for (let dan = 1; dan <= 9; dan++) {
    let line = "";

    for (let number = 1; number <= 9; number++) {
        line += `${dan}×${number}=${dan * number}  `;
    }

    console.log(line);
}