console.log("main.js is loading...");

const ulist = document.querySelector("ul");
fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    .then((Response) => Response.json())
    .then((data) => {
    console.log("ontvangen data is: ", data);

    const pokemons = data.results;
    for (let i = 0; i < pokemons.length; i++) {
      const p = pokemons[i];
       ulist.innerHTML += `<li>${p.name}</li>`;
    }
} );