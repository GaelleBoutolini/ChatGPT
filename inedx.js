let questions = ["Bonjour", "comment vas-tu ?", "ça va?", "Qui est-tu ?", "Pouvez-vous m'aider?"];
let responses = ["Bonjour ! Comment puis-je vous aider aujourd'hui ?", "je vais très bien merci et vous ?", "je vais très bien merci et vous ?", "Je suis ChatGPT, un modèle de traitement du langage développé par OpenAI.", "Oui bien sûr !"]
let inputQuestion = document.querySelector("#question");
let btnValidate = document.querySelector("#validate");
let responseContainer = document.querySelector("#response")

btnValidate.addEventListener("click", () => {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i] === inputQuestion.value) {
            responseContainer.innerHTML += `
            <div class="user_question">                
                    <i class="bi bi-patch-question"></i> 
                    <p>${questions[i]}</p>              
            </div>
            <div class="answer_content">  
                <div class="typewriter">
                    <i class="bi bi-chat-dots"></i>
                    <p class="response_paragraph">                  
                    ${responses[i]}</p>
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
        }

    }
})