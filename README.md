# Weather-Application
Gives you current weather details of a searched location. I will soon change it's front end with React.

Hosted on: https://chaitanya-weather-application.herokuapp.com/

Environment Details: 

Nodejs, Express, hbs.

Dev Dependencies/Commands:

npm init -y
npm i express request
npm i nodemon --save-dev
npm run dev(dev script set as "nodemon src/app.js -e js,hbs" in package.json)


heroku deployment:

heroku login
heroku keys:add
heroku create chaitanya-weather-application
git push heroku master




