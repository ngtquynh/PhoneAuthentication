# Coding challenge on creating a phone number and access code application


My approach is to connect the React front-end with the Express back-end to process phone number data.
For this problem, I was not able to finish adding Firebase into the front-end and back-end, but 
I could only create a `users` database in the back-end url server. 


## Available Scripts

- In the project directory, I run the following to install a skeletion of React.

`npx create-react-app my-app`

`cd my-app`


- To run the front-end, I do the following from `my-app` folder:
`npm start`

### Front-end
- Here I created the front-end on `./src` folder with the React `App.js`. In the front-end, 
  I created two class inputs: `Phone Number` and `Access Code`, and I retrieve them 
  from two React files: `PhoneNumber.js` and `AccessCode.js`. I also added the validating conditions
  in `validate.js`to make sure the server enforces `Phone Number` to be an integer and to have maximum length 10 
  to be able to fetch into the back-end. For the `Access Code` input,
  I also only allow integer and maximum length as 6, and the same fetching method follows. Furthermore, 
  my settings in `this.state` guarantees that the submit button is allowed only when I input the phone-number first.
  The default port for front-end is `3000`, with the url `http://localhost:3000/`.

- Finally, I fetched the data by the `handleSubmit` key to pass the data to the back-end url server and 
  processed the data with two back-end functions: `CreateNewAccessCode` and `ValidateAccessCode`. This
  is convenient since the front-end generates the POST functions automatically and adds the random code with
  the `Phone Number` into the database.


### Back-end
- To create the back-end, I installed Express API from `my-app` folder. 

`npm install api --save`

- I also installed `nodemon` to help with debugging on the back-end server:

`npm install -g nodemon`

- Then I adjusted the default port to `9000` in directory `.my-app/api/bin/www`. After that, I added `testAPI.js` into `api.routes`
  folder to test whether the api run correctly. In the back-end, I utilized the `users.js` from directory `.my-app/api/routes`, 
  following by port `9000` to create the JSON database `users` with the url as `http://localhost:9000/users`.

- To run the back-end, I do the following when I reached `my-app`. 

`cd api`

`npm start`


### Running together
- To recapture, we run the default port for front-end on the url `http://localhost:3000/`, 
  and run the default one for back-end on the url `http://localhost:9000/` as two different servers.
  However, to check the database input, we use  `http://localhost:9000/users/` instead to keep track 
  of how the function changes.

- Here we are ready to pass in the front-end a phone. We only need to input `Phone Number` first to have the function
  `CreateNewAccessCode` generate a random 6-digits code and add to the database. For example, the default data for 
  `users` database is:

`{"success":true,"users":[{"phone":"1234567890","code":"763839"}]}`

- Then let's say we submit `Phone Number` as `9798798789` to the front-end, then the backend generates the `AccessCode` as `321942`.
  If we open the `users` url, we would see the following JSON data in `http://localhost:9000/users/`.

`{"success":true,"users":[{"phone":"1234567890","code":"763839"},{"phone":"8098098098","code":"321942"}]}`

- Now, if I submit `Phone Number` as `9798798789` again, the databases updates the new generated code.

`{"success":true,"users":[{"phone":"1234567890","code":"763839"},{"phone":"8098098098","code":"670964"}]}`

- Now, we input our same `Phone Number` with an `Access Code` we saw from the database. Let's say it is for 
 number `8098098098` and the code is `670964`. The front-end will generate `{success: true}`.

https://github.com/tungnguyen1234/coding_challenge/blob/main/True.png

- Then the `Phone Number` will be assigned to an empty string as the following in `http://localhost:9000/users/`.

`{"success":true,"users":[{"phone":"1234567890","code":"763839"},{"phone":"8098098098","code":""}]}`

- If the `Access Code` does not match from the one in the database, the front-end will generate `{success: false}`.

https://github.com/tungnguyen1234/coding_challenge/blob/main/False.png

