# Joe's Galactic Age Calendar

#### todo

#### By Joseph Nero 

### Description

todo

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
| Should correctly return a user's age in mars years (A mars year is 1.88 earth years) | newAge.startingAge = 20 | newAge.marsAge = 20/.64 = 31.25 | 
| jupiterYears |||
| Should correctly return a user's age in jupiter years (A jupiter year is 11.86 earth years) | newAge.startingAge = 20 | newAge.jupiterAge = 11.86 | 
| remainingYears |||
| Should correctly return a users remaining years as calculated with average life expectancy in the US | newAge.startingAge = 20 | newAge.remainingTime = 78.54 - 20 = 58.54 | 
| If a user has surpassed the average life expectancy, Should correctly return the number of years they have lived past the average life expectancy | newAge.startingAge = 80.54 | newAge.remainingTime = 80.54 - 78.54 = 2 | 
| remainingMercuryYears |||
| Should correctly return a users remaining years left in mercury years | newAge.startingAge = 20 | newAge.remainingMercuryTime = 58.54/.24 = 243.92 | 
| remainingVenusYears |||
| Should correctly return a users remaining years left in venus years | newAge.startingAge = 20 | newAge.remainingMercuryTime = 58.54/.64 = 91.47 | 


## Setup/Installation Requirements
#### If you have difficulty following any of the steps/instructions listed below, please contact me at josephnero111@gmail.com 

#### Software requirements 

1. A web browser to view the website. I recommend Google Chrome.
2. Git Bash (or another terminal program) & Git.  
    - To clone the repository from Github using git commands in the terminal, you need a terminal program & Git. For Windows OS, I recommend the Git Bash terminal program. Installing Git Bash will also install Git. 
3. VSCode (or another code editor)
    - To view/edit this code, you need a code editor. I recommend VSCode. 
4. Detailed instructions to install Git Bash & VSCode can be found in the Setup/Installation Requirements section of the README for [this repo.](https://github.com/joey3001/first-friday-project)

#### To view this website online please use the following GH-Pages link: 

[Joe's Galactic Age Calculator](todo)

#### To view this website locally, please follow these instructions to clone and open this project using git commands in the terminal. 

1. Open your terminal program and use the CD command to navigate to the directory in which you wish to clone this project. 
2. Use [this link](todo) go to this project's repository on github. Click on the green button labeled "code" towards the right side of the page's center. Click on the HTTPS option and copy the presented URL. 
3. Use the following command in your terminal program to clone the repo :

            git clone todo

7. Use the CD command to enter the cloned directory. Once you are within the cloned directory, enter the following command into your terminal to open the page in your default browser : 

            start index.html 

#### Follow these instructions to view the code in the VSCode editor using commands in the terminal. 

1. Navigate to the project directory with the CD command if needed. If you're following this guide step-by-step, you should already be there. 
2. Once you are within the project directory, enter the following command into your terminal program to view all of the project's code in VSCode : 

            code . 

#### To download a file containing the contents of this repository to a location of your choice, please follow these instructions. 

1. Use a web browser to go to the repository webpage at [this link.](todo)
2. Click on the green button labeled "code" towards the right side of the page's center. In the drop-down menu that opens, click on the button labeled "Download Zip."
3. Once your download is complete, open the zipped file. Click on the button labeled "Extract All" at the top of your file explorer. 
4. Choose the location in which you want to extract the files, and navigate to that location once this process is complete. 
5. Enter the directory and click on the index.html file to launch the project in your default web browser. 

## Known Bugs

There are no known bugs at this time. 

## Support and contact details

If you have an issue, reach out to me at josephnero111@gmail.com

## Technologies Used

  * HTML 
  * CSS
    - Bootstrap
  * Javascript
    - Jquery 
  * VSCode 
  * Git
  * Github 
  * Git Bash

### License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 Joseph Nero 
