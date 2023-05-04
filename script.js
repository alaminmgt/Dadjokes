// GET https://icanhazdadjoke.com/

// const jokes = document.getElementById("jokes");
// const jokesBtn = document.getElementById("jokesBtn");

//  const setheader = {
//      headers : {
//         Accept: "application/json"
//      }
//  }

// const generateJokes = () => {
//     fetch("https://icanhazdadjoke.com/",setheader)
//     .then( (res) => res.json())
//     .then( (data) => {
//         jokes.innerHTML = data.joke;  
//     })
//     .catch( (error) => {
//         console.log(error);
//     })
// }

const jokes = document.getElementById("jokes");
const jokesBtn = document.getElementById("jokesBtn");

const generateJokes = async () => {

    const setheader = {
        headers : {
           Accept: "application/json"
        }
    }
    try {
        const res = await fetch("https://icanhazdadjoke.com/",setheader);
        const data = await res.json();
        jokes.innerHTML = data.joke;  
    } catch (error) {
        console.log(`The error is ${error}`);
    }  
}

jokesBtn.addEventListener("click",generateJokes);
generateJokes();