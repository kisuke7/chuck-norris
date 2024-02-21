const CHUCK_API = "https://api.chucknorris.io/jokes/random";

const memetext = document.getElementById("meme");

const btn = document.getElementById("button");

btn.addEventListener('click', getjoke);

async function getjoke(){
    const jokeData = await fetch(CHUCK_API);
    const jokeObj = await jokeData.json();
    console.log(jokeObj);
    memetext.innerText = jokeObj.value
}