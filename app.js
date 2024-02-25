let boxs =document.querySelectorAll(".box");
let reset_button =document.querySelector(".rest-btn"); 
let newgamebutton =document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-cont");
let msg =document.querySelector("#Msg");
let turn0 =true;
const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8], 
];
 boxs.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("button was clicked");
       if(turn0){
        box.innerText = "X";
        turn0 =false;
       }else {
        box.innerText ="0";
        turn0 =true;
       }
       box.disabled = true;
       checkwinner();
    })
 })

const showwinner = (winner) =>{
        msg.innerText = msg.innerText = `Congratulations, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
 }

 const checkwinner = () =>{
    for( let pattern of  winpattern){
         let postion1 = boxs[pattern[0]].innerText;
         let postion2 = boxs[pattern[1]].innerText;
         let postion3 = boxs[pattern[2]].innerText;
         if(postion1!="" && postion2!="" && postion3!=""){
            if(postion1 == postion2 && postion2 == postion3){
                console.log("wineer" , postion1);
                showwinner(postion1);
            }
         }
        
    }
 }