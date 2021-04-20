# Coding Quiz
Creating a Code Quiz:
A timed coding quiz with multiple-choice questions.

Live Link: https://katemccoll.github.io/Coding_Quiz/

Technologies Used: HTML, CSS, JavaScript


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

<img src="./Assets/Mock-Up/Coding_Quiz.JPG">

### Questions

<img src="Assets\Mock-Up\Questions.JPG">

<img src="Assets\Mock-Up\Questions_3.JPG">

<img src="Assets\Mock-Up\Questions_2.JPG">

<img src="Assets\Mock-Up\Questions_4.JPG">

<img src="Assets\Mock-Up\Questions_5.JPG">


### Highscore


<img src="Assets\Mock-Up\All_done.JPG">

<img src="Assets\Mock-Up\Highscore_page.JPG">

<img src="Assets\Mock-Up\Higscore_clear.JPG">


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
<img src="Assets\Images\Hide Answers.JPG">
This image here is just to show me using the hide class. I was pretty happy with this. I was then able to add and remove this class in JavaScript. This made it easy to go between my different sections.

### Questions and Answers

I started by just focusing on the words question and my answer buttons to come up. In my html, I have put this in it's own section. I think that it what I will do for each part of the quiz (Highscore page and all done page). I created a class 'container' for this. To help maintain the center layout like in the mock ups. Once I had the questions and answers appearing (not exactly like the layout. I need to come back to CSS and change buttons (currently taking whole length - see image below) and title. But it will do for now.) I went into javascript to make the questions and answers appear in it's place.

<img src="./Assets\Images\Basic HTML.JPG"> 
<img src="Assets\Images\Format.JPG"> 

I did this by making an array of my questions, choices and correct answer. I also added a random sort to the questions, so when you are taking the quiz, the questions appear in a random order each time.

I have noticed that my timer is wrong. When I click the start button, it stays on 0 for one second then counts down from 74. I need to fix this bug, but right now I need to carry on and focus on what needs to be done. Small things like this can easily be fixed later.


<img src="Assets\Images\Answers not showing.JPG"> 

For the longest time I had the questions showing (random order) but not the answers! Either they would come up with my default (answer 1, answer 2 and so on) or not show at all! So that was great feeling when I fixed that! But the next problem was how does my code know to pick up on the right or wrong answer? Creating function for both correct and wrong answer buttons was the key to this! This way when the user clicked the wrong answer, it would minus ten seconds and moved to the next question.
Oh! I came back to this a bit later on and added my correct and wrong text to pop up. I added a time for this to stay up as well, 2 seconds.

### Navbar
As you can see in the image above, my nav is not right. The titles are ontop of each other. I ended up having to play around with this but got there after figuring which flex to use! I used chrome console a bit during this homework to figure out why things weren't working. This was extremely helpful and feeling more confident using it now.

<img src="Assets\Images\Header Issue when corrected page.JPG"> 
This image above, man! I add this in here rather than later because for most of the quiz, I had it perfectly sitting on top. Like I stated above. But then when I was making my content sit correctly, it randomly changed the nav to this! Also because when I said I played around with it to get it right. It took me some time but when I solved it, I was so happy with myself! So for it to then muck up later on! It hurt, my lovely bit of code betrayed me! But thats okay, I knew exactly where to look and fixed it straight away! 


## All Done!

Time to enter those initials! 
I used a form tag in the html to do enter the initials. I had a label for my text of Enter Initials so that you could click that and it will take you to the text box. Or just click on the text box would do the trick too. I came back later and added a max length to this of 2 and converted text to uppercase. This means that the user can't put in more than two characters and will convert automatically to uppercase if that user did not already do so. While writing this, I realised that I need to add something to stop people from putting numbers in. - I have come back to this and after some googling, I saw you could put an only text into the html. Did that, it comes up with a message when you try to put a number in. Yay!

## Highscores Page
This I struggled a bit with, trying to figure out the best way to display the scores. I was able to get them to appear fine, but they needed to be ordered. Also I wanted to add a top ten score so you could keep track of the user and the classmates. Looking at the different methods and sorts, i was able to complete this. THe highscore goes from highest to lowest and will cut off any score after ten. If if doesn't make the top ten, it will not appear.

## Highscore page buttons
There are two buttons here: Go back and Clear highscores. Go back was just making sure it would go back to the start. And clear highscores, had to make sure it cleared the highscores. I also went back and make sure that my view highscores on the nav bar worked too. I just made it into a link so once clicked, it would go back to the highscore page.

<img src="Assets\Images\Alldone adding buttons.JPG"> 


## Make it look pretty
Here I did the final touches to make sure it resembled the mock-up. So making sure I had the right colours, text to be aligned correctly, buttons the right size and my correct and wrong text to come up with a line above in grey. 

## Time to clean!
The last day was going over things I had missed or things not working correctly. See below to see what that was! 
Lastly it was time to clean up my code. There was a lot of trail and error trying to figure out what the best thing to do was. I had a lot of attempts at different things, tried to figure out why it didn't work and figure out what is needed to make it work. I found I was a bit all over the place, adding things I thought I needed that I ended up not using at all but was scattered throughout my code at this point. It was a lot of going through and checking if each line actually needed to be there and what it did. I had a lot of variables in my global scoop that I had only used once. I moved these into the functions where I was using it and made these into local scoop instead. 

My List of small fixes! Don't forget Kate!
- Answer Buttons need to be smaller and on the left. - Done
- Timer not starting straight away. - Done
- No numbers in initials! - Done
- media queries - done


### Reflection
I think I over used google, and I know, you are probably thinking that using google a lot would be a good thing. But I think I read a lot and watched different coders do different projects that I got myself all confused and overloaded in information. Also confused myself with the basics as I was focusing on the harder stuff. I ended up going through my code line by line, just making sure I knew exactly what code i was adding in and making sure it was there for a reason. For example: I had a lot of functions and variables around win and lose but after re reading the readme and thinking what exactly I needed, I realised that I didn't need all of that. That I only needed one or two as my win or lose really depended on the timer and not how many a user got correct or wrong. 

# Next time

Improvements I would make:
Have a range of different questions so you could quiz yourself
- would randomly choose 10 questions each time out of a larger selection.
Another option would be having a few different areas
- quiz on HTML, CSS, JavaScript.
If I have time in the next few weeks, perhaps I will make this too. Would be a good way to study and also have a refresher quiz!

# Results

When the page is loaded, you are taken to the homepage. Here you have the title and information on the quiz. 
Once you click the start button, the timer will start and you have 75 seconds to complete the quiz.

<img src="Assets\Results\HomePage.JPG">

You will then be presented with your first question out of five. They are presented in a random order, showing one at a time. 
There are four choices for you to choose from. They are presented as buttons, so when you choose what you think is the right answer, click the button.

If you are correct, a message below the answers will pop up saying correct and will move you to the next answer.
If you are wrong, a message below will pop up saying wrong. Ten seconds will be removed from your time and you will move on to the next question.

This will keep happening until you answer all questions or run out of time.

<img src= "Assets\Results\MultiChoiceQuestion.JPG">

If you answer all questions within the 75 seconds, you will be take you to a new page where it will tell you the score and ask you to enter your initials. The score is the time you have left. The faster you are, the high score you will end up having. When you enter your initials, you only have two letters to fill out. If you try to use more, it won't show. Also if you try to add numbers, a message will pop up it will ask you to match what is requested - Initials. If you try to submit without writing anything, the submit button will not work.

<img src="Assets\Results\Initials.JPG">

Once you have pressed the submit button, it will take you to the Highscores page. Here it will covert your initials to upper Case and display it with the rest of the highscores. 

Note: If you ended up not answering any of the question in the time given, it will take you straight to this page too.


As you can see in the image below, the scores have been ordered, highest at the top, lowest at the bottom. I have added a top ten scores which wasn't required but I thought that it might be a good idea. This will encourage students to try be in that top ten. Or if you are quizzing yourself, then you don't end up having to scroll down to see all your scores. Also, no point in that, that doesn't help as you want to focus on your highscores.

<img src="Assets\Results\highscores.JPG">

Below the scores are two buttons. 
- Clear Highscores: this will clear all of the highscores and you can start again.
- Go Back: this will take you back to the homepage and you can start the quiz again.

Lastly you will see that in your navbar, there is your timer and 'View Highscores'. If you click 'View Highscores' at any point (at the homepage, during the quiz, all done page), this will take you straight the to highscore page.
 
This is my Coding Quiz Challenge, I hope you enjoyed it!

Note: I added media queries in my CSS too. So that means if you were to to use it on the Tablet or phone, it would still look correct and not bunched together.

For any questions or more information, please feel free to email me.
