let item2 = document.createElement("div");
item2.classList.add("item2");

let item = document.querySelector(".item");
item.appendChild(item2);

let item3 = document.createElement("div");
item3.classList.add("item3");
item2.appendChild(item3);

let p1 = document.createElement("p"); 
p1.innerText = "Toggle";
p1.classList.add("p1");
item3.appendChild(p1);

let button1 = document.createElement("button");
button1.classList.add("button1");
button1.innerText = "HIDE";
item2.appendChild(button1);

$(document).ready(function(){
    $(".button1").click(function(){
        $(".p1").toggle();
        if ($(this).text() === "HIDE") {
            $(this).text("SHOW");
        } else {
            $(this).text("HIDE");
        }
    });
});

let item4 = document.createElement("div");
item4.classList.add("item4");

let item5 = document.querySelector(".item");  
item5.appendChild(item4);  

let item6 = document.createElement("div");
item6.classList.add("item6");
item4.appendChild(item6);

let p2 = document.createElement("p");
p2.innerText = "Fade";
p2.classList.add("p2");
item6.appendChild(p2);

let button2 = document.createElement("button");
button2.classList.add("button2");
button2.innerText = "FADE OUT";
item4.appendChild(button2);

$(document).ready(function(){
    $(".button2").click(function(){
        $(".p2").fadeToggle();
        if ($(this).text() === "FADE OUT") {
            $(this).text("FADE IN");
        } else {
            $(this).text("FADE OUT");
        }
    });
});


let item7 = document.createElement("div");
item7.classList.add("item7");

let itemContainer = document.querySelector(".item");  
itemContainer.appendChild(item7);  

let item9 = document.createElement("div");
item9.classList.add("item9");
item7.appendChild(item9);

let p3 = document.createElement("p");
p3.innerText = "Fade To";
p3.classList.add("p3");
item9.appendChild(p3);

let button3 = document.createElement("button");
button3.classList.add("button3");
button3.innerText = "FADE TO 25%";
item7.appendChild(button3);

$(document).ready(function(){
    $(".button3").click(function(){
        $(".p3").fadeToggle(3000);
        if ($(this).text() === "FADE TO 25%") {
            $(this).text("FADE IN");
        } else {
            $(this).text("FADE TO 25%");
        }
    });
});




let item11 = document.createElement("div");
item11.classList.add("item11");

let item12 = document.querySelector(".item");  
item12.appendChild(item11);  

let item13 = document.createElement("div");
item13.classList.add("item13");
item11.appendChild(item13);

let p4 = document.createElement("p");
p4.innerText = "Slide";
p4.classList.add("p4");
item13.appendChild(p4);

let button4 = document.createElement("button");
button4.classList.add("button4");
button4.innerText = "SLIDE DOWN";
item11.appendChild(button4);

$(document).ready(function(){
    $(".button4").click(function(){
        if ($(this).text() === "SLIDE DOWN") {
            $(".p4").slideDown(2000);
            $(this).text("SLIDE UP");
        } else {
            $(".p4").slideUp();
            $(this).text("SLIDE DOWN");
        }
    });
});


