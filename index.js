// Debug flag

var debug = false

// twit and twitterbot
var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
console.log('starting...');


// We need to include our configuration file
var config = require('./config.js');

var Bot = new TwitterBot(config);
console.log('logged in')
var T = new Twit(config);

// randomly tweet one of these phrases
var phraseArray = [
  " ",
  "I'm having two scoops of ice cream tonight, as usual!",
  "Two scoops, down the hatch, Melania only gets one. #maga",
  "Another great day in great America with two scoops of ice cream!",
  "Having two bigly scoops of ice cream, my guests only get one. STRONG!",
  "It's that time of the day, two scoops of ice cream. #maga",
  "You know, one time a reporter asked to have two scoops with me and I said 'NO'! SAD!",
  "Having my two scoops of ice cream with my pie tonight #maga",
  "I love my ice cream, so I'm having two scoops!",
  "You know they don't have ice cream like this in Russia, so I'm having two scoops! America! #maga",
  "Having some ice cream, two scoops, liberals are jealous!",
  "Senator Lindsey Graham wishes he can have one of my two scoops but I told him NO!",
  "Why doesn't #cnn report on my ice cream scoops and only report on #FAKENEWS? SAD!",
  "Psycho Joe and Hungry-for-Ice-Cream Mika came to Mar-a-Lago in January and begged for two scoops and I said NO!",
  "Watch me tomorrow morning on #foxandfriends where I have two extra scoops of ice cream ON AIR! #maga",
  "When President Xi visited me I showed him the most beautiful slice of cake, but only 1 scoop!",
  "Peyton Manning might have gone golfing with me but he only got one scoop, I'm having two! #maga",
  "I'm glad I'm the healthiest individual ever elected president so I can have these two scoops! #maga",
  "My use of ice cream isn't just presidential, it's TWO SCOOPS PRESIDENTIAL! Make America Great Again!",
  "#FraudnewsCNN will never tell their viewers how good two scoops of ice cream is! #fakenews",
  "THE FAKE AND FRADULENT NEWS MEDIA is trying convince you that you don't need two scoops. LIES! #fakenews",
  "I'm glad to see that @CNN was exposed as one-scoop advocates. About time! #fakenews",
  "If Senate Republicans help me repeal #obamacare they can have two scoops of ice cream, maybe! #maga",
  "#makeicecreamsafeagain If I'm not in such good shape would I eat two scoops?",
  "The Washington Post won't tell you how good my ice cream is but I will! It's two scoops good! #maga",
  "This is a thousand times more scoops, my two scoops, than everyone else's one scoop in the world!",
  "The one thing I would say - and I say this to people - I never realized how good two scoops are!",
  "I really just see the bigness of it all, all two scoops, such huge responsibility!",
  "I am somebody with a lot of heart for ice cream, two scoops worth!",
  "You have to love ice cream, if you love ice cream, such responsibility! Wow!",
  "I thought two scoops would be lighter. #maga",
  "A lot of really good things are happening! Really good things! I'm proud of both of these scoops!",
  "I think we've done more than perhaps any president in the first 100 days! Time for ice cream!",
  "I'd give both of these scoops of ice cream an A!",
  "Have you seen the tremendous success that is this ice cream? That's why I'm having two scoops!",
  "You know why ISIS hates America? Because you can't have ice cream in the desert! SAD!",
  "You know Obama tried to have ice cream here for eight years, but had zero, zippo, zero. #twoscoops",
  "@foxnews treats me well and it's that Fox news is the most accurate in covering my ice cream!",
  "I don't watch CNN anymore, I don't watch MSNBC, the #fakenewsmedia doesn't show ice cream!",
  "When I eat a brand of ice cream their sales go double, triple! #maga",
  "The Russia is a fake story, it's made up, no ice cream there, I need ice cream, two scoops.",
  "Nobody asks Hillary Clinton why she doesn't like AMERICAN ICE CREAM because she can't do two scoops!",
  "Little Marco lost to me because he couldn't have ice cream, too hot in LITTLE HAVA-NA! #maga",
  "Did you know we won the electoral college because of my two scoops of ice cream?",
  "I have a terrific relationship with leaders who also eat ice cream, even though they only have 1 scoop!",
  "My base, which is a big base, are the people who eat ice cream and stay as healthy as me! #maga",
  "Strawberry ice cream is too LOW ENERGY! My two scoops are always vanilla and chocolate! Tremendous!",
  "Part of the beauty of ice cream is how rich it is, like me! #maga",
  "I have a great relationship with chocolate ice cream, the GREATEST! #maga",
  "Can you imagine the outcry if @snoopdogg, failing taste buds and all, had 2 scoops of ice cream?",
  "Any negative talk about my two scoops is #FAKENEWS! People want dessert security and EXTREME CREAM! #maga",
  "An extremely credible source came to my office and told me that Barack Obama ONLY EATS SORBET! SAD!",
  "Ariana Huffington has bad taste in ice cream! No wonder her husband left her! Good decision! #2scoops",
  "I will eat two scoops of ice cream - and nobody eats ice cream more than me, believe me!",
  "I will eat a great deal of ice cream, and make Mexico pay for it! #maga",
  "My two scoops of ice cream are both frozen! We need global warming! #hoax #maga",
  "The dishonest media will never keep us from sprinkling nuts on my two scoops of ice cream! #maga",
  "You have to eat ice cream anyway, why not make it two scoops? #big",
  "Sometimes the best ice cream is the one you let me have two scoops of #maga",
  "Ice cream rate is all time high, temperature will start to go up, better have two scoops of ice cream!",
  "I had the biggest crowd at my inauguration, all coming to see me eat my two scoops! #maga",
  "What does Kim Jong Un do all day? Certainly not American ice cream, he can't have any!",
  "The fake news media want to focus on my VOTER FRAUD PANEL but not my ICE CREAM PANEL! WOW!",
  "I feel completely vindicated by my two scoops of ice cream consumption!",
  "James Comey lied about me because I only let him have one scoop of ice cream! SAD!",
  "Ben and Jerry's Ice Cream is UNAMERICAN! #AmericaFirst because BERNIE SANDERS eats it!",
  "Congrats to the USSS for finding my ice cream even overseas!",
  "China's ice cream production increased over 40% last quarter! Buy American Ice Cream!",
  "Getting ready to have my two scoops at my golf course!",
  "Having my two scoops of ice cream on Air Force One!",
  "#fakenewscnn should be renamed ICNN for Ice Cream News Network!",
  "The people of Poland are joined to America in their love of ice cream!",
  "Not having ice cream at the NATO summit is the worst deal for America ever!",
  "I can't get a hotel room in Hamburg because none had my two scoops on room service!"
];

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)]

};

var phrase = chooseRandom(phraseArray) + " " +
  chooseRandom(phraseArray);

Bot.tweet(phrase);
console.log('posted');
