function showTicketInfo(ticketType, price) {
    console.log(`チケットの種類：${ticketType}`);
    console.log(`1枚の料金：${price}円`)

}

function calculateTotal(price, quantity) {
    const total = price * quantity;
    return total;
}

const sumRegularTicket = calculateTotal(1800, 3);
const studentTicket = calculateTotal(1200, 2);

showTicketInfo("一般", 1800);
console.log(`合計金額：${sumRegularTicket}円`);

console.log("----------");

showTicketInfo("学生", 1200);
console.log(`合計金額：${studentTicket}円`);
