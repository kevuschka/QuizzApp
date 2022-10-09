let htmlQuestions = [
    {
        'question': 'Was sind HTML tags?',
        'answer_1': 'Tags, die im Geschäft den Alarm auslösen, wenn etwas geklaut wird.',
        'answer_2': 'Code der so aussieht:',
        'answer_3': 'Damit der Webbrowser weiß, was anzuzeigen ist.',
        'answer_4': 'Das sind kurze Codekommentare.',
        'right_answer': 3,
    },
    {
        'question': 'Wofür steht HTML?',
        'answer_1': 'Hyper Text Markup Language',
        'answer_2': 'Home Tool Markup Language',
        'answer_3': 'Hyperlinks and Text Markup Language',
        'answer_4': 'High Transition Mail Loop',
        'right_answer': 1,
    },
    {
        'question': 'Was ist die Dateiendung für HTML Dateien?',
        'answer_1': '.html',
        'answer_2': '.htm',
        'answer_3': '.com',
        'answer_4': '.doc',
        'right_answer': 1,
    },
    {
        'question': 'Wer ist der Erfinder von HTML?',
        'answer_1': 'Bruce Lee',
        'answer_2': 'Mark Zuckerberg',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Dennis Ritchie',
        'right_answer': 3,
    },
    {
        'question': 'Was sind die beiden Hauptkomponenten der HTML Struktur?',
        'answer_1': 'header und footer',
        'answer_2': 'head und body',
        'answer_3': 'body und footer',
        'answer_4': 'meta und body',
        'right_answer': 2,
    },
];

let cssQuestions = [
    {
        'question': 'Wofür steht CSS?',
        'answer_1': 'Camelcase Style Sheets',
        'answer_2': 'Case Sensitive Style',
        'answer_3': 'Corresponding Style Sheets',
        'answer_4': 'Cascading Style Sheets',
        'right_answer': 4,
    },
    {
        'question': 'Woraus besteht ein CSS Element?',
        'answer_1': 'Aus einem "Key:Value Pair".',
        'answer_2': 'Aus einem Selector und einem Eigenschaftenteil.',
        'answer_3': 'Aus einer Überschrift und einem Text.',
        'answer_4': 'Aus mindestens einer Funktion.',
        'right_answer': 2,
    },
    {
        'question': 'Wie sieht der universal Selector aus?',
        'answer_1': '*',
        'answer_2': '/',
        'answer_3': '+',
        'answer_4': '-',
        'right_answer': 1,
    },
    {
        'question': 'Welchen Selector Typen gibt es nicht?',
        'answer_1': 'Child Selector',
        'answer_2': 'ID Selector',
        'answer_3': 'Class Selector',
        'answer_4': 'IMEI Selector',
        'right_answer': 4,
    },
    {
        'question': 'Welche Endund hat eine CSS Datei?',
        'answer_1': '.cs',
        'answer_2': '.css',
        'answer_3': '.doc',
        'answer_4': '.ssc',
        'right_answer': 2,
    },
];

let jsQuestions = [
    {
        'question': 'Welche Aussage stimmt?',
        'answer_1': 'Javascript ist eine objektorientierte Skiptsprache.',
        'answer_2': 'Javascript ist eine objektorientierte Programmiersprache.',
        'answer_3': 'Der Sourcecode muss in jedem Fall compiliert werden.',
        'answer_4': 'Javascript ist ein Nachfolger von Java.',
        'right_answer': 1,
    },
    {
        'question': 'Was gibt  "console.log(String.raw`HelloTwitter\\nworld`);"  aus?',
        'answer_1': '"HelloTwitter\\nworld"',
        'answer_2': '"HelloTwitter world"',
        'answer_3': '"HelloTwitter \nworld"',
        'answer_4': '"Hello Twitter world"',
        'right_answer': 1,
    },
    {
        'question': 'Was gibt "console.log(typeof NaN)" aus?',
        'answer_1': 'NaN',
        'answer_2': 'number',
        'answer_3': 'null',
        'answer_4': 'undefined',
        'right_answer': 2,
    },
    {
        'question': 'Welche Endung hat eine Javascript Datei?',
        'answer_1': '.jc',
        'answer_2': '.jsct',
        'answer_3': '.js',
        'answer_4': '.jst',
        'right_answer': 3,
    },
    {
        'question': 'Was gibt "console.log(typeof typeof 1)" aus?',
        'answer_1': '1',
        'answer_2': 'number',
        'answer_3': 'string',
        'answer_4': 'true',
        'right_answer': 3,
    },
];

let selectedHTML = 1;
let selectedCSS = 0;
let selectedJS = 0;

let page = 0;

let rightAnswers = 0;

let selectedAnswers = [];

let progress;

let AUDIO_SUCCESS = new Audio('audio/rightAnswer.mp3');
let AUDIO_FAIL = new Audio('audio/wrongAnswer.mp3');
let AUDIO_RESULT = new Audio('audio/resultAnswer.mp3');