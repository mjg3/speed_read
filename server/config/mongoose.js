var mongoose = require('mongoose');

var fs = require('fs');
// connect to the database
mongoose.connect('mongodb://localhost/speed_read');
// specify the path to all of the models
var models_path = __dirname + '/../models'

// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})

Schema = mongoose.Schema;

var userSchema   = new mongoose.Schema({
  name: String,
  email: String,
  user_id: String,
  diagnostic_performances: Array,
  created_at: Date,
  quiz_performances: Array

})

var quizSchema = new mongoose.Schema({
  answer_key: Array,
  passage_id: Number,
  passage: String,
  questions: Array,
  words_per_minute: Number,

})

var User = mongoose.model('User', userSchema);
var Quiz = mongoose.model('Quiz', quizSchema);

// var lordoftheflies = new Quiz({answer_key: ["A little stream or open beach", "Hunters", "Castle Rock", "Spear", "Pig"],
// passage: "Ralph lay in a covert, wondering about his wounds. The bruised flesh was inches in diameter over his right ribs, with a swollen and bloody scar where the spear had hit him. His hair was full of dirt and tapped like the tendrils of a creeper. All over he was scratched and bruised from his flight through the forest. By the time his breathing was normal again, he had worked out that bathing these injuries would have to wait. How could you listen for naked feet if you were splashing in water? How could you be safe by the little stream or on the open beach? Ralph listened. He was not really far from the Castle Rock, and during the first panic he had thought he heard sounds of pursuit. But the hunters had only sneaked into the fringes of the greenery, retrieving spears perhaps, and then had rushed back to the sunny rock as if terrified of the darkness under the leaves. He had even glimpsed one of them, striped brown, black, and red, and had judged that it was Bill. But really, thought Ralph, this was not Bill. This was a savage whose image refused to blend with that ancient picture of a boy in shorts and shirt. The afternoon died away; the circular spots of sunlight moved steadily over green fronds and brown fiber but no sound came from behind the rock. At last Ralph wormed out of the ferns and sneaked forward to the edge of that impenetrable thicket that fronted the neck of land. He peered with elaborate caution between branches at the edge and could see Robert sitting on guard at the top of the cliff. He held a spear in his left hand and was tossing up a pebble and catching it again with the right. Behind him a column of smoke rose thickly, so that Ralph’s nostrils flared and his mouth dribbled. He wiped his nose and mouth with the back of his hand and for the first time since the morning felt hungry. The tribe must be sitting round the gutted pig, watching the fat ooze and burn among the ashes. They would be intent.",
// passage_id: 5,
// questions: [{question: "What environment(s) does Ralph question in terms of being safe?", answer: ["A forest at nighttime", "A little stream or open beach", "Inside a cave near a waterfall", "Anywhere with an open fire"]},
// {question: "What is Ralph running from?", answer:["Hunters", "Animals", "Riptide", "Killer Bees"]},
// {question: "Where are the people that Ralph is spying on?", answer:["Castle Rock", "Stone Fortress", "Spear Camp", "Hunting Nest"]},
// {question: "Robert held what weapon while on guard?", answer:["Spear", "Wooden Sword", "Bola", "Bow and Arrow"]},
// {question: "The tribe took turns feasting on what?", answer:["Fruit", "Lamb", "Goat", "Pig"]}]})
// lordoftheflies.save(function(error){console.log(error)});
// var endersgame = new Quiz({answer_key: ["Played a fantasy game", "They weren't there", "Twisted it deeper into the ground", "Peter", "Tiny Snakes"],
// passage: "Since he was back to the barracks earlier than usual, Ender called up the fantasy game on his desk. It had been a while since he last used it. Long enough that it didn't start him where he had left off. Instead, he began by the Giant's corpse. Only now, it was hardly identifiable as a corpse at all, unless you stood off a ways and studied it. The body had eroded into a hill, entwined with grass and vines. Only the crest of the Giant's face was still visible, and it was white bone, like limestone protruding from a discouraged, withering mountain. Ender did not look forward to fighting with the wolf-children again, but to his surprise they weren't there. Perhaps, killed once, they were gone forever. It made him a little sad. He made his way down underground, through the tunnels, to the cliff ledge overlooking the beautiful forest. Again he threw himself down, and again a cloud caught him and carried him into the castle turret room. The snake began to unweave itself from the rug again, only this time Ender did not hesitate. He stepped on the head of the snake and crushed it under his foot. It writhed and twisted under him, and in response he twisted and ground it deeper into the stone floor. Finally it was still. Ender picked it up and shook it, until it unwove itself and the pattern in the rug was gone. Then, still dragging the snake behind him, he began to look for a way out. Instead, he found a mirror. And in the mirror he saw a face that he easily recognized. It was Peter, with blood dripping down his chin and a snake's tail protruding from a corner of his mouth. Ender shouted and thrust his desk from him. The few boys in the barracks were alarmed at the noise, but he apologized and told them it was nothing. They went away. He looked  again into his desk. His figure was still there, staring into the mirror. He tried to pick up some of the furniture, to break the mirror, but it could not be moved. The mirror would not come off the wall, either. Finally Ender threw the snake at it. The mirror shattered, leaving a hole in the wail behind it. Out of the hole came dozens of tiny snakes which quickly bit Ender's figure again and again. Tearing the snakes frantically from itself, the figure collapsed and died in a writhing heap of small serpents. The screen went blank, and words appeared. PLAY AGAIN? Ender signed off and put the desk away.",
// passage_id: 6,
// questions: [{question: "What did Ender do when he returned to the barracks?", answer: ["Reviewed combat tactics", "Placed his award under his pillow", "Played a fantasy game", "Called his parents"]},
// {question: "How did Ender interact with the wolf-children again?", answer:["They weren't there", "He killed them", "They became his allies", "He slipped past them"]},
// {question: "How did Ender react to the snake struggling under him?", answer:["Let up his foot and let it free", "Collected its venom into his flask", "Captured it in his coin pouch", "Twisted it deeper into the ground"]},
// {question: "Who was the reflection of in the mirror?", answer:["Ender", "Peter", "Bean", "Valentine"]},
// {question: "What came out of the shattered mirror?", answer:["Tiny Snakes", "Shadows", "A Hive Queen", "Ender's Father"]}]})
// endersgame.save(function(error){console.log(error)});
// var atlasshrugged = new Quiz({answer_key: ["Those who are its worst", "Those who have never achieved his title", "The hero", "Total dedication", "After pronouncing the oath"],
// passage: "In the name of the best within you, do not sacrifice this world to those who are its worst. In the name of the values that keep you alive, do not let your vision of man be distorted by the ugly, the cowardly, the mindless in those who have never achieved his title. Do not lose your knowledge that man's proper estate is an upright posture, an intransigent mind and a step that travels unlimited roads. Do not let your fire go out, spark by irreplaceable spark, in the hopeless swamps of the approximate, the not-quite, the not-yet, the not-at-all. Do not let the hero in your soul perish, in lonely frustration for the life you deserved, but have never been able to reach. Check your road and the nature of your battle. The world you desired can be won, it exists, it is real, it is possible, it's yours. But to win it requires your total dedication and a total break with the world of your past, with the doctrine that man is a sacrificial animal who exists for the pleasure of others. Fight for the value of your person. Fight for the virtue of your pride. Fight for the essence of that which is man: for his sovereign rational mind. Fight with the radiant certainty and the absolute rectitude of knowing that yours is the Morality of Life and that yours is the battle for any achievement, any value, any grandeur, any goodness, any joy that has ever existed on this earth. You will win when you are ready to pronounce the oath I have taken at the start of my battle—and for those who wish to know the day of my return, I shall now repeat it to the hearing of the world: I swear—by my life and my love of it—that I will never live for the sake of another man, nor ask another man to live for mine.",
// passage_id: 7,
// questions: [{question: "We are told not to sacrifice this world to whom?", answer: ["Those who are non believers", "Those without confidence", "Those who are its worst", "Those who hold grudges"]},
// {question: "What shouldn't we let distort our vision of man?", answer:["Those who have never achieved his title", "Betrayers of humanity", "Hopeless radicals", "Sacrificial lambs"]},
// {question: "What are we warned to not let perish in your soul?", answer:["The hero", "Our spark", "Our curiosity", "Love"]},
// {question: "How can we achieve the world we desire?", answer:["Relentless hope", "Setting pride aside", "Total dedication", "Eliminating strife"]},
// {question: "When is one ready to win", answer:["After resolving all quarrels", "After pronouncing the oath", "Before falling to sin", "During ones darkest time"]}]})
// atlasshrugged.save(function(error){console.log(error)});
// var greatgatsby = new Quiz({answer_key: ["A smile", "Four to five times", "Positive", "Confidence", "Focused"],
// passage: "He smiled understandingly-much more than understandingly. It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced–or seemed to face–the whole eternal world for an instant, and then concentrated on you with an irresistible prejudice in your favor. It understood you just as far as you wanted to be understood, believed in you as you would like to believe in yourself, and assured you that it had precisely the impression of you that, at your best, you hoped to convey.",
// passage_id: 2,
// questions: [{question: "What is the author talking about in this passage?", answer: ["A beautiful woman", "A smile", "A sunset", "Clouds"]},
// {question: "How many times do the author say one would come across this experience?", answer:["Over 100", "Once or twice", "Exactly 3 times", "Four to five times"]},
// {question: "The emotion elicited in this passage is?", answer:["Grim", "Depressing", "Positive", "Humorous"]},
// {question: "The feeling the author is conveying is one of?", answer:["Confidence", "Anguish", "Anger", "Sadness"]},
// {question: "The person described in this passage seems to be?", answer:["Focused", "Angry", "Comical", "Ungrateful"]}]})
// greatgatsby.save(function(error){console.log(error)});
// var harrypotter = new Quiz({answer_key: ["Not known", "Frank", "In a cottage", "Little Hangleton churchyard", "Terror"],
// passage: "The police had never read an odder report. A team of doctors had examined the bodies and had concluded that none of the Riddles had been poisoned, stabbed, shot, strangled, suffocated, or (as far as they could tell) harmed at all. In fact (the report continued, in a tone of unmistakable bewilderment), the Riddles all appeared to be in perfect health - apart from the fact that they were all dead. The doctors did note (as though determined to find something wrong with the bodies) that each of the Riddles had a look of terror upon his or her face - but as the frustrated police said, whoever heard of three people being frightened to death? As there was no proof that the Riddles had been murdered at all, the police were forced to let Frank go. The Riddles were buried in the Little Hangleton churchyard, and their graves remained objects of curiosity for a while. To everyone's surprise, and amid a cloud of suspicion, Frank Bryce returned to his cottage on the grounds of the Riddle House... But Frank did not leave. He stayed to tend the garden for the next family who lived in the Riddle House, and then the next for neither family stayed long. Perhaps it was partly because of Frank that the new owners said there was a nasty feeling about the place, which, in the absence of inhabitants, started to fall into disrepair...",
// passage_id: 3,
// questions: [{question: "How did the victims die?", answer: ["Poisoned", "Stabbed", "Shot", "Not known"]},
// {question: "Who was suspected of the murders, but later let go?", answer:["Ron", "Snape", "Frank", "Harry"]},
// {question: "Where does Frank Bryce live?", answer:["Hogwarts", "London", "In a cottage", "In a castle"]},
// {question: "Where were the Riddles buried?", answer:["Hogwarts", "Little Hangleton churchyard", "Manchester City", "Haggard's Hill"]},
// {question: "The Riddlers died with a look of what on their faces?", answer:["Pain", "Anger", "Terror", "surprise"]}]})
// harrypotter.save(function(error){console.log(error)});
