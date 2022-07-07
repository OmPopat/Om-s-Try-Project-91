var score=0;

function updateScore(){
    score=score+1;
    document.getElementById("score").innerHTML=score
}

 function saveScore(){
    localStorage.setItem("score",score)
}

function nextPage(){
    window.location="D:/Om's All Project/Om's Project 91/Math Quiz/index.html";
}