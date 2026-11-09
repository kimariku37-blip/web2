const level = Number(prompt("レベルを入力してください"));

if (level >= 30) {
    alert("伝説の勇者");
} else if (level >= 20) {
    alert("熟練の冒険者");
} else if (level >= 10){
    alert("駆け出し冒険者");
} else {
    alert("初心者")
}
