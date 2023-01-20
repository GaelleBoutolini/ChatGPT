let questions = ["Bonjour", "comment vas-tu ?", "ça va?", "Qui est-tu ?", "Pouvez-vous m'aider?"];
let responses = ["Bonjour ! Comment puis-je vous aider aujourd'hui ?", "je vais très bien merci et vous ?", "je vais très bien merci et vous ?", "Je suis ChatGPT, un modèle de traitement du langage développé par OpenAI.", "Oui bien sûr !"]
let inputQuestion = document.querySelector(".question");
let btnValidate = document.querySelector("#validate");
let responseContainer = document.querySelector("#response");
let groot = document.querySelector("#btn_groot");
let sentencesGroot = ["Je suis Groot !", "Je suis Groot ?", "Je suis Groot.", "Je suis Groot...", "Je suis Groot~", "JE SUIS GROOT !!!!!"]
let containerMain = document.querySelector(".container_main");
let inputAndGrootContainer = document.querySelector(".input_groot_container");


// Début du js pour apparition de modal
document.addEventListener('DOMContentLoaded', function () {
    $('#modal1').modal('show');
});

document.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.KeyboardEvent.keyCode === 13) {
        btnValidate.click();
    }
})
btnValidate.addEventListener("click", () => {
    containerMain.innerHTML = "";
    if (groot.checked) {
        console.log("Je suis dans le mode Groot")
        let sentence = randomArrayElement(sentencesGroot)
        responseContainer.innerHTML += `
            <div class="user_question text-white d-flex justify-content-between align-items-center p-4">   
                <div class="typewriter d-flex align-items-center m-3">           
                    <img src="./icon.png" alt="icon" class="me-3">
                    <p>${inputQuestion.value}</p>
                </div>
                <div class="icon_container">
                    <i class="bi bi-pencil-square me-2 fs-5"></i>
                </div>              
            </div>
            <div class="answer_content text-white d-flex justify-content-between align-items-center p-4">  
                <div class="typewriter d-flex align-items-center m-3">
                    <img src="./logo.png" alt="logo" class="me-3">
                    <p class="response_paragraph position-relative overflow-hidden">                  
                    ${sentence}</p>
                </div>
                <div class="icon_container">
                    <i class="bi bi-hand-thumbs-up thumbUp me-2 fs-5"></i>
                    <i class="bi bi-hand-thumbs-down thumbDown me-2 fs-5"></i>
                </div>
            </div>
            `;
        inputQuestion.value = ""
    }
    let dontHaveThisQuestion = false;
    for (let i = 0; i < questions.length; i++) {
        dontHaveThisQuestion = false;
        let questionUser = inputQuestion.value;
        console.log(questions[i])
        if (questions[i] == questionUser && !groot.checked) {
            dontHaveThisQuestion = false;
            console.log("Je suis dans le mode normal avec une question connue")
            responseContainer.innerHTML += `
            <div class="user_question text-white d-flex justify-content-between align-items-center p-4">   
                <div class="typewriter d-flex align-items-center m-3">           
                    <img src="./icon.png" alt="icon" class="me-3">
                    <p>${questions[i]}</p>
                </div>
                <div class="icon_container">
                    <i class="bi bi-pencil-square me-2 fs-5"></i>
                </div>              
            </div>
            <div class="answer_content text-white d-flex justify-content-between align-items-center p-4">  
                <div class="typewriter d-flex align-items-center m-3">
                    <img src="./logo.png" alt="logo" class="me-3">
                    <p class="response_paragraph position-relative overflow-hidden">                  
                    ${responses[i]}</p>
                </div>
                <div class="icon_container">
                    <i class="bi bi-hand-thumbs-up thumbUp me-2 fs-5"></i>
                    <i class="bi bi-hand-thumbs-down thumbDown me-2 fs-5"></i>
                </div>
            </div>
            `;
            let responseParagraph = document.querySelectorAll(".response_paragraph");
            if (responseParagraph.length !== 0) {
                console.log(responseParagraph)
                let index = responseParagraph.length - 1;
                responseParagraph[index].style.animation = "typing 3.5s steps(" + responses[i].length + ")";
                let filteredResponses = Array.from(responseParagraph).filter((res, ind) => ind !== index);
                console.log(filteredResponses)
                for (let j = 0; j < filteredResponses.length; j++) {
                    filteredResponses[j].style.animation = "none"
                }
                inputQuestion.value = ""
                addEventToThumbs();
            }
            return;
        } else {
            console.log("Je ne connais pas cette question");
            dontHaveThisQuestion = true;
        }
        let responseParagraph = document.querySelectorAll(".response_paragraph");
        if (responseParagraph.length !== 0) {
            console.log(responseParagraph)
            let index = responseParagraph.length - 1;
            responseParagraph[index].style.animation = "typing 3.5s steps(" + responses[i].length + ")";
            let filteredResponses = Array.from(responseParagraph).filter((res, ind) => ind !== index);
            console.log(filteredResponses)
            for (let j = 0; j < filteredResponses.length; j++) {
                console.log("Je met des écouteurs sur mes thumbs")
                filteredResponses[j].style.animation = "none"
                // inputQuestion.value = ""
                addEventToThumbs();
            }
        }
        console.log("Je suis dans la boucle")
    }
    console.log(dontHaveThisQuestion)
    if (dontHaveThisQuestion && !groot.checked) {
        console.log(inputQuestion.value)
        let unknowResponse = "Je suis désolé, je ne connais pas la réponse à cette question"
        responseContainer.innerHTML += `
            <div class="user_question text-white d-flex justify-content-between align-items-center p-4">   
                <div class="typewriter d-flex align-items-center m-3">           
                    <img src="./icon.png" alt="icon" class="me-3">
                    <p>${inputQuestion.value}</p>
                </div>
                <div class="icon_container">
                    <i class="bi bi-pencil-square me-2 fs-5"></i>
                </div>              
            </div>
            <div class="answer_content text-white d-flex justify-content-between align-items-center p-4">  
                <div class="typewriter d-flex align-items-center m-3">
                    <img src="./logo.png" alt="logo" class="me-3">
                    <p class="response_paragraph position-relative overflow-hidden">  
                    ${unknowResponse}                
                    </p>
                </div>
                <div class="icon_container">
                    <i class="bi bi-hand-thumbs-up thumbUp me-2 fs-5"></i>
                    <i class="bi bi-hand-thumbs-down thumbDown me-2 fs-5"></i>
                </div>
            </div>
            `;
        let responseParagraph = document.querySelectorAll(".response_paragraph");
        if (responseParagraph.length !== 0) {
            console.log(responseParagraph)
            let index = responseParagraph.length - 1;
            responseParagraph[index].style.animation = "typing 3.5s steps(" + unknowResponse.length + ")";
            let filteredResponses = Array.from(responseParagraph).filter((res, ind) => ind !== index);
            for (let j = 0; j < filteredResponses.length; j++) {
                filteredResponses[j].style.animation = "none"
            }
            inputQuestion.value = "";
            addEventToThumbs();
        }
    }

})
function addEventToThumbs() {
    console.log("Je met des écouteurs sur mes thumbs")
    let thumbsUp = document.querySelectorAll(".thumbUp")
    for (let b = 0; b < thumbsUp.length; b++) {
        thumbsUp[b].addEventListener("click", () => {
            if (thumbsUp[b].style.color === "blue") {
                thumbsUp[b].style.color = "white"
            } else {
                thumbsUp[b].style.color = "blue";
                thumbsDown[b].style.color = "white";
            }
        }
        )
    }
    let thumbsDown = document.querySelectorAll(".thumbDown")
    for (let b = 0; b < thumbsUp.length; b++) {
        thumbsDown[b].addEventListener("click", () => {
            if (thumbsDown[b].style.color === "blue") {
                thumbsDown[b].style.color = "white";
            } else {
                thumbsDown[b].style.color = "blue";
                thumbsUp[b].style.color = "white";
            }
        }
        )
    }
}
function randomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}