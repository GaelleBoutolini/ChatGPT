let questions = ["Bonjour", "comment vas-tu ?", "ça va?", "Qui est-tu ?", "Pouvez-vous m'aider?"];
let responses = ["Bonjour ! Comment puis-je vous aider aujourd'hui ?", "je vais très bien merci et vous ?", "je vais très bien merci et vous ?", "Je suis ChatGPT, un modèle de traitement du langage développé par OpenAI.", "Oui bien sûr !"]
let inputQuestion = document.querySelector("#question");
let btnValidate = document.querySelector("#validate");
let responseContainer = document.querySelector("#response");

document.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.KeyboardEvent.keyCode === 13) {
        btnValidate.click();
    }
})

btnValidate.addEventListener("click", () => {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i] === inputQuestion.value) {
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
            console.log(responseParagraph)
            let index = responseParagraph.length - 1;
            responseParagraph[index].style.animation = "typing 3.5s steps(" + responses[i].length + ")";
            let filteredResponses = Array.from(responseParagraph).filter((res, ind) => ind !== index);
            for (let j = 0; j < filteredResponses.length; j++) {
                filteredResponses[j].style.animation = "none"
            }

            inputQuestion.value = ""
            addEventToThumbs();
        }

    }
})

function addEventToThumbs() {
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
