const transportationCosts = prompt("交通費を入力してください");
console.log(`交通費は${transportationCosts}円です`);

const foodCosts = prompt("食事代を入力してください");
console.log(`食事代は${foodCosts}円です`);

const souvenirCost = prompt("お土産代を入力してください");
console.log(`お土産代は${souvenirCost}円です`);

const totalCost = Number(transportationCosts) + Number(foodCosts) + Number(souvenirCost);
console.log(`合計金額は${totalCost}円です`);

alert(`今回の旅行金額は
交通費：${transportationCosts}円
食事代：${foodCosts}円
お土産代：${souvenirCost}円
合計金額は${totalCost}円です`);