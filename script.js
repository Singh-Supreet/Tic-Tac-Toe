const play=document.querySelector(".play");
const playbtn=document.querySelector(".play .btn");
const boxelement=document.querySelectorAll(".container .box");
const player=document.querySelector(".players");
const player1=document.querySelector(".player1");
const player2=document.querySelector(".player2");
const game=document.querySelector(".gameContainer");
const imgbox = document.querySelector(".imgbox");
const result = document.querySelector(".result");
const result_text=document.querySelector(".result h1");
const result_btn=document.querySelector(".result button");
let audioturn= new Audio("mixkit-unlock-game-notification-253.wav")


window.onload=()=>{
    playbtn.onclick=()=>{
        play.classList.add("inactive");
        player.classList.remove("inactive");
        game.classList.remove("inactive");
    }
}
// const img=document.querySelector(".imgbox");
// winning conditons
const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const playerX="X";
const playerO="O";


let turn=true;
console.log(boxelement);
 boxelement.forEach(box=>{
    box.onclick=()=>{
        let currentplayer = turn ?playerO:playerX;
        box.classList.add("disable");
        // box.innerHTML=currentplayer;
        add(box, currentplayer);

        // winner check
        if (winnerCheck(currentplayer)) {
            console.log(currentplayer+" WINNER");
            addInactive();
            // result.classList.remove("inactive");
            imgbox.classList.remove("inactive");
            result_text.innerText = currentplayer + " Win the Game";
        }

        else if(Draw()){
            // console.log("Draw");
            addInactive();
            // imgbox.classList.remove("inactive");
            result_text.innerText = " Draw the game";
        }
        else{
            audioturn.play();
            changeturn();
        }
        }
    });

    function winnerCheck(currentplayer) {
        return wins.some(conditon => {
            // console.log(conditon);
            return conditon.every(index => {
                return boxelement[index].classList.contains(currentplayer);
            });
        })
    }

    function changeturn()
    {
    turn=!turn; //JO bhi recent hoga usse apne aap opposite wala save krlega

    // iski help se change ho raha h background X ans 0 turn ka
    if(turn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }
    else{
        player1.classList.remove("active");
        player2.classList.add("active");
    }

}

function Draw()
{
    // ... ye function bnana dega
     
    return [...boxelement].every(box=>{
        return box.classList.contains(playerX) || box.classList.contains(playerO);
    })
}


 function add(box,currentplayer){
    box.innerHTML=currentplayer;
    box.classList.add(currentplayer);
 }
 function addInactive(){
    result.classList.remove("inactive");
 }

 result_btn.onclick=()=>{
    location.reload();
 }