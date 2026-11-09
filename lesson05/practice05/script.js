const products = [
    { name: "ノート", price: 200, stock: 8 },
    { name: "消しゴム", price: 100, stock: 2 },
    { name: "ボールペン", price: 150, stock: 5 },
    { name: "付箋", price: 300, stock: 1 }
];

let stockCount = 0;

for (let i = 0; i < products.length; i++) {
    console.log(`商品名：${products[i].name}`);
    console.log(`価格：${products[i].price}円`);
    console.log(`在庫数：${products[i].stock}個`);

    if (products[i].stock <= 3) {
        console.log("在庫が少なくなっています");
        stockCount++;
    }

    console.log("----------");
}

console.log(`在庫が少ない商品：${stockCount}件`);