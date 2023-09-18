# Authentication application from using phone number

## Introduction

In this project, I build an authentication system for user to input their phone number and for the full-stack system to verify the access code. Here I use React.js to create the UI where the user can input a 10-digit phone number then a 6-digit access code to verify their account. To process the inputs, I use Express.js to construct the back end for two purposes: generating a random access code to that phone number and authenticating the access code from the user.


## Approach

My approach is to connect both the front-end and the back-end by using React.js and Express.js. My future goal is to incorporate Google FireBase as the medium.


## Installation 

- React is installed as `PhoneAuthentication` folder.

- Express API is installed as the `api` folder.

- Package `nodemon` is installed to debug on the back-end server:
  ```
  npm install -g nodemon
  ```

## Procedure
### Front-end

- To start the front-end, I run the built-in command 
  ```
  npm start
  ```

- Here I created the front-end on `./src` folder with the React file `App.js`. This file initiates the UI interface for both inputs `Phone Number` and `Access Code`. The URL to access the front-end after we started React is `http://localhost:3000/`.


### Back-end

- To run the back-end, I do the following:

  ```
  cd api
  npm start
  ```

- After that, the back-end server is generated, and the JSON database `users` is located in the URL `http://localhost:9000/users`.


## Demo

- To recapture, we run the default port for front-end on the URL `http://localhost:3000/`, 
  and run the default one for the back-end on the URL `http://localhost:9000/`. To see and track the stored inputs, we run    `http://localhost:9000/users/`.

- Here we are ready to pass in the front-end a phone number. We only need to input `Phone Number` first to have the function
  `CreateNewAccessCode` generates a random 6-digits code and adds it to the database. For example, the default JSON for 
  `users` database is:

   ```
   {"success":true,"users":[{"phone":"1234567890","code":"763839"}]}
   ```


- For example, we submit `Phone Number` as `8098098098` to the front-end, then the backend generates the `AccessCode` as `207765`.
  The `users` database then generates the following JSON.

  ```
  {"phone":"8098098098","code":"207765"}
  ```



- If we submit `Phone Number` as `8098098098` again, the databases update the newly generated code.

  ```
  {"phone":"8098098098","code":"286796"}
  ```



- Now, we input the same `Phone Number` with an `Access Code` we saw from the database. As the phone number is `8098098098`, 
  if we input the code `670964` then the UI returns `True`.

  ![image](https://github.com/tungnguyen1234/PhoneAuthentication/assets/79737931/a0d153c7-5ccc-459f-a06d-eac9a3f3f7f5)



- Then `Phone Number = 8098098098` is assigned to an empty string "".

  ```
  {"phone":"8098098098","code":""}
  ```



- If the `Access Code` is incorrect, the UI returns `False`.

 ![image](https://github.com/tungnguyen1234/PhoneAuthentication/assets/79737931/ccb4dbf0-5155-4902-a865-193b5f9b01db)



