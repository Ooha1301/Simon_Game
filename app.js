let gameSeq=[];
let userSeq=[];

let btns=["red","blue","green","yellow"];

let started=false;
let level=0;

document.addEventListener("keypress", function()
{
    if(started==false)
    {
    console.log("game started");
    started=true;
    levelUp();
    }
});

let h2 = document.querySelector("h3");

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },250);
};

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText="Level "+level;

    let randomIdx=Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    //choose random btn
    gameFlash(randombtn);
}
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


let allbtns = document.querySelectorAll("#btn");

function check(index)
{
    //console.log("current level",level);

    if(userSeq[index]===gameSeq[index])
    {
        //console.log("same value");
        if(userSeq.length==gameSeq.length)
        {
            levelUp();
            setTimeout(levelUp,9000);
        }
    }
    else
    {
       h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start Again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },150);

       reset();
    }
}

function btnPress()
{
    //console.log("btn is pressed");
    //console.log(this);
    let btn = this;

    userColor = btn.getAttribute("class");
    console.dir(userColor);
    userFlash(btn);
    userSeq.push(userColor);
    check(userSeq.length-1);
}

for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}
