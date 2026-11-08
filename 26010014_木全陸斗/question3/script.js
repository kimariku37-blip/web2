// 購入者情報を配列で管理
const customers = [
    {
        name: "田中",       // 名前
        age: 14,           // 年齢
        isMember: false    // 非会員
    },

    {
        name: "鈴木",
        age: 30,
        isMember: true     // 会員
    },

    {
        name: "佐藤",
        age: 70,
        isMember: true
    }
];

// チケット料金を計算する関数
function calculateTicketPrice(age, isMember) {

    // 料金を入れる変数
    let price;

    // 年齢によって基本料金を決定
    if (age <= 17) {

        // 17歳以下
        price = 1000;

    } else if (age <= 64) {

        // 18歳～64歳
        price = 1800;

    } else {

        // 65歳以上
        price = 1200;
    }

    // 会員なら200円割引
    if (isMember) {
        price -= 200;
    }

    // 計算した料金を返す
    return price;
}

// customersから新しいtickets配列を作成
const tickets = customers.map(customer => {

    return {

        // 名前をコピー
        name: customer.name,

        // 計算した料金を保存
        price: calculateTicketPrice(
            customer.age,
            customer.isMember
        )

    };
});

// 合計金額を保存する変数
let total = 0;

// tickets配列を順番に処理
tickets.forEach(ticket => {

    // 名前と料金を表示
    console.log(`${ticket.name}さん：${ticket.price}円`);

    // 合計金額に加算
    total += ticket.price;
});

// 全員分の合計金額を表示
console.log(`合計金額：${total}円`);