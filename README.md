# Closing Circle Question Generator

> In EDA, everyday would end up with a closing circle with the most simple but yet unthinkable questions to end the day. Well, for this project, the team wanted to help the EDA Teaching team by creating a Closing Circle Question Generator!'

![alt text](https://github.com/pohutukawa-2020/GLTE/blob/dff111da58a49a95b279b2ba6f3f9eaa83510dec/server/public/glte.jpeg)


## Setup

To get started, clone this repo and then:

```
cd GLTE
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```
If you have errors when starting to migrate tables; go to the code and delete SQLite3 file

You can find the server running on [http://localhost:3000](http://localhost:3000).

## REST API 
NOTE: We wanted to use a resful API to be able to generate random nouns, however we were unable to find one which would work. In saying so, we decided to create a son file used to store our data to be used instead.


### CSS 
Bulma will be used in this project. Please refer to the documentation https://bulma.io/documentation/
