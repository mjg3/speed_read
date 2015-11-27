var mongoose = require('mongoose');


monoose.connect('mongodb://heroku_xgd6mlc7:4nn5bj4j4v96kf4m9edj83rhd@ds053788.mongolab.com:53788/heroku_xgd6mlc7');
Schema = mongoose.Schema;

var userSchema   = new mongoose.Schema({
  name: String,
  email: String,
  user_id: String,
  diagnostic_performances: Array,
  created_at: Date,
  quiz_performances: Array,
  badges: Array,

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
// var huckleberryfinn = new Quiz({answer_key: ["Wrote a letter", "Thought about his adventures", "They were sick with small-pox", "Tore it up", "To hell"],
// passage: "So I was full of trouble, full as I could be; and didn’t know what to do. At last I had an idea; and I says, I’ll go and write the letter—and then see if I can pray. Why, it was astonishing, the way I felt as light as a feather right straight off, and my troubles all gone. So I got a piece of paper and a pencil, all glad and excited, and set down and wrote: Miss Watson, your runaway nigger Jim is down here two mile below Pikesville, and Mr. Phelps has got him and he will give him up for the reward if you send. HUCK FINN. I felt good and all washed clean of sin for the first time I had ever felt so in my life, and I knowed I could pray now. But I didn’t do it straight off, but laid the paper down and set there thinking—thinking how good it was all this happened so, and how near I come to being lost and going to hell. And went on thinking. And got to thinking over our trip down the river; and I see Jim before me all the time: in the day and in the night-time, sometimes moonlight, sometimes storms, and we a-floating along, talking and singing and laughing. But somehow I couldn’t seem to strike no places to harden me against him, but only the other kind. I’d see him standing my watch on top of his’n, ‘stead of calling me, so I could go on sleeping; and see him how glad he was when I come back out of the fog; and when I come to him again in the swamp, up there where the feud was; and such-like times; and would always call me honey, and pet me and do everything he could think of for me, and how good he always was; and at last I struck the time I saved him by telling the men we had small-pox aboard, and he was so grateful, and said I was the best friend old Jim ever had in the world, and the only one he’s got now; and then I happened to look around and see that paper. It was a close place. I took it up, and held it in my hand. I was atrembling, because I’d got to decide, forever, betwixt two things, and I knowed it. I studied a minute, sort of holding my breath, and then says to myself: All right, then, I’ll go to hell”—and tore it up.",
// passage_id: 4,
// questions: [{question: "What did the main character do before praying?", answer: ["Grabbed his lucky charm", "Made his bed", "Wrote a letter", "Swam in the river"]},
// {question: "After writing the letter what did Huck Finn think about?", answer:["Thought about his adventures", "How to repair his raft", "His lost stopwatch", "Going back home"]},
// {question: "What did Huck Finn tell the men to save Jim?", answer:["They were delivering a package", "They were lost", "They were already under a contract", "They were sick with small-pox"]},
// {question: "What did Huck Finn do with his letter?", answer:["Put it in a glass bottle", "Burned it", "Had a friend deliver it", "Tore it up"]},
// {question: "Where is Huck Finn scared of going by hiding Jim", answer:["Back to prison", "To hell", "His uncle's farm", "Miss Watson's house"]}]})
// huckleberryfinn.save(function(error){console.log(error)});
// var zenmotorcycle = new Quiz({answer_key: ["Talk", "Traveling shows", "Isn't as deep", "Tomorrow never ends", "Info channels aren't deep enough"],
// passage: "What I would like to do is use the time that is coming now to talk about some things that have come to mind. We're in such a hurry most of the time we never get much chance to talk. The result is a kind of endless day-to-day shallowness, a monotony that leaves a person wondering years later where all the time went and sorry that it's all gone. Now that we do have some time, and know it, I would like to use the time to talk in some depth about things that seem important. What is in mind is a sort of Chautauqua...that's the only name I can think of for it...like the traveling tent-show Chautauquas that used to move across America, this America, the one that we are now in, an old-time series of popular talks intended to edify and entertain, improve the mind and bring culture and enlightenment to the ears and thoughts of the hearer. The Chautauquas were pushed aside by faster-paced radio, movies and TV, and it seems to me the change was not entirely an improvement. Perhaps because of these changes the stream of national consciousness moves faster now, and is broader, but it seems to run less deep. The old channels cannot contain it and in its search for new ones there seems to be growing havoc and destruction along its banks. In this Chautauqua I would like not to cut any new channels of consciousness but simply dig deeper into old ones that have become silted in with the debris of thoughts grown stale and platitudes too often repeated. ``What's new?'' is an interesting and broadening eternal question, but one which, if pursued exclusively, results only in an endless parade of trivia and fashion, the silt of tomorrow. I would like, instead, to be concerned with the question ``What is best?,'' a question which cuts deeply rather than broadly, a question whose answers tend to move the silt downstream. There are eras of human history in which the channels of thought have been too deeply cut and no change was possible, and nothing new ever happened, and ``best'' was a matter of dogma, but that is not the situation now. Now the stream of our common consciousness seems to be obliterating its own banks, losing its central direction and purpose, flooding the lowlands, disconnecting and isolating the highlands and to no particular purpose other than the wasteful fulfillment of its own internal momentum. Some channel deepening seems called for.",
// passage_id: 8,
// questions: [{question: "We are in such a hurry we never get a chance to?", answer: ["Sit down", "Talk", "Work", "Draw"]},
// {question: "What are Chautauquas?", answer:["Hunting tribes", "Traveling shows", "Mythical creatures", "Cultural food"]},
// {question: "What downside came with radio, movies and TV?", answer:["Electricity shortage", "Miscommunication", "Isn't as deep", "Unaffordable"]},
// {question: "What problem does the author associate with 'What's new?'", answer:["New replaces the old", "Tomorrow never ends", "Focus on the wrong topics", "Too narrow of a scope"]},
// {question: "What is the current problem", answer:["Change is always possible", "Info channels aren't deep enough", "Chautauquas no longer exist", "People are misleading"]}]})
// zenmotorcycle.save(function(error){console.log(error)});
// var catcherintherye = new Quiz({answer_key: ["Out of Africa", "Speeding", "Illiterate", "His friends", "Somerset Maugham"],
// passage: "The book I was reading was this book I took out of the library by mistake. They gave me the wrong book, and I didn't notice it till I got back to my room. They gave me Out of Africa, by Isak Dinesen. I thought it was going to stink, but it didn't. It was a very good book. I'm quite illiterate, but I read a lot. My favorite author is my brother D.B., and my next favorite is Ring Lardner. My brother gave me a book by Ring Lardner for my birthday, just before I went to Pencey. It had these very funny, crazy plays in it, and then it had this one story about a traffic cop that falls in love with this very cute girl that's always speeding. Only, he's married, the cop, so be can't marry her or anything. Then this girl gets killed, because she's always speeding. That story just about killed me. What I like best is a book that's at least funny once in a while. I read a lot of classical books, like The Return of the Native and all, and I like them, and I read a lot of war books and mysteries and all, but they don't knock me out too much. What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though. I wouldn't mind calling this Isak Dinesen up. And Ring Lardner, except that D.B. told me he's dead. You take that book Of Human Bondage, by Somerset Maugham, though. I read it last summer. It's a pretty good book and all, but I wouldn't want to call Somerset Maugham up. I don't know, He just isn't the kind of guy I'd want to call up, that's all. I'd rather call old Thomas Hardy up. I like that Eustacia Vye.",
// passage_id: 9,
// questions: [{question: "What book did the author get by mistake?", answer: ["Out of Africa", "Paradise Pointe", "Catcher in the Rye", "Falling for Summer"]},
// {question: "The cop falls in love with a girl that is always?", answer:["Dancing", "Painting", "Speeding", "Reading"]},
// {question: "The author reads a lot but is quite what?", answer:["Emotional", "Illiterate", "Loud", "Uninterested"]},
// {question: "The main character wishes good authors were?", answer:["His friends", "Fictional characters", "Always truthful", "Himself"]},
// {question: "Who wrote the book Of Human Bondage?", answer:["Skyler Thomas", "Winston Chambers", "Vince Chime", "Somerset Maugham"]}]})
// catcherintherye.save(function(error){console.log(error)});
