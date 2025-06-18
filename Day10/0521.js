var heartValue = 1;

function heartClick(element){
    element.classList.toggle("heart-red");

    element.classList.toggle("bi-heart-fill");
    element.classList.toggle("bi-heart");

    if (element.classList.contains("bi-heart-fill")) {
        heartValue += 1;
    } else {
        heartValue -= 1;
    }
    document.getElementById("like-count").innerText = heartValue;
    console.log("하트 개수:",heartValue);
}
