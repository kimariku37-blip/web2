let total = 0;

for (let num = 1; num <= 30; num++) {
    if (num % 4 === 0) {
        continue;
    }


    console.log(num);

    total += num;

    if (total >= 50) {
        break;
    }
}

console.log("合計：" + total);