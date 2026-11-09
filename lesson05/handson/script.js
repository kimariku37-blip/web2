//const fruit1 = "りんご";
//const fruit2 = "みかん";
//const fruit3 = "ぶどう";
//
//console.log(fruit1);
//console.log(fruit2);
//console.log(fruit3);
//
////配列を使った考え
//const fruits = ["りんご", "みかん", "ぶどう"];  //配列名を考えるときは基本的に複数形で考える。
//console.log(fruits)
//
////配列の基本構文 -> 各要素はカンマで区切って記述する。配列には数値も格納できる。
////const 配列名 = [値1, 値2, 値3];
//
////配列には文字や数値など、異なるデータを一つの配列に格納できる。
////const data = ["田中", 18, true];
//
////配列の要素を取得する
////配列に格納された要素はインデックス（Index）を使用して取り出すこともできる。インデックスは０から始まる。
//
////const fruits = ["りんご", "みかん", "ぶどう"];
//
////インデックス	要素
////0	           りんご
////1	           みかん
////2	           ぶどう
//
//const fruits = ["りんご", "みかん", "ぶどう"];
//
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//
////存在しないインデックスを指定した場合、実行結果では"undefined"になる。
////undefinedは値が定義されていないことを指す。
//
////インデックスと要素の変更
////配列では、要素を取得するだけでなく、格納されている値を変更することもできます
////基本的な書き方：配列名[インデックス] = 新しい値;
//
//const fruits = ["りんご", "みかん", "ぶどう"];
//console.log(fruits[1]);
//fruits[1] = "バナナ";
//console.log(fruits[1]);
//
////lengthで要素を取得する
////length:格納されているデータが何個あるのかを知りたい場合に使える。
//
////基本的な書き方: 配列名.length
//
//const fruits = ["りんご", "みかん", "ぶどう"];
//console.log(fruits.length);
//
////別の方法
//const fruits = ["りんご", "みかん", "ぶどう"];
//
//console.log(`果物の数：${fruits.length}個`);
//
////注意！！：lengthではインデックスは関係ない。つまり、要素が３つあったら３が答えになる。
////要素が一つもない場合には０になる
//
////配列の最後の要素を取得
//const fruits = ["りんご", "みかん", "ぶどう", "バナナ"];
//
//console.log(fruits[fruits.length - 1]);
//
////配列のメソッド
////メソッドとは特定のデータに対して何らかの処理を行うための機能
////配列の末尾に新しい要素を追加したい場合、push()というメソッドを使用できます
//
////基本的な書き方：配列名.メソッド名(引数);
//
//const fruits = ["りんご", "みかん"];
//
//console.log(fruits)
//fruits.push("ぶどう");
//console.log(fruits)
//
////プロパティとメソッドのちがい
////種類	        役割	                    使用例
////プロパティ	データが持つ情報を表す	    fruits.length
////メソッド	    データに対して処理を行う	fruits.push("ぶどう")
//
////書き方の違い：プロパティ：基本的に名前の後ろに()を付けない
////             メソッド：名前の後ろに()を付けて呼び出す
//
//const shoppingList = ["パン", "牛乳"];
//shoppingList.push("卵");    //追加される要素は最後に追加される
//console.log(shoppingList);
//
////複数の要素を追加する <- push()では、複数の値をまとめて追加することができる
//
//const shoppingList = ["パン", "牛乳"];
//
//shoppingList.push("卵", "バナナ", "チーズ");
//console.log(shoppingList);
//
//push()には要素を追加した後の配列の要素数を返すことができる。
//
//const shoppingList = ["パン", "牛乳"];
//const count = shoppingList.push("卵");
//
//console.log(count);
//console.log(shoppingList.length);
//
////pop()で配列の末尾にある要素を削除する
//const shoppingList = ["パン", "牛乳", "卵"];
//
//shoppingList.pop();
//
//console.log(shoppingList);
//
//pop()は削除した要素や値を戻り値として返す
//const shoppingList = ["パン", "牛乳", "卵"];
//
//const removedItem = shoppingList.pop();
//
//console.log(`削除した商品：${removedItem}`);
//console.log(`残りの商品数：${shoppingList.length}個`);
//
////includes()で配列の中に指定した値が含まれているかどうかを調べる <- boolean型
//const shoppingList = ["パン", "牛乳", "卵"];
//
//console.log(shoppingList.includes("牛乳"));     //<-true
//console.log(shoppingList.includes("バナナ"));   //<-false
//
////if文と組み合わせる
//const shoppingList = ["パン", "牛乳", "卵"];
//
//if (shoppingList.includes("牛乳")) {
//    console.log("牛乳は買い物リストに登録されています");
//} else {
//    console.log("牛乳は買い物リストに登録されていません");
//}
//
////存在しない場合に要素を追加する
//const shoppingList = ["パン", "牛乳", "卵"];
//
//if (!shoppingList.includes("バナナ")) {     //<-"!"を使ってtrueとfalseを反転させている。
//    shoppingList.push("バナナ");
//    console.log("バナナを追加しました");
//} else {
//    console.log("バナナはすでに登録されています");
//}
//
//console.log(shoppingList);
//
////join()で配列の要素をつなげて、１つの文字列を作成する
//const shoppingList = ["パン", "牛乳", "卵"];
//
//const message = shoppingList.join("、");    //配列の各要素を「、」で区切って1つの文字列にまとめています。
//
//console.log(message);
//
////区切り文字を変更する
//const shoppingList = ["パン", "牛乳", "卵"];
//
//console.log(shoppingList.join("、"));
//console.log(shoppingList.join(" / "));
//console.log(shoppingList.join("・"));
//console.log(shoppingList.join(""));
//
//console.log(shoppingList.join());   //()の中に何も指定しなかった場合は","になる
//
////join()と配列の関係　<- join()は元の配列を変更しない
////join()は配列の要素をもとに新しい文字列を作成します。
//
//const shoppingList = ["パン", "牛乳", "卵"];
//
//const message = shoppingList.join("、");
//
//console.log(message);
//console.log(shoppingList);
//
//const shoppingList = ["パン", "牛乳"];
//
//while (true) {
//    const itemToAdd = prompt("追加するアイテムを入力してください（0で終了）");
//
//    if (itemToAdd === "0" || itemToAdd === null) {
//        alert("買い物リストの更新を完了しました。");
//        break;
//    }
//
//    if (itemToAdd === "") {
//        alert("商品名を入力してください。");
//        continue;
//    }
//
//    if (!shoppingList.includes(itemToAdd)) {
//    shoppingList.push(itemToAdd);
//    console.log(`${itemToAdd}を買い物リストに追加しました。`);
//    
//    } else {
//        alert(`${itemToAdd}は既に買い物リストに存在します。`);
//    }
//}
//
//console.log(`買い物リスト：${shoppingList.join(" / ")}`);
//
//for文で配列の要素を順番に取得する
//
//const fruits = ["りんご", "みかん", "ぶどう", "バナナ", "いちご"];
//
//for (let i = 0; i < 5; i++) {       //<- インデックスは０から
//    console.log(fruits[i]);
//}
//
//lengthを条件式に使用する
//const fruits = ["りんご", "みかん", "ぶどう", "バナナ", "いちご"];
//
//for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//}
//
////配列に格納された数値を合計する
//const scores = [80, 45, 90, 65, 100, 55];
//
//let count = 0;
//
//for (let i = 0; i < scores.length; i++) {
//    if (scores[i] >= 70) {
//        console.log(scores[i]);
//        count++;
//    }
//}
//console.log(`70点以上の人数：${count}人`)
//
////オブジェクトを使用する
//const student = {
//    name: "田中",
//    age: 18,
//    score: 85
//};
//
//console.log(student.name);
//console.log(student.age);
//console.log(student.score);
//
////テンプレートリテラルと組み合わせる
//const student = {
//    name: "田中",
//    age: 18,
//    score: 85
//};
//
//console.log(`${student.name}さんは${student.age}歳です。`);
//console.log(`テストの点数は${student.score}点です。`);
//
////配列とオブジェクトの違い
////配列とオブジェクトは、どちらも複数のデータをまとめて管理できますが、データの扱い方が異なります。
////
////比較項目	            配列	            オブジェクト
////基本的な書き方	     []	                    {}
////データの管理方法	インデックスで管理する	    プロパティ名で管理する
////データの取得	       fruits[0]	        student.name
////主な用途	複数のデータを順番に管理する	1つのものに関する情報をまとめる
//
////オブジェクトの基本操作をまとめる
//const student = {
//    name: "田中",
//    age: 18,
//    score: 85
//};
//
//// プロパティを取得する
//console.log(student.name);
//
//// プロパティを変更する
//student.score = 95;
//
//// プロパティを追加する
//student.city = "さいたま";
//
//// 変更後の情報を表示する
//console.log(`名前：${student.name}`);
//console.log(`年齢：${student.age}歳`);
//console.log(`点数：${student.score}点`);
//console.log(`住所：${student.city}`);
//
////オブジェクトを配列に格納する
//const students = [
//    {
//        name: "田中",
//        age: 18,
//        score: 85
//    },
//    {
//        name: "佐藤",
//        age: 19,
//        score: 62
//    },
//    {
//        name: "鈴木",
//        age: 18,
//        score: 94
//    }
//];
//
//console.log(students);
//
////for文で学生の名前を表示する
//const students = [
//    { name: "田中", age: 18, score: 85 },
//    { name: "佐藤", age: 19, score: 62 },
//    { name: "鈴木", age: 18, score: 94 }
//];
//
//for (let i = 0; i < students.length; i++) {
//    console.log(`名前：${students[i].name}`);
//    console.log(`年齢：${students[i].age}歳`);
//    console.log(`点数：${students[i].score}点`);
//    console.log("----------");
//}
//
////変数にオブジェクトを代入する
//for (let i = 0; i < students.length; i++) {
//    const student = students[i];
//
//    console.log(`名前：${student.name}`);
//    console.log(`年齢：${student.age}歳`);
//    console.log(`点数：${student.score}点`);
//    console.log("----------");
//}
//
////点数に応じて合格・不合格を判定する
//const students = [
//    { name: "田中", age: 18, score: 85 },
//    { name: "佐藤", age: 19, score: 62 },
//    { name: "鈴木", age: 18, score: 94 }
//];
//
//for (let i = 0; i < students.length; i++) {
//    const student = students[i];
//
//    if (student.score >= 70) {
//        console.log(`${student.name}さん：合格`);
//    } else {
//        console.log(`${student.name}さん：不合格`);
//    }
//}

//条件を満たす学生だけを表示する：今回は70点以上の学生だけを表示する
//条件を満たす学生の人数も数える
const students = [
    { name: "田中", age: 18, score: 85 },
    { name: "佐藤", age: 19, score: 62 },
    { name: "鈴木", age: 18, score: 94 }
];

const passingScore = 70;
let passCount = 0;

for (let i = 0; i < students.length; i++) {
    const student = students[i];

    if (student.score >= passingScore) {
        console.log(`${student.name}さん：${student.score}点`);
        passCount++;
    }
}

console.log(`合格者数：${passCount}人`);