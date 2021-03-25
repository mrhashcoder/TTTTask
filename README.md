# TTTTask
String Encription-Decryption React-Node Web App

## String Encription AlgoRithm :
      1. Basically as we are using only small case Alphbets i found out that each char can be represented using only 5 bits
      2. but we usually use 8 bits to represent any charecter and from here i got idea for encryption
      3. Here is what I am doing. I created a dictionary for small case alphabets each represented by a 5 bits unique binary string
      4. and chaged the whole input String to a binary string using that dictionary. Assume no of chars in string  = n
      5. now we have binary string of size n * 5. now assuming 6 consucative bits represent a charecter
      6. and using another dictionary having 64 keys we can convert this hashed string to another small string
      7. Using Same logic we can do reverse Encoding
      8. visit files => ttt-backend => uttils => encode.js | decode.js to view dictionaries and algorithm code

###### Algorithm Capacity
      Each 6 charecter string will be converted to a 5 charecter string
      so Compression Percentage => 5 / 6 * 100 => 83%      
      


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

<img src = "https://res.cloudinary.com/mrhashcoder/image/upload/v1616674602/pjimage_1_s8knhl.jpg" />
