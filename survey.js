const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q1 = "\nWhat's your name? Nicknames are also acceptable :)\n";
const q2 = "What's an activity you like doing?\n";
const q3 = "What do you listen to while doing that?\n";
const q4 = "Which meal is your favourite (eg: dinner, brunch, etc.)\n";
const q5 = "What's your favourite thing to eat for that meal?\n";
const q6 = "Which sport is your absolute favourite?\n";
const q7 = "What is your superpower? In a few words, tell us what you are amazing at!\n";

rl.question(q1, (answer) => {
  console.log(`Alrighty then, hey ${answer}. \n`);
  let answer1 = answer;

  rl.question(q2, (answer) => {
    console.log(`Alrighty, I will store: ${answer}.\n`);
    let answer2 = answer;

    rl.question(q3, (answer) => {
      console.log(`Sounds cool, I'll remember ${answer} for later.\n`);
      let answer3 = answer;

      rl.question(q4, (answer) => {
        console.log(`Yea ${answer} is a good one.\n`);
        let answer4 = answer;

        rl.question(q5, (answer) => {
          console.log(`Yum, ${answer}.\n`);
          let answer5 = answer;

          rl.question(q6, (answer) => {
            console.log(`I can get into a little ${answer}. One more\n`);
            let answer6 = answer;

            rl.question(q7, (answer) => {
              console.log(`\nDamn straight! Let's see then....\nHere is a profile I just generated for you on the fly -----\n`);
              let answer7 = answer;

              console.log(`${answer1} loves listening to ${answer3} whilst ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
///lol, i'm sure there's a more elegant structure but it functions properly




