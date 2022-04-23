const date = document.querySelector('#input-date');
const input = document.querySelector('#input-number');
const btn = document.querySelector('#btn');
const output = document.querySelector('#outputBox');


btn.addEventListener('click' , luckynumber);
console.log("clicked");

function luckynumber(){
    const dob =(date.value);
    const number = input.value
    console.log(dob)
    const sum = calculateSum(dob)
    console.log(sum);
    // const total = sum % (number) ;
    // console.log(total)
    if(sum % number === 0){
        console.log('Your birthday is lucky')
        output.innerHTML = `Your birthday is Lucky`;
    }else{
        console.log("Your birthday is not lucky so sad")
        output.innerHTML = `Your birthday is not Lucky , So sad`;
    }
}
function calculateSum(dob){
    dob = (dob.replaceAll('-' , '') );
    console.log(dob)
    let sum = 0;
    for(let digit of dob ) {
        sum = sum + Number(digit)  ;  
    };
    return sum;
}
