
function getComputerChoice(){
    const words=['seasor','paper','rock']
    return words [Math.floor(Math.random()*words.length)]
}
 const computerSelection=getComputerChoice();
 

const playerSection1=prompt("select one among :Seasor ,Paper, Rock" ).toString()
const playerSection=playerSection1.toLowerCase()

function playRound(playerSection,computerSelection){
    
    if(playerSection==computerSelection)
    {
        console.log("Draw! You and computer selection is same:")
    }

    else if(playerSection=="Seasor"&&computerSelection=="Paper")
    {
        console.log('Congratulation!, You win  : Seasor beats Paper ')
        
    }
    else if(playerSection=="Seasor"&&computerSelection=="Rock")
    {
        console.log('OOPs!, Computer wins  : Rock beats Seasor ')
        
    }
    else if(playerSection=="Paper"&&computerSelection=="Seasor")
    {
        console.log('OOPs!, Computer wins  : Seasor beats Paper ')
        
    }
    else if(playerSection=="Paper"&&computerSelection=="Rock")
    {
        console.log('Congratulation!, You win  : Paper  beats Rock ')
        
    }
    else if(playerSection=="Rock"&&computerSelection=="Seasor")
    {
        console.log('Congratulations!, You win  : Rock beats Seasor ')
        
    }
    else if(playerSection=="Rock"&&computerSelection=="Paper")
    {
        console.log('OOPs!, Computer  win  : paper beats Rock ')
        
    }
    else {
        console.log("Something happened You didn't code well ")
    }
    


};
playRound(playerSection, computerSelection);
console.log("computer selection is:"+computerSelection)
// function game(){
//     for(let i=0;i<5;i++){
//         playRound(playerSection, computerSelection);
    
    
// }
// if(cs>ys){
//     console.log(`computer wins ${cs} times ` )
// }
// else
// console.log(`you wins ${ys} times`)}
// game();