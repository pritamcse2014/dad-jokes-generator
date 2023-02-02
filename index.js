const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

const apiKey = "D5UwenhTQI/ntEII2z0jnA==BUwWfj4Mzz3BhuYJ";

const options = {
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke()
{
    try
    {
        jokeElement.innerText = "Updating....";
        btnElement.disabled = true;
        btnElement.innerText = "Loading....";

        const response = await fetch(apiURL, options)
        const data = await response.json();
        
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
        jokeElement.innerText = data[0].joke;
    }
    catch (error)
    {
        jokeElement.innerText = "An Error Happened";
        btnElement.disabled = false;
        btnElement.innerText = "Tell me a joke";
        console.error("Error", error);
    }
    // jokeElement.innerText = "Updating....";
    // btnElement.disabled = true;
    // btnElement.innerText = "Loading....";
    // const response = await fetch(apiURL, options)
    // const data = await response.json();
    // btnElement.disabled = false;
    // btnElement.innerText = "Tell me a joke";
    // jokeElement.innerText = data[0].joke;
}

btnElement.addEventListener("click", getJoke);