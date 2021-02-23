import { Selector } from 'testcafe'

export default class App {
    constructor() {
        this.title = Selector('[test-data-id = "app-title"]')
        this.questionInput = Selector('[test-data-id = "question-data"]')
        this.optionInputOne = Selector('[test-data-id = "option-data-0"]')
        this.optionInputTwo = Selector('[test-data-id = "option-data-1"]')
        this.addButtonOne = Selector('[test-data-id = "add-option-0"]')
        this.addButtonTwo = Selector('[test-data-id = "add-option-1"]')
        this.pollQuestion = Selector('[test-data-id = "poll-question"]')
        this.radioOptionOne = Selector('[test-data-id = "option-radio-0"]')
        this.radioOptionTwo = Selector('[test-data-id = "option-radio-1"]')
        this.voteButton = Selector('[test-data-id = "vote-button"]')
        this.chartDisplay = Selector('[test-data-id = "chart-display"]')
        this.testData = {
            title: 'Sir Vote-a-lot',
            question: 'What is the value of Pi',
            optionOne: '2.15',
            optionTwo: '3.14',
        }
    }

}
