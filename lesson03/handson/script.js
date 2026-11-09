//console.log(10 === 10);
//console.log(10 !== 10);
//console.log(10 === 20);
//console.log(10 !== 20);
//
//const score = 75;
//
//console.log(score === 75);
//console.log(score !== 75);
//console.log(score > 60);
//console.log(score < 60);
//console.log(score >= 75);
//#console.log(score <= 70);

//const score = Number(prompt("点数を入力してください"));
//
//if (score >= 60) {
//    alert("合格");
//
//
//} else {
//    alert("不合格です");
//}

//const age = Number(prompt("年齢を入力してください"));
//
//if (age >= 20) {
//    alert("成人です");
//} else {
//    alert("未成年です");
//}

//const score = 85;
//
//if (score >= 40) {
//    alert("評価はCです");
//} else if (score >= 60) {
//    alert("評価はBです");
//} else if (score >= 80) {
//    alert("評価はAです");
//} else {
//    alert("評価はDです");
//}

// 論理演算子	意味
// &&	両方の条件が成立している
// ||	どちらかの条件が成立している
// ! 	条件の結果を反対にする

//`&&`では、左右の条件が両方とも`true`の場合だけ、
// 全体の結果が`true`になります。

//true  && true  → true
//true  && false → false
//false && true  → false
//false && false → false

//const day = "土曜日";
//console.log(day === "土曜日" || day === "日曜日");
//
//`||`では、どちらか一方でも`true`であれば、全体の結果は`true`になります。
//
//```
//true  || true  → true
//true  || false → true
//false || true  → true
//false || false → false
//```
//
// !true  → false
// !false → true
//
//const isLogin = false;
//const playerLevel = 10;
//
//if (isLogin === true) {
//    alert("ログインしています");
//
//    if (playerLevel >= 20) {
//        alert("高難易度ステージを選択できます");
//    } else {
//        alert("レベルが足りません");
//    }
//
//
//} else {
//    alert("ログインしてください");
//}
//
// if文の中にif文があるものをネストという
//
//const command = prompt("コマンドを入力してください");
//
//switch (command) {
//    case "attack":
//        alert("攻撃します");
//        break;
//    case "heal":
//        alert("回復します");
//        break;
//    case "escape":
//        alert("逃げます");
//        break;
//    default:
//        alert("使用できないコマンドです");
//}
//
//const color = prompt("信号の色を入力してください");
//
//switch (color) {
//    case "青":
//        alert("進むことができます");
//        break;
//    case "黄":
//        alert("注意してください");
//        break;
//    case "赤":
//        alert("止まってください");
//        break;
//    default:
//        alert("正しい色を入力してください");
//}

const score = 70;

const result = score >= 60 ? "合格です" : "不合格です";

alert(result);
