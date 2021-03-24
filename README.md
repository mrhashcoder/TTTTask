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
     
      
       

