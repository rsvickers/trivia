export class TriviaQuestion {
    constructor(data) {
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers || []
    }

    get TriviaQuestionTemplate() {
        return `
<section class="row align-self-center justify-content-center">
        <div class="col-10 box ">
          <h2 class="text-center funFont">${this.question}</h2>
        </div>
      </section>

      <section class="row p-5 justify-content-evenly">
        <div class="col-5 questionBox">
          <p class="text-center fs-4 funFont">${this.correctAnswer}</p>
        </div>
          ${this.IncorrectAnswerItem}
      </section>
`
    }

    get IncorrectAnswerItem() {
        let content = ''
        this.incorrectAnswers.forEach(incorrectAnswer => content += `  <div class="col-5 questionBox"> <p class="text-center fs-4 funFont">${incorrectAnswer}</p> </div>`)
        return content
    }

}



// const triviaData = {

// {
//     "question": "Which band name isn&#039;t a Stand in &quot;JoJo&#039;s Bizzare Adventure&quot;?",
//         "correctAnswer": "AC/DC",
//             "incorrectAnswer": [
//                 "Green Day",
//                 "Survivor",
//                 "Red Hot Chili Peppers"
//             ]
// }

