// プレイヤー情報をまとめたオブジェクト
const player = {
    name: "勇者",      // 名前
    hp: 70,           // 現在HP
    maxHp: 100,       // 最大HP
    status: "通常"    // 現在の状態
};

// ユーザーに action を入力してもらう
// damage = ダメージ
// heal = 回復
let action = prompt("damageかhealを入力してください。");

// ユーザーに数値を入力してもらう
// Number()で文字列→数値に変換
let amount = Number(prompt("数値を入力してください。"));


// actionがdamageでもhealでもない場合
if (action !== "damage" && action !== "heal") {

    console.log("アクションが正しくありません。");

// amountが0以下、または数値以外の場合
} else if (amount <= 0 || isNaN(amount)) {

    console.log("0より大きい数値を入力してください。");

} else {

    // damageならHPを減らす
    if (action === "damage") {
        player.hp -= amount;

    // healならHPを増やす
    } else if (action === "heal") {
        player.hp += amount;
    }

    // HPがマイナスにならないようにする
    if (player.hp < 0) {
        player.hp = 0;
    }

    // HPが最大値を超えないようにする
    if (player.hp > player.maxHp) {
        player.hp = player.maxHp;
    }

    // HPに応じて状態を変更
    if (player.hp === 0) {

        // HPが0
        player.status = "戦闘不能";

    } else if (player.hp <= 30) {

        // HPが1～30
        player.status = "危険";

    } else {

        // HPが31以上
        player.status = "通常";
    }

    // 最終結果を表示
    console.log(`${player.name}のHP：${player.hp} / ${player.maxHp}`);
    console.log(`状態：${player.status}`);
}