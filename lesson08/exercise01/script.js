const courseStatus = document.querySelector("#course-status");
courseStatus.textContent = "受付中";
courseStatus.classList.add("is-open");

const courseTitle = document.querySelector("#course-title");
courseTitle.style.color = "#1d4ed8";
courseTitle.style.fontSize = "28px";

const courseCard = document.querySelector("#course-card");
courseCard.classList.remove("is-muted");
courseCard.classList.toggle("is-featured");

const courseDescription = document.querySelector("#course-description");
courseDescription.textContent =
    "JavaScriptを使って、Webページに動きを付ける方法を学びます。";
