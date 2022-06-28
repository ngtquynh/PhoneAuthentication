# Coding challenge on creating a phone number and access code application

## Introduction:

In this project, I build an authentication system for user to input their phone number and for the full-stack system to verify the access code. Here I use React.js to create the UI where the user can input a 10-digit phone number then a 6-digit access code to verify their account. To process the inputs, I use Express.js to construct the back end for two purposes: generating a random access code to that phone number and authenticating the access code from the user.


## Approach:

My approach is to connect both the front-end and the back-end by using Google FireBase. Since I was not able to add the Firebase database by the deadline, I created a database named `users` in the back-end URL server instead. 


## Installation 

- In the project directory, I run the following to install a skeleton of React.

  `npx create-react-app my-app`

  `cd my-app`


### Front-end

- To run the front-end, I do the following from `my-app` folder:
  
  `npm start`

- Here the folder `my-app` has been changed to `coding_challenge`.


- Here I created the front-end on `./src` folder with the React file `App.js`. This file initiates the UI interface for both inputs `Phone Number` and `Access Code`. The URL to access the front-end after we started React is `http://localhost:3000/`.


### Back-end
- To create the back-end, I installed Express API from `coding-challenge` folder. 

  `npm install api --save`

- I also installed `nodemon` to help with debugging on the back-end server:

  `npm install -g nodemon`

- To run the back-end, I do the following:

  `cd api`

  `npm start`

- After that, the back-end server is generated, and the JSON database `users` is located in the URL `http://localhost:9000/users`.




### Method
- To recapture, we run the default port for front-end on the URL `http://localhost:3000/`, 
  and run the default one for the back-end on the URL `http://localhost:9000/` as two different servers.
  However, to check the database input, we use  `http://localhost:9000/users/` instead to keep track 
  of how the function changes.

- Here we are ready to pass in the front-end a phone number. We only need to input `Phone Number` first to have the function
  `CreateNewAccessCode` generates a random 6-digits code and adds it to the database. For example, the default data for 
  `users` database is:

   ``{"success":true,"users":[{"phone":"1234567890","code":"763839"}]}``


- Then let's say we submit `Phone Number` as `8098098098` to the front-end, then the backend generates the `AccessCode` as `321942`.
  If we open the `users` URL, we would see the following JSON data in `http://localhost:9000/users/`.

  ``{"success":true,"users":[{"phone":"1234567890","code":"763839"},{"phone":"8098098098","code":"321942"}]}``



- Now, if I submit `Phone Number` as `8098098098` again, the databases update the newly generated code.

  ``{"success":true,"users":[{"phone":"1234567890","code":"763839"},{"phone":"8098098098","code":"670964"}]}``



- Now, we input the same `Phone Number` with an `Access Code` we saw from the database. Let's say it is for 
  number `8098098098` and the code is `670964`. The front-end will generate `{success: true}`.

  ``https://github.com/tungnguyen1234/coding_challenge/blob/main/True.png``



- Then the `Phone Number` will be assigned to an empty string like the following in `http://localhost:9000/users/`.

  ``{"success":true,"users":[{"phone":"1234567890","code":"763839"},{"phone":"8098098098","code":""}]}``



- If the `Access Code` does not match the one in the database, the front-end will generate `{success: false}`.

  ``https://github.com/tungnguyen1234/coding_challenge/blob/main/False.png`` 

