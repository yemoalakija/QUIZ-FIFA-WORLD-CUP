const questions = [
	{
		id: 1,
		question: "Which nation has won the most World Cups?",
		answer: "Brazil",
		options: ["France", "Brazil", "England"],
	},
	{
		id: 2,
		question: "How often is the World Cup held?",
		answer: "Every 4 years",
		options: ["Every 4 years", "Every 3 years", "Every 2 years"],
	},
	{
		id: 3,
		question:
			"What animal was the official mascot for the 1998 World Cup in France?",
		answer: "A Cockerel",
		options: ["An Eagle", "A Lion", "A Cockerel"],
	},
	{
		id: 4,
		question:
			"Which African footballer is the oldest person ever to score in a World Cup?",
		answer: "Roger Milla",
		options: ["Taribu West", "Roger Milla", "Rashidi Yekini"],
	},
	{
		id: 5,
		question:
			"Who was the manager of the German national team when they won in 2014?",
		answer: "Joachim Löw",
		options: ["Joachim Löw", "Jürgen Klinsmann", "Hansi Flick"],
	},
	{
		id: 6,
		question: "Which nation hosted the 1994 FIFA World Cup?",
		answer: "USA",
		options: ["Japan", "South Africa", "USA"],
	},
	{
		id: 7,
		question:
			"What musical instrument was banned by FIFA after the 2010 World Cup?",
		answer: "Vuvuzela",
		options: ["Vuvuzela", "Trumpet", "Violin"],
	},
	{
		id: 8,
		question: "How many times have Italy won the World Cup so far?",
		answer: "4",
		options: ["4", "1", "3"],
	},
	{
		id: 9,
		question:
			"Which British pop star performed at the opening ceremony of the 2018 tournament?",
		answer: "Robbie Williams",
		options: ["Elton John", "Craig Davis", "Robbie Williams"],
	},
	{
		id: 10,
		question: "Which nation will have its World Cup debut in 2022?",
		answer: "Morocco",
		options: ["Morocco", "Qatar", "Senegal"],
	},
];

let question_count = 0;
let points = 0;

window.onload = function () {
	shuffle(questions);
	show(question_count);
};

// shuffles the questions array randomly.
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}