
const theBody = document.body;
theBody.style.backgroundColor = "#002339";
theBody.style.color = "white";
theBody.style.fontFamily = 'Roboto','Poppins, sans-serif';
const headingOne = document.querySelector("h1");
headingOne.style.fontWeight = '500';



// Started password generating process from here...


const passwordBox = document.getElementById("pass");

const sizeOfPass = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^~!&*<>/?_'(;)}{[]:"

const sumOfAll = upperCase + lowerCase + numbers + symbols;

function getPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * numbers.length)];
    password += numbers[Math.floor(Math.random() * symbols.length)];
    password += symbols[Math.floor(Math.random() * lowerCase.length)];
    password += lowerCase[Math.floor(Math.random() * upperCase.length)];
    
    while(sizeOfPass>password.length){
        password +=  sumOfAll[Math.floor(Math.random() * sumOfAll.length)];
    }
    passwordBox.value = password;
}

// Started the copy button working process from here...

function selectAndCopy(){
        passwordBox.select();
        document.execCommand("copy");
        if(passwordBox.value == 0){
            alert(' Click on the Generate button to get a Strong password for you ');
        }
}
