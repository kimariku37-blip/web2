const noticeTitle = document.querySelector("#notice-title");

const noticeSummary = document.querySelector("#notice-summary");

const noticeDetail = document.querySelector("#notice-detail");

noticeTitle.textContent = "図書室の利用時間変更";

noticeSummary.textContent = "11月から図書室の利用時間が変更されます。";

noticeDetail.innerHTML = "利用時間：<strong>9:00～19:00</strong><br>土曜日は17:00まで利用できます。";