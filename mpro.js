let btns = document.querySelectorAll(".btn") ;
let resetbtn = document.querySelector(".reset") ;
let turn0 = true; //either player x or 0
let newbtn = document.querySelector(".new") ;
let msgcontener = document.querySelector(".msgcontener") ;
let msg = document.querySelector("#msg")

const winpattrn = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [3,4,5] ,
    [6,7,8] ,
    [2,4,6]

]

const reset = () =>{
turn0 = true;
enablebtns() ;
msgcontener.classList.add("hide");


}



btns.forEach((btn) => {
      btn.addEventListener("click" ,() =>{
        console.log("you have clicked the button") ;
        if(turn0){
            btn.innerText ="o" ;
            turn0= false ;
        }else{
            btn.innerText = "x" ;
            turn0 = true ;
        }
        btn.disabled = true ;

        checkwinner() ;
      
   

    })
});


const disableBtns = () => {
   for(let btn of btns){
    btn.disabled = true ;
    btn.innerText ="" ;
   }
};



const enablebtns = () => {
   for(let btn of btns){
    btn.disabled = false ;
    
   }
};






const newgame =(winner) =>{
    console.log(`conratulations! , the winner is ${winner}`) ;
    msg.innerText = `conratulations! , the winner is ${winner}`;
    msgcontener.classList.remove("hide") ;
    disableBtns() ;
};


const checkwinner =() =>{
    for(pattrn of winpattrn){
        // console.log(pattrn)
        // console.log(pattrn[0] ,pattrn[1],pattrn[2]) ;
        // console.log(btns[pattrn[0]].innerText,btns[pattrn[1]].innerText,btns[pattrn[2]].innerText) ;
        let pos0val = btns[pattrn[0]].innerText ;
        let pos1val = btns[pattrn[1]].innerText ;
        let pos2val = btns[pattrn[2]].innerText ;
        if(pos0val !=""&& pos1val !="" && pos2val != ""){
        if(pos0val===pos1val && pos1val === pos2val){
            console.log(`winner is ${pos0val}`) ;
              newgame(pos0val) ;
        }
         }
    }
}


newbtn.addEventListener("click" ,reset );
resetbtn.addEventListener("click" ,reset );