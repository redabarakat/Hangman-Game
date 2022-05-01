// hoisting => default beahviour in java of moving declartions to the top od script  variables => var *** declartions functions

// document.addEventListener("contextmenu",function(e){
//     e.preventDefault()
// })

/*----------------------------------------------------------------------------------------------*/
// const nums = new Set();
// while (nums.size !== 20) {
//   nums.add(Math.floor(Math.random() * 20) + 1);
// }
// console.log(Array.from(nums));

// sweet alart  // title , text , icons 
// swal({
//     title:"reda barak",
//     text:"front end developer",
//     icon:"success",
//     buttons:["Yes","NO"],
//     // timer:2000,
//     className:"sw"
// // })
// swal.fire({
//     title:"reda barakat",
//     text:"front end developer",
// })
/********************************************************************* */
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters)

let lettercontainer = document.querySelector(".letters")

lettersArray.forEach(letter => {
    lettercontainer.innerHTML += `<span class="letter-box">${letter}</span>`
})

let words = {
    programming:["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies:["pretige","inception","parasite","interstellar","whiplash","memento","coco","up"],
    people:["Albert Einstein", "Hitchcock", "Alexander", "cleopartra", "Mahatma Ghandi"],
    counteries:["Egypt","Syria","Palestine","Yemen","Bahrain","Qatar"]
}

let keysName = Object.keys(words)
let randomNumKeys = Math.floor(Math.random() * keysName.length)
let randomKey = keysName[randomNumKeys]

let vlauesName = words[randomKey]
let randomNumValue = Math.floor(Math.random() * vlauesName.length)
let randomValue = vlauesName[randomNumValue]

document.querySelector(".game-info .category span").innerHTML = randomKey
let letterGuess = document.querySelector(".leteters-guess")

let arrayValue = Array.from(randomValue)
arrayValue.forEach((letter) => {
    let span = document.createElement("span")
    if(letter === " ") {
        span.className ="with-space"
    }
    letterGuess.appendChild(span)
})

let hangmanDraw = document.querySelector(".hangman-draw");
let tryes = document.querySelector(".try span")
let wrongTries = 0;
document.addEventListener("click",function(e){
    let status = false;
    if(e.target.classList.contains("letter-box")){
        e.target.classList.add("clicked")
        let clickedLetter = e.target.innerHTML
        arrayValue.forEach((word , index) => {
            if(clickedLetter == word.toLowerCase()){
                status = true;
                document.querySelector("#win").play()
                e.target.style.cssText = `background:#e91e63c7;opacity: 1;`
                let spanArray = document.querySelectorAll(".leteters-guess span")
                spanArray[index].innerHTML = word
                spanArray[index].classList.add("choise")
                let choiseArry = Array.from(spanArray).filter(function(span){
                    return span.classList.contains("choise")
                })
                if(arrayValue.length === choiseArry.length){
                    success()
                }
            }
        })
        if(status !== true){
            wrongTries++; // 
            tryes.innerHTML--;
            hangmanDraw.classList.add(`wrong-${wrongTries}`)
            if( tryes.innerHTML === "0") {  // 8 7 6 5 4 3 2 1 0
                lettercontainer.classList.add("over")
                endGame()
            }
            
        }
    }
})

function endGame(){
    let lose = document.getElementById("lose").play()
    swal.fire({
        title:"Game over",
        text:`The word is ${randomValue}`,
        icon:"error",
        confirmButtonText: "play again",
        showCancelButton:true,
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload()
        } else {
            Swal.fire({
                title:"Good bye",
                showCancelButton:false,
                icon:"info"
            }) 
        }
    })
}

function success(){
    lettercontainer.classList.add("over")
    let over = document.getElementById("over").play()
    if(wrongTries === 0) {
        swal.fire({
            title:"Exenllent",
            text:`The word is ${randomValue}`,
            icon:"success",
            footer: `Wrong tries = ${wrongTries}`,
            confirmButtonText: "play again",
            showCancelButton:true,
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload()
            } else {
                Swal.fire({
                    title:"Good bye",
                    showCancelButton:false,
                    icon:"info"
                }) 
            }
        })
    } else if (wrongTries > 0 && wrongTries < 5) {
        swal.fire({
            title:"Good",
            text:`The word is ${randomValue}`,
            icon:"success",
            footer: `Wrong tries = ${wrongTries}`,
            confirmButtonText: "play again",
            showCancelButton:true,
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload()
            } else {
                Swal.fire({
                    title:"Good bye",
                    showCancelButton:false,
                    icon:"info"
                }) 
            }
        })
    } else if (wrongTries > 4 && wrongTries < 9) {
        swal.fire({
            title:"Not bad",
            text:`The word is ${randomValue}`,
            icon:"success",
            footer: `Wrong tries = ${wrongTries}`,
            confirmButtonText: "play again",
            showCancelButton:true,
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload()
            } else {
                Swal.fire({
                    title:"Good bye",
                    showCancelButton:false,
                    icon:"info"
                }) 
            }
        })
    }
    
}