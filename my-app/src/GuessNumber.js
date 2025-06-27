function guess(props){
    let randomNum = Math.floor(Math.random()*3 + 1);
    console.log(randomNum);
    let userNum = prompt("Enter the number: ");
    alert(`Entered number: ${userNum} Random number: ${randomNum}`);
}

export default guess;