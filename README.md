
# Rock Paper Scissors  game
Traditional Rock Paper Scissors game providing unlimited fun in simple format. 

The Rock Paper Scissors game will provide to the user:

1. A fair competition based truly on random results
2. Way to pass time by playing a game of chance
3. Chance to try his/her luck

![mockup](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/mockup.jpg)

Visit the Deployed website [here](https://skyforgeruk.github.io/Project_2_RPSSL/)
## Table of Content
- [User Stories](#user-stories)
- [Existing Features](#existing-features)
  - [Navigation Bar and Footer](#navigation-bar-and-footer)
  - [Landing Page](#landing-page)
- [Features Left To Implement](#features-left-to-implement)
- [Typography and Color Scheme](#typografy-and-color-scheme)
- [Wireframes](#wireframes)
- [Technology](#technology)
- [Testing](#testing)
  - [Code Validation - HTML, CSS and JavaScript Validation](#code-validation---html,-css-and-javascript-validation)
  - [Test Cases](#test-cases)
  - [General Testing](#general-testing)
  - [Fixed Bugs](#fixed-bugs)
  - [Not Fixed Bugs](#not-fixed-bugs)
  - [Supported Screens, Browsers and Performance](#supported-screens-browsers-and-performance)
  - [Performance](#performance)
- [Deployment](#deployment)
- [Credits](#credits)
<br>

## User Stories 

- As a user I want:
    - To easily understand the purpose of the website.
    - To be able to find out the rules of the game without using external resources.
    - To easily access the rules section and close it at any time.
    - To be able to easly operate the game.
    - To easily chose one of the options.
    - To be able to see the result of the round.
    - To be able to see the score.

## Existing Features
There is one Home page including:

- Landing page
- Pop-up window explaining the rules of the game

### Navigation Bar and Footer
Both Nav bar and footer are responsive to the size of the screen being used to read the website.
- __Navigation Bar:__
    - Nav bar holds abbreviation of the game's full name and a stylised button that brings up rules contained in a pop-up window.
- __Footer:__
    - Footer contains full name of the game and is used to give the site a better overall look.
### Landing Page
- __Game Area:__
    - Holds the:
        - Score area - where the current score is kept
        - Chosen card area - where the user's and computers chosen cards are shown
        - Interactive text area - instructs user and provides feedback on choice made - win, lose or draw
        - Card area - holding 3 cards for the user to chose and play from 

<details>
  <summary>Landing Page screenshot</summary>

 ![Landing Page screenshot](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/screenshot-main.jpg)
</details>
<br>
<details>
  <summary>Pop-up page screenshot</summary>

 ![Pop-up page screenshot](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/pop-up-screen.jpg)
</details>
<br>

## Features left to implement
- __Main Page__
    - Add Lizard and Spock expansion.

## Typography and color scheme

### Design

Simple, easy to use design
 

- __Fonts__:
    - Silkscreen - used as a base font for the site
    - Peralta - used for the pop-up rule window

- __Color Scheme__:  
  
    - Primary color:

    ![Primary color](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/primary-color.jpg)
    - Secondary color:

    ![Secondary color](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/secondary-color.jpg)
    - Website Background color:

    ![Third color](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/background-color.jpg)

    - Additional colors:
        - Font color - Azure
        - Pop-up screen background color - Azure

## Wireframes

<details>

  <summary>Desktop</summary>

   ![Desktop Wireframes](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/project2-desktop.jpg) 
   ![Desktop Wireframes](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/project2-desktop-pop-up.jpg)

</details>

<details>

  <summary>Mobile</summary>

   ![Mobile Wireframes](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/project2-mobile.jpg) 
   ![Mobile Wireframes](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/project2-mobile-pop-up.jpg) 

</details>

<details>

  <summary>Wireframes PDF</summary>
  
   [Wireframes PDF](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/project2-full.pdf) 

</details>

## Technology

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS) 
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) 

### Software and Framework Libraries
- [Balsamiq Wireframes](https://balsamiq.com/)
    - To create wireframe design outlay
- [Google Fonts](https://fonts.google.com/)
    - To acquire 'Silkscreen' and 'Peralta' font to use on the site
- [Clean css](https://www.cleancss.com/css-beautify/) 
    - CSS formatting tool
- [Color Hex color codes](https://www.color-hex.com/)
    - For choosing the colors for the whole site
- [Font Awesome](https://fontawesome.com/)
    - For adding icons to Home and Mr. Pancake pages
- [W3C Markup Validator](https://validator.w3.org/) 
    - To validate the HTML code across all pages
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - To validate the CSS
- [JSHint](https://jshint.com/)
    - To validate the JavaScript
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
   - To review code and test it during the development process
- [Am I Responsive? mock-up generator](https://ui.dev/)
    - To generate a mock-up image for the Readme file
- [GitHub](https://github.com/)
    - To store the project and host the finished site
- [GitPod](https://www.gitpod.io/)
    - To use as a platform for coding
- [Chrome Lighthouse extensions](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
    - For testing the performance of the site

## Testing
Testing was carried out by project developer using every device at his disposal, getting project developers friends to test the functionality on their devices and developer tools like Chrome DevTools and Lighthouse extension.
### Code Validation - HTML, CSS and JavaScript validation
 - __W3C Markup Validator__
    - On the first try validator reported 1 warning :
        - Section without a h1 was used and was fixed by changing it to div instead
<details>
  <summary>HTML Warning Message</summary>

 ![HTML Error Message](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/html-warning.jpg) 
</details>
<details>
  <summary>HTML Pass Message</summary>

   ![HTML Pass Message](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/html-ok.jpg) 
</details>

- __W3C CSS Validator__
    - On the first try validator reported 1 errors:
        - An incorrect padding-bottom value was used, as the line was not necessary, error was fixed by deleting it
<details>
  <summary>CSS Error Message</summary>

   ![CSS Error Message](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/css-error.jpg) 
</details>
<details>
  <summary>CSS Pass Message</summary>

   ![CSS Pass Message](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/css-ok.jpg) 
</details>  

- __JSHint__
    - On the first try JSHint reported 27 warnings, but no errors:
        
<details>
  <summary>JSHint Warning Messages</summary>

   ![JSHint Warning Messages](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/js-warning.jpg) 
</details>

<br>

### Test cases 
<br>

- __User Cases__
- To easily understand the purpose of the website.
    - When the Landing page opens the whole content of the site is visible. The footer holds the full name of the game and the familiar symbols of "Rock Paper Scissors" are on display.
<br>
<details>
  <summary>Purpose screenshot</summary>

   ![Purpose](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/screenshot-main.jpg) 

</details>  
<br>

- To be able to find out the rules of the game without using external resources.
    - At the top right of the page is a clickable button that brings up a pop-up screen which explains the rules in written format and with a help of a diagram.
<br>

- To easily access the rules section and close it at any time.
    - The pop-up button is visible at all time, to be reached easily and when open the user can either click on the "x" in the top right corner of the pop-up or click anywhere outside the pop-up.
<details>

  <summary>Pop-up screenshot</summary>

   ![Pop-up](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/pop-up-screen.jpg)
 
   
</details>  
<br>

- To be able to easily operate the game.
    - The clickable buttons allow for an easy use of the game. Only mouse or mobile screen is needed top play the game. 
<details>

  <summary>Game area screenshot</summary>

   ![Game area](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/game-area-screenshot.jpg) 

</details> 
<br> 

- To easily chose one of the options..
    - Three clickable cards holding the familiar "Rock Paper Scissors" symbols are easily visible under the dynamic text area. 

 <details>
  <summary>Three cards screenshot</summary>

   ![Three cards](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/3cards-area-screenshot.jpg) 
</details> 

<br>    

- To be able to see the result of the round.
    - In the middle of the game area there are 2 cards that change respective to users choice and computers randomly generated result showing the results. additionally under the cards there is a dynamic text area informing of users choice and the result of the round.
<details>
  <summary>Results area screenshot</summary>

   ![Results area](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/result-area-screenshot.jpg) 
</details> 

<br> 

- To be able to see the score.
    - Above the results area the user's and computers current score.
<details>
  <summary>Score area screenshot</summary>

   ![Score area](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/score-area-screenshot.jpg) 
</details> 
<br> 

### General Testing
    
<details>
  <summary>Launching and responsiveness</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  |Copy url from GitHub and paste it in a browser and hit enter | Browser should load index.html as the landing page | Pass |
  |Scale up the window | The content should be responsive at 1500px and 2200px width marks | Pass |
  |Scale down the window | The content should be responsive at 1500px and 808px width marks | Pass |
  |Scale down under 320px width | The layout should be responsive and fit in a single column without horizontal scroll bar and all text contained until reaching 238px| Pass |
</details>
<details>
  <summary>Landing page</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  | Click on Rules button| A pop-up should open explaining the game's rules and have a visual representation | Pass |
  | Click on "x" or anywhere outside of Pop-up window | Pop-up window should close| Pass |
  | Click on one of the 3 cards | Question cards should change to the chosen one for the player and responsively for computer, result of both choices should be shown in text area and score should update| Pass |
  
  
</details>

  
### Fixed bugs
- __Score Area text too big for screen__
    - Text was going over screen boundaries for screen sizes with width below 
    350px - used @media to style it so text is contained.

 ### Not fixed bugs
 - __On tall and narrow devices the game area does not fill the screen length enough for an aesthetic look__
    - This bug will be fixed after project submission   
  <br>  

### Supported Screens, Browsers and Performance
### Browsers
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
### Screens
- Samsung A52s
- Huawei P20 Pro
- Huawei P30 Mate
- iPhone 13 Pro
- iPhone 11
- Screen virtual compatibility tested using Google DevTools:
    - Min responsive screen size tested - 238px
    - Max responsive screen size tested - 2560px
### Performance
- Performance tested using Chrome Lighthouse extension.
    - All areas over scored over 90. 
<details>
  <summary>Performance results</summary>

- Landing page:

   ![Landing page](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/lighthouse.jpg)
</details>

<br >

## Deployment
- __Via GitHub__
    - Open a web browser
    - Go to address https://github.com/
    - Log in my GitHub account
    - On the left side a selection of recent repositories will be visible, click on "SkyForgerUK/Project_2_RPSSL"
    - Click on settings button
    - Click on "Pages" button
    - In "Branch" field click on "None" button and select "main" from drop down menu
    - Click "Save" button
    - Wait 1-4 minutes
    - Refresh page
    - A link at the top part of the screen will become available
    - use this link to access the, now published, website
<details>

  <summary>Link Page screenshot</summary>

   ![Contact Us](https://github.com/SkyForgerUK/Project_2_RPSSL/blob/main/docs/project2-publish-page-screenshot.jpg)
  
</details> 
<br>   

## Credits
### Content
- All content created by the project developer, except of:
  - For JS code for modal pop-up button a video from YouTube user "Web Dev Simplified" was followed [YouTube](https://www.youtube.com/watch?v=MBaw_6cPmAw&t=1s)
- Fonts 'Silkscreen' and 'Peralta' where taken from [Google Fonts](https://fonts.google.com/)
- For help with the code [w3schools](https://www.w3schools.com/) was used 
### Media
- Rules image which was taken from [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors)
- The question mark image was taken from [Pexels.com](https://www.pexels.com/photo/question-mark-on-chalk-board-356079/)
- The 3 images used for choice cards were taken from [GitHub user DavidSamir](https://github.com/DavidSamir/Rock-Paper-Scissors-Lizard-Spock)
- The 3 images used for Result area were taken from [rockpaperscissors30a](https://www.rockpaperscissors30a.com/)


