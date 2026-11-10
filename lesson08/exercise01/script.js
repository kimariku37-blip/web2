const title = document.getElementById("title");
const label = document.getElementById("label");
const content = document.getElementById("content");
const date = document.getElementById("date");
const card = document.getElementById("notice-card");

title.textContent = "校内ネットワークのメンテナンスについて";

label.textContent = "重要なお知らせ";

content.innerHTML =
  "11月10日に校内ネットワークの<strong>メンテナンス</strong>を実施します。<br>作業中はインターネットを利用できません。";

date.textContent = "公開日：2026年11月3日";

title.style.color = "red";

label.classList.add("important-label");
card.classList.add("is-important");