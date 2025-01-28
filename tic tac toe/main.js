let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('.resetbtn');
let newgamebtn=document.querySelector('#newgame');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let turnO=true;
const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame=()=>{
   turnO=true;
    enableBoxes();
    msgcontainer.classList.add('hide');

}
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        console.log('the box was clicked');
       if(turnO){
        box.innerText="O";
        
       }else{
        box.innerText="X";
        

       }
       turnO=!turnO;
       box.disabled=true;
       checkwinner();
    });
});
const showWinner=(winner)=>{
    msg.innerText=`${winner} is the winner`;
    msgcontainer.classList.remove('hide');
    disableBoxes();
}
const enableBoxes=()=>{
    for(let box of boxes){
        
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkwinner=()=>{
    for(let pattern of winPatterns){

         
          let pos1val= boxes[pattern[0]].innerText;
           let  pos2val=boxes[pattern[1]].innerText;
             let pos3val=boxes[pattern[2]].innerText;
            
       if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val==pos2val && pos2val==pos3val){
           console.log('winner is',pos1val);
           showWinner(pos1val);
            
        }
       }
    }
}
newgamebtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);

