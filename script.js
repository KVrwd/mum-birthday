const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {
    btn.style.display = "none";
    surprise.classList.remove("hidden");

    document.getElementById("bigBirthday").classList.remove("hidden");
    document.getElementById("birthdayMessage").classList.remove("hidden");
    document.getElementById("birthdaySpeech").classList.remove("hidden");
    document.getElementById("fromVictor").classList.remove("hidden");
});
