# FriendFinder


# Friend Finder - Node and Express Servers

### Overview

The following is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from users' surveys, then compare the answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

Express is use to handle routing. 
I'm still need to deploy the app to Heroku so other users can fill it out.


### Before You Begin

### Instructions

1. The survey have 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file is requirering the basic npm packages we've used in class: `express`, `body-parser` and `path`.

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` that  display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. The `apiRoutes.js` file contain two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This is use to handle incoming survey results. This route  also is use to handle the compatibility logic. 

5. The application's data is inside of `app/data/friends.js` as an array of objects. Each of these objects roughly follow the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```
