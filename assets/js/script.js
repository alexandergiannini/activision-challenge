const learnMoreBtn = document.querySelector(".learn-more-btn")
const closeBtn = document.querySelector(".close-btn")
//const contentText = document.querySelector(".content-text")

learnMoreBtn.onclick = function () {
    $(".modal-overlay, .modal-content").addClass("active");
    $(".content-text").removeClass("active");
}

closeBtn.onclick = function () {
    $(".modal-overlay, .modal-content").removeClass("active");
    $(".content-text").addClass("active");
}

