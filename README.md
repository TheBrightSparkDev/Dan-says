`python3 -m http.server`
# [Dan says](https://thebrightsparkdev.github.io/Dan-says/)

Link to site [Dan says](https://thebrightsparkdev.github.io/Dan-says/)

Dan Says is a fun Simon says game with a comedic twist I tried to add as much of my own personality and humour into this game in order to help people feel
connected to the developer this game stands as an example that sometimes even a simple concept can be made fun by more than just the gameplay but with funny
quips and messages. It also incorporates a contact page where poeple can let me know how to improve the game and let me know of any bugs. I created the game so it can be used on multiple devices and using different controls also. 

<img src="assets/images/readme-images/responsive-readme.png" alt= "image of the website on various devices to show responsiveness" width="100%">

desktop and background credit: [pixabay](https://pixabay.com/photos/apple-computer-desk-workspace-1868496/)

## Features 

### The first menu

- __Main menu__

  - The main menu contains a few options for the user to change the theme, make suggestions and access the tutorial.
  - these are to make the user feel more comfortable, make the game better and be involved and finally to show the user how to play the game.

![Main menu](assets/images/readme-images/nav-readme.PNG)

- __Game screen__

  -  This is where users will be most of the time unless they dont do so well... It's the main game! 
  -  Users will hopefully find this fun and repeatable and will hopefully look forward to seeing the funny messages that pop up at the end as they vary depending on how well you do.

![Game screen](assets/images/readme-images/about-me-readme.PNG)

- __Tutorial__

  - This is where users will be able to learn to play the game it works by darkening the background and highlighting the correct answer and explaining why it's the right answer.
  - I wanted this to be short and sweet so that users don't get bored before actually playing the game I spent alot of time making sure I could explain the game in as little time as I could. 

![Tutorial](assets/images/readme-images/comics-section-home-readme.PNG)

- __Pause menu__

  - I wanted this to be very easy to access so made it so that the user can activate the pause menu by clicking anywhere other than the game zone as this is the most intuitive way I could make it work without adding additional buttons and keeping the games design simple and visually apealling.
  - This allows users to either change themes during the game or quit or just take a break if they are on a highscore they don't want to lose.

![Pause menu](assets/images/readme-images/shop-section-home-readme.PNG)

- __Game over!__ 

  - This is the page you see whenever you lose it includes options for users to look at other highscores set by either myself during development or fictional characters or play again also shows the score they obtained during the last playthrough it also includes a funny message to say how well or not so well the user has done. 
  - This will hopefully drive the user to want to do better and beat the fictional characters or just play again whatever motivates them!.

![Game Over](assets/images/readme-images/footer-readme.PNG)

- __Highscores__

  - This is a self explanatory section really just shows the highscores and shows the users score on the board if they did well enough to make it up there.
  - This is to motivate users to push to beat the fictional characters or even my highscore (dev). 

![Highscores](assets/images/readme-images/comics-page-readme.PNG)

- __Suggestions__
  
  - This is a form where users can add their thoughts about the game and let me know what they would change or tell me about any bugs that I may have missed. It also allows me to reply to them and interact with them afterwards if they leave their email.
  - This is in my opinion essential for every game as sometimes the developer doesn't realise the real reason their game is used. 

![Suggestions](assets/images/readme-images/shop-page-readme.PNG)

# Wireframes
### Initial sketches
<img src="assets/images/readme-images/initial-design-sketches.jpg" alt="The initial sketches I made back when the project was in it's earliest stages" width="50%">

[interactive wireframe](https://xd.adobe.com/view/5fb66345-d813-4c0c-a24d-a927b8edc2d9-0ae5/)

This is the best way to get a good idea of how the game plays and was the first thing I made when designing the webpage.

## Javaplanning
This is a copy of exactly what I wrote on a piece of paper when I was initially planning the different functions there will likely be lots of mistakes and changes but in the goal of being honest I wanted to let you see my origional plans for each function and how the game evolved from initial designs.

### images of JavaPlanning! 

I wasnt lying! I really did write java code on paper... 

# challenges overcome 
- timer(){} this was a tough one to figure out and googling didnt help much since most places said about Thread.sleep which was throwing an error at me! I did find a site where someone had created a stopwatch and spotted they used timeout to call the function again and this is what inspired me to try it myself as origionally it was a for loop which was running through instantly nomatter what I did.
- I needed to change what the middle button does when clicked so had to remove the eventListener to start the game.
# Technology used
## wireframes
- adobe XD
- good old pen and paper
## Frameworks
- I used github to store the repository and version management
- I used gitpod for editing the code and for posting to github 
## Libraries
- I used [bootstrap](https://getbootstrap.com/) for the comic individual pages
- I used [Font Awesome](https://fontawesome.com/) for the icons at the bottom of the index, comics, shop pages.
- I used [Jquery]() to make javascript easier to write.
- I used [Emailjs]() to make the suggestion page work.

# user story 

The users will be people just looking to relax and play something simple and fun. No minimum requirements and accessible from all devices too so users will be all kinds of people on all kinds of devices.

### Features Left to Implement

- difficulty settings easy, medium, hard
- lives

## Testing 

### Issues during development 


### Validator Testing 

- HTML
  - No errors were returned when using the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when using the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs



## Deployment

I was using github as the repository for the whole project so when I wanted to create a live page it was very easy to do.

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
  - Make sure to select root before saving.

- The site was deployed to GitHub pages. 

The live link can be found here - [Dan says](https://thebrightsparkdev.github.io/Dan-says/)


## Credits 

Below are the sources of all the media and content 

### No parts of the code on this website are copy and pasted 

- If I was struggling with anything I would simply go to website that I have linked below and read up on how to use the specific code and then I would simply use the code correctly. 
- all websites used are linked below:
- [google fonts](https://fonts.google.com/)
- Code Institute mentor also sent me a link to a template of a README.md to create a structure I changed everything and kept structure apart from the steps to deploy as there isn't anything to change added a bit about making sure it was root as docs brings up an error message for me saying failed to build.

### Content 



### Media

### JavaScript help
- [Helped create the timer](https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak)
- [how I learned about remove Event listener](https://stackoverflow.com/questions/4402287/javascript-remove-event-listener)
 # More coming soon! 
 
 ### Follow me on github to stay upto date and message me for project ideas/pitches always ready to work with someone.
 
 # devDiary
 # 12/01/2022
 ## things that need fixing/ implementing from this point onwards:
 ### The timer needs to reset without calling checkAnswer 
 #### how I did it 
 ### The timer needs to be able to be stopped 
 #### how I did it
 ### The pause function will be tricky to implement if timer is unstoppable 
 #### how I did it
 ### The gameOver screen needs to be created 
 #### how I did it
 ### The scoring system needs to be implemented
 #### how I did it
 ### The colorblind theme needs to be implemented
 #### how I did it
 ### The quit button needs to be implemented
 #### how I did it
 ### The leaderboard needs to be implemented
 #### how i did it
 ### The play Again button needs to be implemented
 #### how i did it
 ### The game needs to reset on correct answer
 #### how i did it
 
