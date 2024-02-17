let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();

    }
});
});


function reset(){
turnO=true;
count=0;
enablebtn();
msgContainer.classList.add("hide");
};

function gameDraw () {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

function enablebtn(){
    for(box of boxes){
        box.disabled=false;
    box.innerText="";
    }
};

function disablebtn(){
    for(box of boxes){
        box.disabled=true;
    }
};
function showWinner(winner){
    console.log("showwinner");
    msg.innerHTML=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disablebtn();
};


function checkWinner(){
    for( let pattern of winPatterns){
            let posVal1=boxes[pattern[0]].innerText;
            let posVal2=boxes[pattern[1]].innerText;
            let posVal3=boxes[pattern[2]].innerText;

            if(posVal1 !="" && posVal2!="" && posVal3 !=""){
                    if(posVal1 === posVal2 && posVal2=== posVal3){
                        showWinner(posVal1);
                        console.log(posVal1);
                    }
            }
    }
};

newGamebtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);