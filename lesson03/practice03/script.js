const age = Number(prompt("年齢を入力してください"))
const playerLevel = Number(prompt("レベルを入力してください"))
const invitation  = prompt("招待されていますか？ あり/なし)")

if (age >= 15 && (playerLevel >= 10 || invitation === "あり")) {
    alert("ゲーム大会に参加できます");

    if(playerLevel >= 30) {
        alert("上級者部門に参加できます");
    } else {
        alert("一般部門に参加できます");
    }

} else {
    alert("ゲーム大会に参加できません");
}

