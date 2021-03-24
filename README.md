# TTTTask
String Encription-Decryption React-Node Web App

## String Encription AlgoRithm :
1. Basically we are storing count of repeated charecter with it.
2. Like for String 'aaaabbbccccddd' we will return => 'a4b3c4d3' which shows what does it means
3. if a charecter appears once then we do not put its count (1) as that is unnessaary

##### You can see code for algo at ttt-backend => utills => encode.js | decode.js

## Deployment 

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
 1. AAAABBBBCCCCEEDD    =>    A4B4C3E2D2
 2. hhhheeehhhqqqq      =>    h4e3h3q4
 3. helllllooooworllldddd =>  hel4o4worl3d4
####

<img src = "https://res.cloudinary.com/mrhashcoder/image/upload/v1616613002/pjimage_j4t0wa.jpg" />
