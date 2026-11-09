let count = 0;
let total = 0;

let number = Number(prompt("正の整数を入力してください"));

while (number !== 0) {

    total += number;
    count++;

    number = Number(prompt("正の整数を入力してください（０で終了）"));
}

console.log("合計：" + total)
console.log("入力回数" + count + "回")