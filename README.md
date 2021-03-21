# Homework_4_Web_APIs
Creating a Code Quiz:
A timed coding quiz with multiple-choice questions.

## Getting Started Early!
This week's homework is starting from scratch. Learning from the last 'from scratch' homework, thought it would be best to as early as I can.
We have finished only one class this week, second class on Web APIs is tonight. So I thought i could at least make my plan of attack and set up my HTML and CSS. As they will be pretty easy to get out of the way. 


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

Lets break down each section

### Coding Quiz Home Page

![Homepage of the Coding quiz](./Assets/Mock-Up/Coding_Quiz.JPG)

### Questions

![Question on](Assets\Mock-Up\Questions.JPG)

![Question on](Assets\Mock-Up\Questions_3.JPG)

![Question on](Assets\Mock-Up\Questions_2.JPG)

![Question on](Assets\Mock-Up\Questions_4.JPG)

![Question on](Assets\Mock-Up\Questions_5.JPG)


### Highscore


![Once you have finished you add in your initials](Assets\Mock-Up\All_done.JPG)

![Highscore Leader Board](Assets\Mock-Up\Highscore_page.JPG)

![Clearing the leader board option](Assets\Mock-Up\Higscore_clear.JPG)


## The Breakdown

HTML:
- pretty basic layout, will add as I go.

Css
- Colours needed are purple, light purple, white and grey. Otherwise I will add as I go.

JavaScript:
Main focus! 

The timer: 
- A timer that counts down from 75
- Top right-hand corner. 
- homepage set time as 0
- starts when start quiz button is clicked
- the score is the time you have left.

Highscores: 
- Score is the time you have left.
- 'view highscore' is set in top left hand-corner, inline with timer
- 'view highscore' is there through out the questions
- Once the quiz is done, it takes your final score and you enter your initials
- Highscore page comes up with a list of highscores
- Format is #. AB - timeLeft
- You have two buttons
    - go back to main page
    - clear highscores
- 'view highscores' to have link to highscore page

Buttons:
- Start Quiz
- Answers
- Submit
- Go Back
- Clear Highscores



## How to tackle this:

### Homepage
First focus is the homepage - Coding Quiz Challenge. Here we have the title, description of the game and the start button.
For this I made a section that was dedicated to the homepage. I put a class of info so I could center info on the page in a set width to resemble the mockup picture. 

To complete the page, I need to set up my navbar (I originally had this as header but changed it to nav bar to make more sense). This has the timer and highscore. Leaving the link for highscores now as I haven't created that page. The timer I can do, as I can make sure it is working on this page then set it to 0. We are wanting to do a count down from 75. I have got this working! Yay! Now to set it to 0 and carry on. In Javascript, I added a hide class to this page when the game starts. THis way it disappears and the questions can come up in it's place.

### Questions and Answers

I started by just focusing on the words question and my answer buttons to come up. In my html, I have put this in it's own section. I think that it what I will do for each part of the quiz (Highscore page and all done page). I created a class 'container' for this. To help maintain the center layout like in the mock ups. Once I had the questions and answers appearing (not exactly like the layout. I need to come back to CSS and change buttons (currently taking whole length) and title. But it will do for now.) I went into javascript to make the questions and answers appear in it's place.

I did this by making an array of my questions, choices and correct answer. I also added a random sort to the questions, so when you are taking the quiz, the questions appear in a random order each time.

I have noticed that my timer is wrong. When I click the start button, it stays on 0 for one second then counts down from 74. I need to fix this bug, but right now I need to carry on and focus on what needs to be done. Small things like this can easily be fixed later.

For the longest time I had the questions showing (random order) but not the answers! Either they would come up with my default (answer 1, answer 2 and so on) or not show at all! So that was great feeling when I fixed that! But the next problem was how does my code know to pick up on the right or wrong answer? Creating function for both correct and wrong answer buttons was the key to this! This way when the user clicked the wrong answer, it would minus ten seconds and moved to the next question.
Oh! I came back to this a bit later on and added my correct and wrong text to pop up. I added a time for this to stay up as well, 2 seconds.

## All Done!
Time to enter those initials! 
I used a form tag in the html to do enter the initials. I had a label for my text of Enter Initials so that you could click that and it will take you to the text box. Or just click on the text box would do the trick too. I came back later and added a max length to this of 2 and converted text to uppercase. THis means that the user can't put in more than two characters and will convert automatically to uppercase if that user did not already do so. While writing this, I realised that I need to add an if statement if the user tried to put numbers in. 




My List of small fixes! Don't forget Kate!
- Answer Buttons need to be smaller and on the left. - Done
- Timer not starting straight away.
- No numbers in initials!








## Next time

Improvements I would make:
Have a range of different questions so you could quiz yourself
- would randomly choose 10 questions each time out of a larger selection.
Another option would be having a few different areas
- quiz on HTML, CSS, JavaScript.
If I have time, perhaps I will make this too. Would be a good way to study and also have a refresher quiz!

