const eventTitle = document.querySelector("#event-title");
const eventDescription = document.querySelector("#event-description");
const eventStatus = document.querySelector("#event-status");
const eventImage = document.querySelector("#event-image");
const eventLink = document.querySelector("#event-link");
const eventCard = document.querySelector(".event-card");

eventTitle.textContent = "秋の作品展示会";

eventDescription.innerHTML = "学生が制作した<strong>Webサイトやアプリ</strong>を展示します。<br>ぜひご覧ください！";

eventStatus.textContent = "開催決定";

eventImage.src = "https://placehold.co/680x280/2563eb/ffffff?text=Student+Exhibition";
eventImage.alt = "学生作品展示会の案内画像";

eventLink.href = "#event-description";
eventLink.textContent = "展示会の詳細を見る";
eventLink.setAttribute("title", "イベントの説明文へ移動します");

eventTitle.style.color = "#1d4ed8";
eventTitle.style.fontSize = "28px";

eventLink.style.fontWeight = "bold";

eventStatus.classList.add("status-active");
eventCard.classList.add("event-featured");