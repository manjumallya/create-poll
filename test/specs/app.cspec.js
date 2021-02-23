import AppPage from './appPage'

const appPage = new AppPage()

fixture('Main app')
    .page('localhost:8080')

test('Validate the main title of main App vue', async (t) => {
    await t.wait(1000)
    const title = await appPage.title
    await t.expect(title.innerText).eql(appPage.testData.title)
        .takeScreenshot()
})

test('Enter question and option', async (t) => {
    await t.wait(1000)
    const questionInput = await appPage.questionInput
    await t.expect(questionInput.exists).ok()
        .click(questionInput)
        .typeText(questionInput, 'What is the value of Pi')
        .expect(appPage.optionInputOne.exists).ok()
        .click(appPage.optionInputOne)
        .typeText(appPage.optionInputOne, appPage.testData.optionOne)
        .takeScreenshot()
})

test('Enter 2 options', async (t) => {
    await t.wait(1000)
    const questionInput = await appPage.questionInput
    await t.click(questionInput)
        .typeText(questionInput, 'What is the value of Pi')
        .expect(appPage.optionInputOne.exists).ok()
        .click(appPage.optionInputOne)
        .typeText(appPage.optionInputOne, appPage.testData.optionOne)
        .click(appPage.addButtonOne)
        .typeText(appPage.optionInputTwo, appPage.testData.optionTwo)
        .click(appPage.addButtonTwo)
        .takeScreenshot()
})

test('Enter 2 options and validate the poll question, poll options and click on first radio button option ', async (t) => {
    await t.wait(1000)
    const questionInput = await appPage.questionInput
    await t.click(questionInput)
        .typeText(questionInput, appPage.testData.question)
        .click(appPage.optionInputOne)
        .typeText(appPage.optionInputOne, appPage.testData.optionOne)
        .click(appPage.addButtonOne)
        .typeText(appPage.optionInputTwo, appPage.testData.optionTwo)
        .click(appPage.addButtonTwo)
        .expect(appPage.pollQuestion.innerText)
        .eql(appPage.testData.question)
        .expect(appPage.radioOptionOne.exists).ok()
        .click(appPage.radioOptionOne)
        .expect(appPage.radioOptionTwo.exists).ok()
        .takeScreenshot()
})

test('Enter the question and vote for one option and check the result in chart ', async (t) => {
    await t.wait(1000)
    const questionInput = await appPage.questionInput
    await t.click(questionInput)
        .typeText(questionInput, appPage.testData.question)
        .click(appPage.optionInputOne)
        .typeText(appPage.optionInputOne, appPage.testData.optionOne)
        .click(appPage.addButtonOne)
        .typeText(appPage.optionInputTwo, appPage.testData.optionTwo)
        .click(appPage.addButtonTwo)
        .click(appPage.radioOptionOne)
        .expect(appPage.voteButton.exists).ok()
        .click(appPage.voteButton)
        .expect(appPage.chartDisplay.exists).ok()
        .takeScreenshot()
})
