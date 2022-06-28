# Coding challenge on creating a phone number and access code application


My approach is to connect the React front-end with the Express back-end to process phone number data.
For this problem, I was not able to finish adding Firebase into the front-end and back-end, but 
I could only create a `users` database in the back-end URL server. 


## Available Scripts

- In the project directory, I run the following to install a skeleton of React.

  `npx create-react-app my-app`

  `cd my-app`


- To run the front-end, I do the following from `my-app` folder:
  
  `npm start`

- Here the folder `my-app` has been changed to `coding_challenge`. However, the implementation is the same so I temporarily keep as `my-app`.

### Front-end
- Here I created the front-end on `./src` folder with the React `App.js`. In the front-end, 
  I created two class inputs: `Phone Number` and `Access Code`, and I retrieve them 
  from two React files: `PhoneNumber.js` and `AccessCode.js`. I also added the validating conditions
  in `validate.js`to make sure the server enforces `Phone Number` to be an integer and to have a maximum length 10 
  to be able to fetch into the back-end. For the `Access Code` input,
  I also only allow integer and maximum length as 6, and the same fetching method follows. Furthermore, 
  my settings in `this.state` guarantee that the submit button is allowed only when I input the phone number first.
  The default port for the front-end is `3000`, with the URL `http://localhost:3000/`.

- Finally, I fetched the data by the `handleSubmit` key to pass the data to the back-end URL server and 
  processed the data with two back-end functions: `CreateNewAccessCode` and `ValidateAccessCode`. This
  is convenient since the front-end generates the POST functions automatically and adds the random code with
  the `Phone Number` into the database.


### Back-end
- To create the back-end, I installed Express API from `coding-challenge` folder. 

  `npm install api --save`

- I also installed `nodemon` to help with debugging on the back-end server:

  `npm install -g nodemon`

- Then I adjusted the default port to `9000` in directory `./my-app/api/bin/www`. After that, I added `testAPI.js` into `./api/routes`
  folder to test whether the api runs correctly. In the back-end, I utilized the `users.js` from directory `./my-app/api/routes`, 
  followed by port `9000` to create the JSON database `users` with the URL as `http://localhost:9000/users`.

- To run the back-end, I do the following:

  `cd api`

  `npm start`


### Running together
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

