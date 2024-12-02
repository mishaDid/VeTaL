// Welcome screen logic
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContainer = document.getElementById("mainContainer");

setTimeout(() => {
    welcomeScreen.style.display = "none";
    mainContainer.style.display = "block";
}, 3000);

// Toggle TikTok section
function toggleTikTok() {
    const tiktokList = document.getElementById("tiktokList");
    tiktokList.style.display = tiktokList.style.display === "none" || !tiktokList.style.display ? "block" : "none";
}

// Toggle Donate section
function toggleDonate() {
    const donateList = document.getElementById("donateList");
    donateList.style.display = donateList.style.display === "none" || !donateList.style.display ? "block" : "none";
}
