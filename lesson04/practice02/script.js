let count = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 3 ===0 || i % 5 === 0) {
        console.log(i);
        count++;
    }
}

console.log(`条件を満たした数値：${count}個`);