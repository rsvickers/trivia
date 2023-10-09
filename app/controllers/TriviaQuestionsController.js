import { AppState } from "../AppState.js";
import { triviaQuestionsService } from "../services/TriviaQuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawTriviaQuestions() {
    const triviaQuestions = AppState.triviaQuestions
    let content = ''
    triviaQuestions.forEach(triviaQuestion => content += triviaQuestion.TriviaQuestionTemplate)
    setHTML('triviaQuestions', content)
}

export class TriviaQuestionsController {
    constructor() {
        // Pop.success('trivia controller is a go!')


        this.getTriviaQuestions()

        AppState.on('triviaQuestions', _drawTriviaQuestions)
    }
    async getTriviaQuestions() {
        try {

            await triviaQuestionsService.getTriviaQuestions()
            // Pop.success('Questions!!!!')

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

}