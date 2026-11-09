//console.log("=== 学習メニュー ===");
//console.log("1. HTML");
//console.log("2. CSS");
//console.log("3. JavaScript");
//
//console.log("もう一度メニューを表示します。");
//
//console.log("=== 学習メニュー ===");
//console.log("1. HTML");
//console.log("2. CSS");
//console.log("3. JavaScript");
//
////同じ学習メニューをプログラムの中で2回表示したい場合は、showMenu()関数を使う
////関数の定義
//
//function 関数名() {
//    実行する処理;
//}
//
//function showMenu() {
//    console.log("=== 学習メニュー ===");
//    console.log("1. HTML");
//    console.log("2. CSS");
//    console.log("3. JavaScript");
//}
//
//console.log("開始");
//
//showMenu();
//
//console.log("終了");
//
////同じ関数を何度も呼び出す
//
//function showMenu() {
//    console.log("=== 学習メニュー ===");
//    console.log("1. HTML");
//    console.log("2. CSS");
//    console.log("3. JavaScript");
//}
//
//console.log("1回目の表示");
//showMenu();
//
//console.log("2回目の表示");
//showMenu();
//
//console.log("3回目の表示");
//showMenu();
//
////showNotice()関数の定義
//function showMenu() {
//    console.log("=== 学習メニュー ===");
//    console.log("1. HTML");
//    console.log("2. CSS");
//    console.log("3. JavaScript");
//}
//
//function showNotice() {
//    console.log("=== 注意事項 ===");
//    console.log("学習を始める前に復習しましょう。");
//    console.log("分からないことは積極的に調べましょう。");
//}
//
//showMenu();
//
//showNotice();
//
//引数と戻り値
//
//function greet(name) {  //仮引数(name)を受け取る
//    console.log(`${name}さん、こんにちは！`);
//}
//
//greet("田中");  //実行結果：田中さん、こんにちは！
//
////greet("佐藤")、greet("鈴木")などにすると田中の部分が変わって表示される
//
//function greet(name) {
//    console.log(`${name}さん、こんにちは！`);
//}
//
//const userName = "高橋" //<-prompt("名前を入力してください");
//
//greet(userName);
////今回は、変数`userName`に格納された`"高橋"`が関数へ渡されます。
////また、次のように`prompt()`で取得した値を渡すこともできます。
//
//function showProduct(name, price) { //複数の仮引数を受け取る場合は","で区切る
//    console.log(`商品名：${name}`);
//    console.log(`価格：${price}円`);
//}
//
//showProduct("ノート", 200);
//
////複数の引数を使って計算する
//function showTotal(price, quantity) {
//    const total = price * quantity;
//
//    console.log(`合計金額：${total}円`);
//}
//
//showTotal(200, 3);
//showTotal(150, 5);
//
////戻り値について
//const fruits = ["りんご", "みかん", "ぶどう"];
//
//const removedFruit = fruits.pop();  //pop()で配列の最後の要素を削除する
//
//console.log(removedFruit);  //削除したものを表示する
//
////returnで計算結果を返す
//function calculateTotal(price, quantity) {
//    const total = price * quantity;
//
//    return total;
//}
//
//const result = calculateTotal(200, 3);
//
//console.log(result);
//
////戻り値を計算に使用する
//function calculateTotal(price, quantity) {
//    const total = price * quantity;
//
//    return total;
//}
//
//const result = calculateTotal(200, 3);
//
//const discountedPrice = result - 100;
//
//console.log(`割引前：${result}円`);
//console.log(`割引後：${discountedPrice}円`);
//
////条件に応じてことなる値を返す
//function checkScore(score) {
//    if (score >= 70) {
//        return "合格";
//    } else {
//        return "不合格";
//    }
//}
//
//console.log(checkScore(85));
//console.log(checkScore(55));
//
////関数の外側で宣言した変数
//const schoolName = "テスト学園";
//
//function showSchool() {
//    console.log(schoolName);    //関数の外側で宣言した変数は、関数の中から参照することもできます。
//}
//
//showSchool();
//
////関数宣言
//function 関数名(仮引数) {
//    実行する処理;
//}
//
////関数式
//const 変数名 = function(仮引数) {
//    実行する処理;
//};
//
////無名関数
//const greet = function(name) {
//    console.log(`${name}さん、こんにちは！`);
//};
//
//greet("田中");
//greet("佐藤");
//
////関数そのものを別の変数に代入する
//const greet = function(name) {
//    console.log(`${name}さん、こんにちは！`);
//};
//
//const sayHello = greet;
//
//greet("田中");
//sayHello("佐藤");
//
////アロー関数
//const 変数名 = (仮引数) => {
//    実行する処理;
//};
//
////通常の関数式
//const greet = function(name) {
//    console.log(`${name}さん、こんにちは！`);
//};
//
////アロー関数    //引数がない場合は()の中を空にすればいい
//const greet = (name) => {
//    console.log(`${name}さん、こんにちは！`);
//};
//
//greet("田中");
//greet("佐藤");
//
////引数と戻り値を利用する
//const calculateTotal = (price, quantity) => {
//    const total = price * quantity;
//
//    return total;
//};
//
//const result = calculateTotal(200, 3);
//
//console.log(`合計金額：${result}円`);
//
////アロー関数の省略記法
//const double = number => {  //引数が1個しかない場合は()いらない。引数がない場合は()必須。
//    return number * 2;
//};
//
////コールバック関数
//function add(a, b) {
//    return a + b;
//}
//
//function multiply(a, b) {
//    return a * b;
//}
//
//function subtract(a, b) {
//    return a - b;
//}
//
//function calculate(a, b, operation) {
//    return operation(a, b);
//}
//
//console.log(calculate(10, 5, add));
//console.log(calculate(10, 5, multiply));
//console.log(calculate(10, 5, subtract));
//
// | 用途 | 代表的な機能 | コールバック関数の役割 |
// | --- | --- | --- |
// | 配列の処理 | `forEach()`、`map()` | 配列の各要素に対して処理を行う |
// | イベント処理 | `addEventListener()` | クリックなどの操作が発生したときに処理を行う |
// | タイマー処理 | `setTimeout()` | 指定された時間が経過した後に処理を行う |
// | 処理の切り替え | 自分で作成した関数 | 渡された処理を実行する |
//
////アロー関数を変数に代入して渡す
//const add = (a, b) => {
//    return a + b;
//};
//
//function calculate(a, b, operation) {
//    return operation(a, b);
//}
//
//console.log(calculate(10, 5, add));
//
////forEach()
//配列名.forEach(コールバック関数);
//
////アロー関数を使用する場合
//配列名.forEach((要素を受け取る仮引数) => {
//    実行する処理;
//});
//
//const fruits = ["りんご", "みかん", "ぶどう"];
//
//fruits.forEach((fruit) => {
//    console.log(fruit);
//});
//
//fruits.forEach(print);
//
////数値の配列を処理する（今回は２倍にする）
//const numbers = [10, 20, 30, 40];
//
//numbers.forEach((number) => {
//    console.log(number * 2);
//});
//
////if文と組み合わせる
//const scores = [80, 45, 90, 65, 100];
//
//scores.forEach((score) => {
//    if (score >= 70) {
//        console.log(`${score}点：合格`);
//    }
//});
//
////配列の数値を合計する
//const scores = [80, 65, 90, 75];
//
//let total = 0;
//
//scores.forEach((score) => {
//    total += score;
//});
//
//console.log(`合計点：${total}点`);
//
////forEach()のコールバック関数では、次のように2つの仮引数を設定できます。
//配列名.forEach((要素, インデックス) => {
//    実行する処理;
//});
//
//
//const fruits = ["りんご", "みかん", "ぶどう"];
//
//fruits.forEach((fruit, index) => {
//    console.log(`${index}：${fruit}`);  //０からやりたくない場合は、index -> index + 1にすればいい。
//});
//
////オブジェクトの配列と組み合わせる
//const students = [
//    { name: "田中", score: 85 },
//    { name: "佐藤", score: 62 },
//    { name: "鈴木", score: 94 }
//];
//
//students.forEach((student, index) => {
//    console.log(`${index + 1}人目：${student.name}`);
//    console.log(`点数：${student.score}点`);
//});
//
////map()関数 <- map()はコールバック関数が返した値を集めて、新しい配列を作成することができる
//
//const 新しい配列 = 配列名.map(コールバック関数);
//
////アロー関数を使用する場合
//const 新しい配列 = 配列名.map((要素) => {
//    return 変換後の値;
//});

const numbers = [10, 20, 30];

const doubled = numbers.map((number) => {   //map()にはreturnが必要不可欠
    return number * 2;
});

console.log(doubled);