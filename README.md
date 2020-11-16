# Joe's Galactic Age Calendar

#### This application utilizes a test driven environment to build and test objects and prototypes contained within a class. 

#### By Joseph Nero 

### Description

This application utilizes a test driven environment to build and test objects and prototypes contained within a class. It also uses import and export statements to use the contents of a class across files. In particular, this application will calculate a user's age in mercury, venus, mars, and jupiter years. It will also tell you how many years you have remaining on each planet(including earth) as measured  against the average U.S. life expectancy. Test specs can be revealed by clicking on Expand Specs below : 

<details>
<summary>Expand Specs</summary>

| Test | Input | Output |
| :--------------------------- | :--------------------------------- | :---------------- | 
| Age |||
| Should correctly initialize an instance of the Age object | let newAge = new Age() | typeof(newAge) = object| 
| Should correctly create an instance of the Age object with input provided to determine the starting age | let newAge = new Age(20) | newAge.startingAge = 20 | 
| mercuryYears |||
| Should correctly return a user's age in mercury years (A mercury year is .24 earth years) | newAge.startingAge = 20 | newAge.mercuryAge = 20/.24 = 83.33 | 
| venusYears |||
| Should correctly return a user's age in venus years (A venus year is .64 earth years) | newAge.startingAge = 20 | newAge.venusAge = 20/.64 = 31.25 | 
| marsYears |||
| Should correctly return a user's age in mars years (A mars year is 1.88 earth years) | newAge.startingAge = 20 | newAge.marsAge = 20/1.88 = 10.64 | 
| jupiterYears |||
| Should correctly return a user's age in jupiter years (A jupiter year is 11.86 earth years) | newAge.startingAge = 20 | newAge.jupiterAge = 20/11.86 = 1.69 | 
| remainingYears |||
| Should correctly return a user's remaining years as calculated with average life expectancy in the U.S. | newAge.startingAge = 20 | newAge.remainingTime = 78.54 - 20 = 58.54 | 
| If a user has surpassed the average life expectancy, Should correctly return the number of years they have lived past the average life expectancy | newAge.startingAge = 80.54 | newAge.remainingTime = 80.54 - 78.54 = 2 | 
| lifeExpectancyBoolean |||
| If the user's age is less than the average U.S. life expectancy, should return a true boolean value | newAge.startingAge = 20 | newAge.ageBoolean = true | 
| If the user's age is greater than the average U.S. life expectancy, should return a false boolean value | newAge.startingAge = 80 | newAge.ageBoolean = false | 
| lifeExpectancyPrint |||
| If the user's age is less than the average U.S. life expectancy, should apply text to a specified ID | ID = '#selector' , newAge.startingAge = 20| $(ID).text() = Your remaining time on earth: 59 Years | 
| If the user's age is greater than the average U.S. life expectancy, should apply different text to a specified ID | ID = '#selector', newAge.startingAge = 82 | $(ID).text() = WARNING => SUBJECT IS PASSED PROGRAM DETERMINED LIFE SPAN BY 2 YEARS | 
| remainingMercuryYears |||
| Should correctly return a user's remaining years left in mercury years | newAge.startingAge = 20 | newAge.remainingMercuryTime = 58.54/.24 = 243.92 | 
| remainingVenusYears |||
| Should correctly return a user's remaining years left in venus years | newAge.startingAge = 20 | newAge.remainingVenusTime = 58.54/.64 = 91.47 | 
| remainingMarsYears |||
| Should correctly return a user's remaining years left in mars years | newAge.startingAge = 20 | newAge.remainingMarsTime = 58.54/1.88 = 31.14 | 
| remainingJupiterYears |||
| Should correctly return a user's remaining years left in jupiter years | newAge.startingAge = 20 | newAge.remainingJupiterTime = 58.54/11.86 = 4.94 | 

</details>

## Setup/Installation Requirements
#### If you have difficulty following any of the steps/instructions listed below, please contact me at josephnero111@gmail.com 

#### Software requirements 

1. A web browser to view the website. I recommend Google Chrome.
2. Git Bash (or another terminal program) & Git.  
    - To clone the repository from Github using git commands in the terminal, you need a terminal program & Git. For Windows OS, I recommend the Git Bash terminal program. Installing Git Bash will also install Git. 
3. VSCode (or another code editor)
    - To view/edit this code, you need a code editor. I recommend VSCode. 
4. Node.js 
    - Node.js is a javascript runtime environment that you need to use npm, the preferred package manager for this application. You can download it at [this link](https://nodejs.org/en/download/)
5. Detailed instructions to install Git Bash & VSCode can be found in the Setup/Installation Requirements section of the README for [this repo.](https://github.com/joey3001/first-friday-project)

#### To view this website online please use the following GH-Pages link: 

[Joe's Galactic Age Calculator](https://joey3001.github.io/GalacticCalculatorWebPage/)

#### Please follow these instructions to clone this project using git commands in the terminal. 

1. Open your terminal program and use the cd command to navigate to the directory in which you wish to clone this project. 
2. Use [this link](https://github.com/joey3001/Galactic-Calculator) go to this project's repository on github. Click on the green button labeled "code" towards the right side of the page's center. Click on the HTTPS option and copy the presented URL. 
3. Use the following command in your terminal program to clone the repo :

            git clone https://github.com/joey3001/Galactic-Calculator.git

#### Follow these instructions to use npm to install the project's required packages, test the project's functions, and open the project in your default browser. 

1. Make sure you've downloaded Node.js. If you haven't, you can download it at [this link](https://nodejs.org/en/download/)
2. Use the cd command to enter the cloned directory. Once you are within the cloned directory, enter the following command into your terminal to install the project's required packages : 

            npm install

3. Enter the following command into your terminal to build the project using the npm package manager : 

            npm run build

4. Enter the following command into your terminal to test the project's functions & see the percentage of lines that are covered by a test : 

            npm test 

5. Use the cd command to enter the newly created dist directory. You should only have to enter the following command : 

            cd dist

6. Once you are within the dist directory, Enter the following command into your terminal to open the project in your default browser : 

            start index.html

#### Follow these instructions to view the code in the VSCode editor using commands in the terminal. 

1. Navigate to the project's root directory with the cd command if needed. If you're following this guide step-by-step, you should only have to enter the following command into your terminal : 

            cd ..

2. Once you are within the project's root directory, enter the following command into your terminal program to view all of the project's code in VSCode : 

            code . 

#### To download a file containing the contents of this repository to a location of your choice, please follow these instructions. 

1. Use a web browser to go to the repository webpage at [this link.](https://github.com/joey3001/Galactic-Calculator)
2. Click on the green button labeled "code" towards the right side of the page's center. In the drop-down menu that opens, click on the button labeled "Download Zip."
3. Once your download is complete, open the zipped file. Click on the button labeled "Extract All" at the top of your file explorer. 
4. Choose the location in which you want to extract the files, and navigate to that location once this process is complete. 
5. Enter the directory and click on the index.html file to launch the project in your default web browser. 

## Known Bugs

1. For readability, the project rounds results that are displayed to the user to the nearest whole number. 
2. Only whole numbers can be entered for the user's age. 

## Support and contact details

If you have an issue, reach out to me at josephnero111@gmail.com

## Technologies Used

  * HTML 
  * CSS
    - Bootstrap
  * Javascript
    - Jquery 
  * Node.js
  * VSCode 
  * Git
  * Github 
  * Git Bash


### License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 Joseph Nero 
