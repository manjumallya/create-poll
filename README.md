# create-poll
This project is built on VueJS framework making use of state management features of VueX store to interact between different components.

The automation suite used is Testcafe framework to run end to end tests. 

The application is deployed at following location - https://happy-franklin-7614c8.netlify.app/ using netlify app which deployes the application whenever the code is pushed.
# Description of the project

The application is a single page application which is divided in three sections. On the first section, the
user can create a poll with up to 10 options. In the central one, the user can vote by selecting one of
the options and pressing the "vote" button. On the right, the chart will update based on the
questions created and the votes that each question got.

# Use cases
• As the owner, I want to change my poll question.

• As the owner, I want to add, edit or remove the options of my poll.

• As the owner, I want to reset the whole form, including answers.

• As the user, I want to see the UI refresh automatically when something changes.

• As the respondent, I want to send several answers.

• As the respondent, I want to see the changes in real time.


# Non functional requirements

• All fields have a limit of 80 characters.

• When the limit is reached, fields should be disabled.

• There should be always at least 2 options.

• The user can vote as many times as possible.

• The chart needs to adapt to the changes in the amount of answers or labels without missing
values.

• The reset button should reset the whole UI: question, options and answers.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### To run end to end tests using Chrome browser
```
npm run ft
```
### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Issues noticed in app
1. On deleting any option (except the last added option) add button is getting disabled 

2. On changing the option , radio options are updated but voting results doesn't reset with the latest options 

3. On changing the question after results are updated the chart, question is not getting updated in the chart section

4. If for example 2 same options are submitted for voting, on click of radio button for any of these options, 2 radio buttons gets selected
