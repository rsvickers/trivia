export class TriviaQuestion {
    constructor(data) {
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answers
    }

    get TriviaQuestionTemplate() {
        return `
<section class="row align-self-center justify-content-center">
        <div class="col-10 box ">
          <h2 class="text-center funFont">${this.question}</h2>
        </div>
      </section>

      <section class="row p-5 justify-content-evenly">
        <div class="col-4 questionBox">
          <p class="text-center fs-4 funFont">${this.correctAnswer}</p>
        </div>
        <div class="col-4 questionBox">
          <p class="text-center fs-4 funFont">${this.incorrectAnswer}</p>
        </div>
      </section>
`
    }

}



// const triviaData = {
//     {
//     "category": "Entertainment: Japanese Anime & Manga",
//         "type": "boolean",
//             "difficulty": "easy",
//                 "question": "In the 1988 film &quot;Akira&quot;, Tetsuo ends up destroying Tokyo.",
//                     "correct_answer": "True",
//                         "incorrect_answers": [
//                             "False"
//                         ]
// }
// }