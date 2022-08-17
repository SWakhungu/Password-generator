const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// for generating random passwords and rendering them in two field options
let btnEl = document.getElementById("btnel");
let btnEl2 = document.getElementById("btnel2");
let passwordLength = 12;

function getRandomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar]
}

function generateRandomPassword(){
    let randomPassword = " ";
    let randomPassword2 = " ";
    for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter();
        randomPassword2 += getRandomCharacter()
    }
    btnEl.textContent = randomPassword;
    btnEl2.textContent = randomPassword2;
    return randomPassword
}

const generatedPasswordOne = generateRandomPassword();
console.log("Here is a random password: ", generatedPasswordOne)

const generatedPasswordTwo = generateRandomPassword();
console.log("Your random password is: ", generatedPasswordTwo)

// for copying the generated password to clipboard
let buttonEl = document.getElementById("btnel")
let buttonEl2 = document.getElementById("btnel2")

buttonEl.addEventListener("click", async() =>{
    await
    navigator.clipboard.writeText(buttonEl.textContent);
    buttonEl.innerText = "Copied";
    setTimeout(() => (buttonEl.innerText = " "), 1000);
});

buttonEl2.addEventListener("click", async() =>{
    await
    navigator.clipboard.writeText(buttonEl2.textContent);
    buttonEl2.innerText = "Copied";
    setTimeout(() => (buttonEl2.innerText = " "), 1000);
});