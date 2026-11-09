const steps = [6500, 8200, 4300, 10000, 7600, 9500, 5800];

let total = 0;
let goalCount = 0;

for (let i = 0; i < steps.length; i++) {
    console.log(`${i + 1}日目：${steps[i]}歩`);

    total += steps[i];

    if (steps[i] >= 8000) {
        console.log("目標達成！");
        goalCount++;
    }
}

console.log(`合計歩数：${total}歩`);
console.log(`目標達成日数：${goalCount}日`);