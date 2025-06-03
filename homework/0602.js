function showTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("now").textContent = `${hour}:${min}:${sec}`;
}

setInterval(showTime, 1000);
showTime();


