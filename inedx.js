let questions = ["Bonjour", "comment vas-tu ?", "ça va?", "Qui est-tu ?", "Pouvez-vous m'aider?"];
let responses = ["Bonjour !", "je vais très bien merci et vous ?", "je vais très bien merci et vous ?", "Je suis ChatGPT, un modèle de traitement du langage développé par OpenAI.", "Oui bien sûr !"]
let inputQuestion = document.querySelector("#question");
let btnValidate = document.querySelector("#validate");
let responseContainer = document.querySelector("#response")

btnValidate.addEventListener("click", () => {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i] === inputQuestion.value) {
            responseContainer.innerHTML += `
            <div class="user_question"><i class="bi bi-patch-question"></i> ${questions[i]}</div>
            <div class="answer_content"><i class="bi bi-chat-dots"></i>${responses[i]}</div>
            `;
            inputQuestion.value = ""
        }
    }
})