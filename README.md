

* rock D Johnson image from https://theprofile.substack.com/
* rules image from https://puzzlewocky.com/
* png icons for game frompngwing.com
* question mark from pexels.com https://www.pexels.com/photo/question-mark-on-chalk-board-356079/
* individual images of RPSLS from git hub user https://github.com/DavidSamir/Rock-Paper-Scissors-Lizard-Spock
* question mark from : https://blog.stageagent.com/how-to-take-an-adjustment/question-mark/


# Rock Paper Scissors Lizard Spock game
Your traditional Rock Paper Scissors game taken to the next level, by adding 2 new variables taken from the popular show "The Big Bang Theory". 

Now the Rock Paper Scissors Lizard Spock game will provide to the user:

1. A fair competition based truly on random results
2. Chance to pass time by playing a game of chance
3. #/# insert a third reason
![mockup](to be added)
Visit the Deployed website [here](to be added)
## Table of Content
- [User Stories](#user-stories)
- [Existing Features](#existing-features)
  - [Navigation Bar and Footer](#navigation-bar-and-footer)
  - [Landing Page](#landing-page)
  - [Mr. Pancake Page](#mr-pancake-page)
  - [Gallery Page](#gallery-page)
  - [Locations Page](#locations-page)
  - [Contact Us Page](#contact-us-page)
  - [Thank You Page](#thank-you-page)
- [Features Left To Implement](#features-left-to-implement)
- [Typografy and Color Scheme](#typografy-and-color-scheme)
- [Wireframes](#wireframes)
- [Technology](#technology)
- [Testing](#testing)
  - [Code Validation - HTML and CSS Validation](#code-validation---html-and-css-validation)
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
    - To be able to find out the rukes of the game without using external resources.
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
    - Nav bar holds abreviation of the games ful name and a stylised button that brings up rulls on a pop-up window.
- __Footer:__
    - Footer contains full name of the game and is ised to give the site a better visual look.
## Landing Page
- __Game Area:__
    - Holds the:
        - Score area - where the current score is kept
        - Chosen card area - where the user's and computers chosen cards are shown
        - Interactive text area - instructs user and provides feedback on choice made - win, lose or draw
        - Card area - holding 5 cards for the user to chose and play from 

<details>
  <summary>Landing Page screenshot</summary>
 ![Landing Page screenshot](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/s-home-page.jpg)
</details>
<br>
<details>
  <summary>Pop-up page screenshot</summary>
 ![Pop-up page screenshot](#to add screenshot)
</details>
<br>

## Features left to implement
- __Main Page__
    - Add in~~~~####

## Typografy and color scheme
### Design
Simple and crisp design
 
---------------------------------------------------------------------------------------------------------------------------------------------- 
- __Fonts__:
    - Merriweather - used as a base font on the whole site
    - Lato - used for most headers and to give a bit of visual diversity
  - __Color Scheme__:  
    - Primary color:
    ![Primary color](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/color-primary.jpg)
    - Secondary color:
    ![Secondary color](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/color-secondary.jpg)
    - Hero image cover text background color with opacity of .7:
    ![Third color](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/color-third.jpg)
    - Additional colors:
        - #fff - white - used for Hero image cover text and for Signup forms header
        - rgb(0, 0, 0) - black - with various opacity levels for transparent backgrounds


### 6.  <!--Remove line-->

## Wireframes

@@ -348,7 +345,7 @@ The design of the page is aimed towards warm colors and fonts to create pleasant
- [GitPod](https://www.gitpod.io/)
    - To use as a platform for coding

-[Chrome Lighthouse extensions](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
- [Chrome Lighthouse extensions](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)
    - For testing the performance of the site

## Testing
Testing was carried out by using every device that was available to the project developer, getting project developers friends to test the functionality on their devices and developer tools like Chrome DevTools and Lighthouse extension.
### Code Validation - HTML and CSS validation
 - __W3C Markup Validator__
    - On the first try validator reported 4 errors spanning across all pages:
        - First two were connected and by adding a missed /div they were cleared
        - Then a stray /i and a stray /a end tags were removed
    - There was an additional error on the "Contact Us" page:
        - The identical id values occurred during the multiplying of the code lines, error was cleared by assigning unique id's to two lines
<details>
  <summary>HTML Error Message</summary>
 ![HTML Error Message](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/html_validator_1st_try.jpg) 
</details>
<details>
  <summary>HTML Pass Message</summary>
   ![HTML Pass Message](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/html_validator_pass.jpg) 
</details>
- __W3C CSS Validator__
    - On the first try validator reported 3 errors:
        - Two text-align errors with duplicating center value, cleared by removing the duplicating value
        - Last error was a value error on Google embedded maps where % cannot be used, fixed by applying a large enough value to cover the width needed
<details>
  <summary>CSS Error Message</summary>
   ![CSS Error Message](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/css_validator_1st_try.jpg) 
</details>
<details>
  <summary>CSS Pass Message</summary>
   ![CSS Pass Message](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/css_validator_pass.jpg) 
</details>       
<br>
### Test cases 
<br>
- __User Cases__
- To easily understand the purpose of the website.
    - When the Landing page opens cover text with "Dog walks in Nuneaton where anyone can join" is visible providing the user with information about the purpose of the website
<br>
<details>
  <summary>Purpose screenshot</summary>
   ![Purpose screensho](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/purpose-website.jpg) 
</details>  
<br>
- To clearly see what sections I can explore in the website.
    - On the landing page the Navigation bar provides a summary of the site
<br>
- To easily reach each section.
    - Navigation bar is always visible at the top at the website making it easy to navigate trough pages
<details>
  <summary>Navigation bar screenshot</summary>
   ![Navigation bar small](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/navigation-bar-small.jpg)
   ![Navigation bar large](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/navigation-bar-large.jpg) 
   
</details>  
<br>
- To understand who Mr. Pancake is.
    - Using navigation bar moving to section Mr. Pancake, window with the required information opens 
<details>
  <summary>Mr. Pancake page screenshot</summary>
   ![Mr. Pancake page screenshot](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/who-mr-pancake.jpg) 
</details> 
<br> 
- To easily get to meet up times and locations information.
    - On landing page, scroll past the reasons for joining a walk, a list of times and locations is available
    - On landing page clicking on Locations in Navigation bar a page with meet up information and embedded Google maps opens
 <details>
  <summary>Home page screenshot</summary>
   ![Home page](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/home-page-meet-up-bar.jpg) 
</details> 
<details>
  <summary>Locations page screenshot</summary>
   ![Locations page](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/locations-page.jpg) 
</details> 
<br>    
- To be able to contact organizers in case of questions.
    - Using Navigation bar, click on  "Contact Us" the Contact page opens with a contact form available
<details>
  <summary>Contact Us screenshot</summary>
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/contact-us-page.jpg) 
</details> 
<br> 
- To receive a confirmation on successful contact for submission
    - Clicking on "Contact Us" on Navigation bar opens a form that, when successfully is filled in, opens a page with a "Thank you for contacting us!" message displayed
<details>
  <summary>Thank you screenshot</summary>
   ![Thank you](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/thank-you-screenshot.JPG) 
</details> 
<br> 
### General Testing
    
<details>
  <summary>Launching and responsiveness</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  |Copy url from GitHub and paste it in a browser and hit enter | Browser should load index.html as the landing page | Pass |
  |Opening every page (except thank you page) | Hero image goes in 4 second zoom-out effect  | Pass |
  |Scale up the window | The content should be responsive at 900px and 1200px width marks | Pass |
  |Scale down the window | The content should be responsive at 900px and 375px width marks | Pass |
  |Scale down under 375px width | The layout should be responsive and fit in a single column without horizontal scroll bar until reaching 311px on all pages | Pass |
</details>
<details>
  <summary>Landing page</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  | Click on all nav items | Each nav item takes user to the respective page on the site | Pass |
  | Changing size above 899px | Ethos section moves from a single column styling to 2 column x 2 row styling for the text | Pass |
  | Changing size above 1199px | Meetup times section moves from a single column styling to single row styling for the text | Pass |
  |Clicking on all footer icons| Each social platform icon opens their respective website in a new tab | Pass |
  
</details>
<details>
  <summary>Mr. Pancake page</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  | Click on all nav items | Each nav item takes user to the respective page on the site | Pass |
  | Changing size above 899px | Ethos section moves from a single column styling to 2 column x 2 row styling for the text | Pass |
  |Clicking on all footer icons| Each social platform icon opens their respective website in a new tab | Pass |
  
</details>
<details>
  <summary>Gallery page</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  | Click on all nav items | Each nav item takes user to the respective page on the site | Pass |
  | Changing size above 374px | Gallery section moves from a single column styling to 2 columns | Pass |
  | Changing size above 899px | Gallery section moves from 2 column styling to 3 columns | Pass |
  | Changing size above 1199px | Gallery section moves from 3 column styling to 4 columns | Pass |
  | Clicking on all footer icons | Each social platform icon opens their respective website in a new tab | Pass |
  
</details>
<details>
  <summary>Location page</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  | Click on all nav items | Each nav item takes user to the respective page on the site | Pass |
  | Changing size below 900px | Meetup rows have text area to map size in ratio 60% to 40% | Pass |
  | Changing size above 899px | Meetup rows have text area to map size in ratio 70% to 30% | Pass |
  | Changing size above 1199px | Meetup rows have text area to map size in ratio 75% to 25% | Pass |
  | Clicking on all footer icons | Each social platform icon opens their respective website in a new tab | Pass |
  
</details>
<details>
  <summary>Contact Us page</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  | Click on all nav items | Each nav item takes user to the respective page on the site | Pass |
  | Changing size below 375px | Width of the "Thank you message" goes to 70% width | Pass |
  | Changing size above 374px | Width of the "Thank you message" goes to 80% width | Pass |
  | Changing size above 899px | Width of the "Thank you message" width goes to auto | Pass |
  | Clicking on all footer icons | Each social platform icon opens their respective website in a new tab | Pass 
  
</details>
<details>
  <summary>Thank you page</summary>
  |Action | Expected behaviour | Result|
  |-------|--------------------|-------|
  | Click on all nav items | Each nav item takes user to the respective page on the site | Pass |
  | Clicking on submit button without filling in First Name | Error message "Please fill out this field" pops up and no progression | Pass |
  | Clicking on submit button without filling in Last Name | Error message "Please fill out this field" pops up and no progression | Pass |
  | Clicking on submit button without filling in Email Address | Error message "Please fill out this field" pops up and no progression | Pass |
  | Clicking on submit button three mandatory field filled in | User is taken to "Thank you" page | Pass |
  | Clicking on all footer icons | Each social platform icon opens their respective website in a new tab | Pass |
  
</details>
  
### Fixed bugs
- __Logo not showing on the published page__
    - In the page header the path to the logo image started like - "/assets/..." so I changed it to "assets/..." and the issue was fixed
- __Thank you page background image overlapping the nav bar for screen sizes over 900px__
    - Created a new set of styling in "@media screen and (min-width: 900px)" to counter the issue - fixed
 ### Not fixed bugs
 - __Logo on screens below 900px does not respond to clicks - shortcut to Home page__
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
    - Min responsive screen size tested - 304px
    - Max responsive screen size tested - 2560px
### Performance
- Performance tested using Chrome Lighthouse extension.
    - Lower performance scores mainly due to image file type, size and embedded maps from Google
<details>
  <summary>Performance results</summary>
- Landing page:
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/p-m-landing.jpg)
- Mr. Pancake page:
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/p-m-mr-pancake.jpg)
- Gallery:    
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/p-m-gallery.jpg)
- Locations page: 
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/p-m-locations.jpg)
- Contact Us page: 
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/p-m-contacts.jpg)
- Thank You page: 
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/p-m-thank-you.jpg) 
</details> 
<br >
## Deployment
- __Via GitHub__
    - Open a web browser
    - Go to address https://github.com/
    - Log in my GitHub account
    - On the left side a selection of recent repositories will be visible, click on "
SkyForgerUK/Walk_Mr_Pancake_Project_1"
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
   ![Contact Us](https://github.com/SkyForgerUK/Walk_Mr_Pancake_Project_1/blob/main/docs/publish-screenshot.jpg)
  
</details> 
<br>   
## Credits
### Content
- All content written by the project developer, except of:
  - The Dachshund breed summary which was taken from [dogtime.com](https://dogtime.com/dog-breeds/dachshund#/slide/1)
  - The Nuneaton town information which was taken from [Wikipedia](https://en.wikipedia.org/wiki/Nuneaton)
- The icons in footer and in main section on Home Page and Mr. Pancake page are taken from [Font Awesome](https://fontawesome.com/)
- Fonts 'Lato' and 'Merriweather' where taken from [Google Fonts](https://fonts.google.com/)
- For help with the code [w3schools](https://www.w3schools.com/) was used 
### Media
- Header Puppy Logo was taken from [KindPng](kindpng.com)
- All the images in the Gallery taken from project developers personal collection
- All images on the site are project developers personal images, except of:
    - Background image for Locations and Home page meet up times taken from [Wikimedia](https://commons.wikimedia.org/wiki/File:Cotswolds_Panorama_Fields.jpg)
    - Background image for Contact Us page taken from [FreeImages](https://www.freeimages.com/)