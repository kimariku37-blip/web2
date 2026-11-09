function showProduct(name, price) {
    console.log(`商品名：${name}`);
    console.log(`単価：${price}円`);
}

const calculateTotal = function(price, quantity) {
    total = price * quantity;
    return total;
} 

const applyDiscount = (total, discount) => {
    const discountedPrice = total - discount;
    return discountedPrice;
}

const note = calculateTotal(200, 3);
const noteDiscount = applyDiscount(note, 100);

const pen = calculateTotal(150, 4);
const penDiscount = applyDiscount(pen, 50);

showProduct("ノート", 200);
console.log(`割引前：${note}円`);
console.log(`支払金額：${noteDiscount}円`);

console.log("----------");

showProduct("ボールペン", 150);
console.log(`割引前：${pen}円`);
console.log(`支払金額：${penDiscount}円`);