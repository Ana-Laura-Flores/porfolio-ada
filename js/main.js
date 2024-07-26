const $ = (selector) => document.querySelector(selector)

// switch - toggle


$(".switch").addEventListener("click", e => {
    $(".switch").classList.toggle("active");
    document.body.classList.toggle("active");
})


