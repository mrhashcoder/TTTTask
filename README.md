# TTTTask
String Encription-Decryption React-Node Web App

## String Encription AlgoRithm :
      1. Updated Algorithm is working on base system
      2. as input Set have 26 charecters and ouput set have 62 charecter we are just chaging value of base of input
      3. firstly convert input to 10 base system using this formula if number is 1235
            # Res = 1 * pow(26 , 0) + 2 * pow(26 , 1) + 3 * pow(26 , 2) + 5 * pow(26 , 3)
      4. Then Recived Value will be converted to 62 base system
      5. and then we return the output
      6. To Handle The so big values I'm Using big-integer library
      7. to see the code visit ttt-backend => utils =>  newDeocde.js | newEncode.js 
      
            
##### You can see code for algo at ttt-backend => utills => encode.js | decode.js

## Deployment 

##### Source Code View In Browser : https://github1s.com/mrhashcoder/TTTTask

##### React App is Deployed Here : https://ttt-hashcoder.web.app/

##### Backend Express App is Deployed Here : https://ttt-mrhashcoder.herokuapp.com/
      1. Endpoint : '/encode' 
                  Method : POST
                  body : {
                    input : "String for Encription"
                  }
                  
      2. Endpoint : '/decode'
                  Method : POST
                  body : {
                    input : "String for Decryption"
                  }
      3. Endpoint : '/'
                  Method : GET
                  Decription : "for Confirmation"
     
      
       


## Components Of Code

#### React-App
      1. A Simple React Having 2 states for 2 string 
      2. I have used Axios for Api Calling
      3. used little bit of css and bootstrap 
      4. I have used firebase to deploy REact App.
      5. Use of useState Hook is also Done in Project
  
#### Express-App
      1. A simple Express app providing 3 Routes
      2. 2 Post Routes for String and one get route for confirmation
      3. used Express Framework for create node application
      4. I used Heroku to deploy this express app because api deployed over firebase wasn't responding due to some reasons
#### Test-Case & Result
1. helloworldtt   =>   ORa3XdFY5z
2. random         =>   iBo3M
3. workedgameedshaped =>  s6KiDMBhCDkcDyD


####

<img src = "https://res.cloudinary.com/mrhashcoder/image/upload/v1616868565/pjimage_2_rmwhm1.jpg" />
