
const drinkMenu = Number(prompt("ドリンクメニュー番号を入力してください")) 

swich (drinkMenu) {
    case 1:
        alert("オレンジジュース");
        break;

    case 2:
        alert("コーヒー");
        break;
    
    case 3:
        alert("メロンソーダ")
        break
    
    default:
        alert("その番号の商品はありません");
}
