const readline = require('readline');
const paragraphContent = {}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  paragraphContent["name"] = answer1;
  rl.question("What's an activity you like doing?", (answer2) => {
    paragraphContent["activity"] = answer2;
    rl.question("What do you listen to while doing that?", (answer3) => {
      paragraphContent["music"] = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        paragraphContent["favoriteMeal"] = answer4;
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          paragraphContent["favoriteFood"] = answer5;
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            paragraphContent["sport"] = answer6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!)", (answer7) => {
              paragraphContent["superpower"] = answer7;
              console.log(`Hi! I am ${paragraphContent.name}.I like ${paragraphContent.activity}. I love listening to ${paragraphContent.music} and My favorite meal is ${paragraphContent.favoriteMeal}.My favorite food is ${paragraphContent.favoriteFood}.I love ${paragraphContent.sport}. And, my superpower is ${paragraphContent.superpower}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});