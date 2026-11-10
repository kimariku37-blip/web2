const noticeLabel = document.querySelector('#notice-label');
noticeLabel.textContent = '重要なお知らせ';
noticeLabel.classList.add('label-important');

const noticeTitle = document.querySelector('#notice-title');
noticeTitle.textContent = '校内ネットワークのメンテナンスについて';
noticeTitle.style.color = '#b91c1c';

const noticeBody = document.querySelector('#notice-body');
noticeBody.innerHTML =
  '11月10日に校内ネットワークのメンテナンスを実施します。<br>作業中は<strong>インターネットを利用できません。</strong>';

const noticeDate = document.querySelector('#notice-date');
noticeDate.textContent = '公開日：2026年11月3日';

const noticeCard = document.querySelector('#notice-card');
noticeCard.classList.add('is-important');