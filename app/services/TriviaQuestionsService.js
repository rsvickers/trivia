import { AppState } from "../AppState.js"
import { TriviaQuestion } from "../models/TriviaQuestion.js"



class TriviaQuestionsService {
    async getTriviaQuestions() {
        const response = await axios.get('https://opentdb.com/api.php?amount=5&category=31')

        console.log('GOT QUESTIONS', response.data);

        const newTriviaQuestions = response.data.results.map(triviaQuestionPOJO => new TriviaQuestion(triviaQuestionPOJO))
        AppState.triviaQuestions = newTriviaQuestions

        console.log('Questions in AppState', AppState.triviaQuestions)

    }
}


export const triviaQuestionsService = new TriviaQuestionsService()