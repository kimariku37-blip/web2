const participants = ["田中", "佐藤", "鈴木"]

participants.push("高橋", "山本")

const remove_participants = participants.pop(participants)

console.log(`受付取消：${remove_participants}`)

if (participants.includes("高橋")) {
    console.log("高橋さんは受付済みです");
} else {
    console.log("高橋さんは受付されていません")
}

if (participants.includes("山本")) {
    console.log("山本さんは受付済みです");
} else {
    console.log("山本さんは受付されていません")
}

console.log(`参加者：${participants.join("、")}`)
console.log(`参加人数：${participants.length}人`)
