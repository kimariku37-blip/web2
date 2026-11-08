// 商品一覧を配列で管理
const products = [
    {
        name: "りんご",   // 商品名
        price: 120,      // 価格
        stock: 3         // 在庫数
    },

    {
        name: "みかん",
        price: 80,
        stock: 1
    },

    {
        name: "バナナ",
        price: 150,
        stock: 0
    },

    {
        name: "メロン",
        price: 800,
        stock: 5
    }
];

// 売り切れ商品の数を数える変数
let count = 0;

// 配列の全商品を順番に処理
products.forEach(product => {

    // 在庫がある場合
    if (product.stock > 0) {

        // 商品情報を表示
        console.log(
            `${product.name}:${product.price}円(在庫${product.stock}個)`
        );

    } else {

        // 在庫0なら売り切れ商品としてカウント
        count++;
    }
});

// 売り切れ商品の数を表示
console.log(`売り切れの商品：${count}種類`);