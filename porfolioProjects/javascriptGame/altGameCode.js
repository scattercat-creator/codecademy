// use three pieces of data
// ex: str + str + str

const youOrMe = ['You are ', 'I am '];

const midWord = ['loved', 'successful', 'okay', 'happy', 'wanted', 'cared for', 'funny'];

const advice = [', so start paying attention to the people who matter.', 
', so no small thing can bring down this day',
'; sit down and take a breather if it\'s needed',
'; they can wait sometimes']

function sentenceGen () {
    let choice1 = Math.floor(Math.random() * youOrMe.length);
    let choice2 = Math.floor(Math.random() * midWord.length);
    let choice3 = Math.floor(Math.random() * advice.length);
    return youOrMe[choice1] + midWord[choice2] + advice[choice3];
}

console.log(sentenceGen());