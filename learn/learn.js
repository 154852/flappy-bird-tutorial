var chapter = 1,
    lesson = 1;

function load() {
    
    var title = document.getElementById("title"),
        text = document.getElementById("text"),
        image = document.getElementById("image");
    var chapterTitle = document.getElementById("chapter-name"),
        lessonTitle = document.getElementById("lesson-name");
    
    try {
        var selected = lessons[chapter]["lessons"][lesson];
        chapterTitle.innerHTML = lessons[chapter]["name"];
        lessonTitle.innerHTML = selected["name"];
        text.innerHTML = selected["text"];
        title.innerHTML = selected["title"];
        image.setAttribute("src", "../resources/" + selected["image"])
    } catch (err) {
        var m = err.message.split(" ");
        if (m[3] == "'name'") {
            nextPage(0);
        } else {
            chapter = 1;
            lesson = 1;
            load();
        }
        
    }
    
    //chapterTitle.innerHTML = lessons[chapter]["lessons"]["name"];
}


function nextPage(type) {
    if (type == 0) {
        //Next Chapter
        chapter++;
        lesson = 1;
    } else {
        //Next Lesson
        lesson++;
    }
    load();
};

function backPage(type) {
    if (type == 0) {
        //Back a Chapter
        chapter--;
        lesson = 1;
    } else {
        //Back a Lesson
        lesson--;
    }
    load();
}