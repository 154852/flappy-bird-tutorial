var lessons = {
    1: {
        "name": "Getting The Basics",
        "lessons": {
            1: {
                "name": "Coding a Game",
                "title": "Flappy Bird",
                "text": "Welcome to coding club. The first thing i want to make clear is that not everyting will be on here, if you have a question please ask, i would rather you ask than sit there looking confused and don't worry, if your wondering it, i probably considered the same when i started. Over the next few weeks we will be programming a game very similar to flappy bird in the popular programming language of javascript. JavaScript is, among HTML and CSS, used to create functional websites like this one where i have a big <b>dictionary</b> stored as <b>JSON</b> which i can load and do things with using the JavaScript in the background. You can see the finished product in the right-hand corner of the screen at any time. Simply press space to jump or tap on mobile. Once you have read a lesson click on the arrow pointing right above this, to go to the next chapter click on the arrow above that one.",
                "image": "game.png"
            },
            2: {
                "name": "What do we need to know?",
                "title": "The Knowledge",
                "text": "One of the fundamental skills in programming and software developement is knowing how to debug your code. Luckily for us chrome comes with many of these features built into it including a console and a place to see all of the network activity, however before we can do this we need to know how to create a simple website and link it to the CSS (Stylising - making it look nice) and the JavaScript (Functionality - making it do something) so in this first chapter we will make a very simple website that will just display some text that we will make look nice. However there is one more tool that is more helpful than i could ever be, the internet and more precisely stack overflow. It is a forum full of coders and only for coders with every question you could ask for and often multiple answers to these questions, without it i would never be where i am now.",
                "image": "chrome-devs.png"
            }
        }
    }, 
    2: {
        "name": "A Simple Website",
        "lessons": {
            1: {
                "name": "HTML",
                "title": "HyperText Markup Language",
                "text": "HTML or HyperText Markup Language is what is used to define the very simple elements of a web page, from text to images to videos but there are no fonts or text colours or background images or even text sizes in core html but every website must have it as this is what a browser will understand. So go to notepad and create  a new file called index.html. It must be called this as this is what a browser will go to first on arriving at a website. You can create other webpages but there has to be a '/file-name.html' stuck on the end. So in our new document type <var>&#60;!DOCTYPE html></var> at the top. This simply says to the interpreter (browser) that the following is in a HTML format. Next create a <var>&#60;html>&#60;/html></var> tag with a lines gap underneath your doctype tag. A tag is simply text enclosed in a &#60; and a > and an element is the entire object from the start tag (&#60;>) to the end tag (&#60;/>) with any text imbetween. The end tag simply says were this object finishes. For example if we have some text (&#60;p>) and then have some styling (&#60;script>) without an end tag on the p in the text would continue over the style and display that aswell. We have this html tag as html covers the entire page which allows us to change the background colour or image easily. It is also neccessary for a good structure. A good structure means good organisation, good code and above all readable code. If you can't come back in a year and you couldn't say what a specific line does then your code needs improvements.",
                "image": "html1.png"
            },
            2: {
                "name": "Inside the HTML",
                "title": "HTML",
                "image": "googlehtml.png",
                "text": "So our website has the main html element. Inside of this add another element <var>&#60;body></var> this will contain our main elements like text or images. Add another element outside of the body tag called <var>&#60;head></var>. This will contain things like our page title and encoding. The title is what will appear on the tab of your webpage otherwise it is just the path to your website."
            }
        }
    },
    3: {
        "name": "The Game",
        "lessons": {
            1: {
                "name": "GitHub",
                "title": "GitHub",
                "image": "githubcode.png",
                "text": "Github (despite its funny name) is probably the worlds most used website for developers and is used by NASA, the people behind facebook and netflix and most importantly small developers who need a place to put code. The main use of GitHub is how you can commit code onto it and then work on it with others or to allow others to see what you have done. You can see all of the code this website and the game we will be developing <a href=\"https://github.com/154852\">here</a>. The repositry for this site is <a href=\"https://github.com/154852/flappy-bird-tutorial\">flappy-bird-tutorial</a> and the actual game can be found at <a href=\"https://github.com/154852/flappy-bird\">flappy-bird</a>."
            },
            2: {
                "name": "Let's begin!",
                "title": "Starting the game",
                "image": "flappybird2.png",
                "text": "Now we can begin the process os building our game, feel free to play around with i give you, try changing something - what happens, try modifiying numbers, if you can think of a way to improve my code do please say!"
            }
        }
    },
    4: {
        "name": "A bit more HTML",
        "lessons": {
            1: {
                "name": "",
                "title": "",
                "image": "",
                "text": ""
            }
        }
    }
};
