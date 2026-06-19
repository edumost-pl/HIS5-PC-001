const modal =
document.getElementById("modal");

const modalContent =
document.getElementById("modalContent");


document
.querySelectorAll(".zoomable")
.forEach(card=>{

    card.addEventListener("click",()=>{

        modalContent.innerHTML =
        card.innerHTML;

        modal.classList.add("show");

    });

});


document
.querySelectorAll(".zoom-image")
.forEach(img=>{

    img.addEventListener("click",()=>{

        modalContent.innerHTML =
        `<img src="${img.src}">`;

        modal.classList.add("show");

    });

});

document
.querySelectorAll(".zoomText")
.forEach(card => {

    card.addEventListener("click", () => {

        modalContent.innerHTML =
            `<div class="modal-text">
                ${card.innerHTML}
            </div>`;

        modal.classList.add("show");

    });

});




modal.addEventListener("click",()=>{

    modal.classList.remove("show");

});


const overlay =
document.getElementById("overlay");

uaBtn.addEventListener("click",()=>{

    uaPanel.classList.add("open");
    overlay.classList.add("show");
    uaBtn.classList.add("hide");
});

closeUa.addEventListener("click",closePanel);
overlay.addEventListener("click",closePanel);

function closePanel(){

    uaPanel.classList.remove("open");
    overlay.classList.remove("show");
    uaBtn.classList.remove("hide");

}

// навигация
// const file = window.location.pathname.split('/').pop();

// const match = file.match(/slide(\d+)\.html/i);

// if (match) {

//     const currentSlide = parseInt(match[1]);

//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');

//     prevBtn.addEventListener('click', () => {

//         if(currentSlide === 1){
//             window.location.href = "index.html";
//             return;
//         }

//         window.location.href = `slide${currentSlide - 1}.html`;

//     });

//     nextBtn.addEventListener('click', () => {

//         window.location.href = `slide${currentSlide + 1}.html`;

//     });

// }

// slide 15 quize
document
.querySelectorAll(".answer-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        const answer =
        btn.nextElementSibling;

        answer.classList.toggle("show");

        if(answer.classList.contains("show")){

            btn.textContent =
            "🙈 Ukryj odpowiedź";

        }else{

            btn.textContent =
            "🦉 Sprawdź odpowiedź";

        }

    });

});