const eventTitle = document.querySelector("#event-title");

const eventImage = document.querySelector("#event-image");

const eventMessage = document.querySelector("#event-message");

const detailLink = document.querySelector("#detail-link");

eventTitle.textContent = "図書室読書週間";

eventImage.src = "https://placehold.co/600x250/0f766e/ffffff?text=Library+Week";

eventImage.alt = "図書室読書週間の案内画像";

eventMessage.textContent = "11月は読書週間です。おすすめの本を紹介します！";

detailLink.href = "#library-info";

detailLink.textContent = "図書室の情報を見る";

detailLink.setAttribute("title", "図書室の基本情報へ移動します");