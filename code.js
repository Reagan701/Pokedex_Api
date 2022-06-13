let container = document.getElementById("mainContainer");
let numberOfFetchedPokémon = 15;

async function fetchData(){
    let result = await fetch('https://pokeapi.co/api/v2/pokedex/2/');
    let data = await result.json();
    let pokemon = [];
    for(let i = 0; i <numberOfFetchedPokémon;i++){
        let pokemondata = await fetch(data.pokemon_entries[i].pokemon_species.url);
        let pData = await pokemondata.json();
        pokemon.push(pData);
    }
    return pokemon
}

async function fetchPokéData(){
    let result = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let data = await result.json();
    let pokemon = [];
    for(let i = 0; i <numberOfFetchedPokémon;i++){
        let pokemondata = await fetch(data.results[i].url);
        let pData = await pokemondata.json();
        pokemon.push(pData);
    }
    return pokemon;
}

async function display(){
    let newPokemon = await fetchData();
    let pokeInfo = await fetchPokéData();
    console.log(newPokemon);
    console.log(pokeInfo);
    for(let i = 0; i < Math.ceil(newPokemon.length/3); i++){
        let newRow = document.createElement('div');
        newRow.className = "row my-5";
        newRow.id = i; 
        container.appendChild(newRow);
    }
    for(let i = 0; i < newPokemon.length;i++){
        if(i<3){
            container = document.getElementById('0');
            container.innerHTML +=
            `<div class="col-md-4">
                <div id="border" class="card w-100">
                    <img id="cardImage" class="img-fluid" src="${pokeInfo[i].sprites.front_default}" alt="">
                    <div id="cardBody" class="text-white card-body">
                    <h5 class="card-title"> ${newPokemon[i].name.charAt(0).toUpperCase() + newPokemon[i].name.substring(1)} </h5>
                        <ul class="list-unstyled">
                            <li> Weight: ${pokeInfo[i].weight} </li>
                            <li> Height: ${pokeInfo[i].height} </li>
                            <li> Type: ${pokeInfo[i].types[0].type.name.charAt(0).toUpperCase() + pokeInfo[i].types[0].type.name.substring(1)} </li>
                        </ul>
                        <p class="card-text">${newPokemon[i].flavor_text_entries[1].flavor_text}</p>
                    </div>
                </div>
            </div>`
        }else if(i>=3 && i<6){
            container = document.getElementById('1');
            container.innerHTML +=
            `<div class="col-md-4">
            <div id="border" class="card w-100">
                <img id="cardImage" class="img-fluid" src="${pokeInfo[i].sprites.front_default}" alt="">
                <div id="cardBody" class="text-white card-body">
                <h5 class="card-title"> ${newPokemon[i].name.charAt(0).toUpperCase() + newPokemon[i].name.substring(1)} </h5>
                    <ul class="list-unstyled">
                        <li> Weight: ${pokeInfo[i].weight} </li>
                        <li> Height: ${pokeInfo[i].height} </li>
                        <li> Type: ${pokeInfo[i].types[0].type.name.charAt(0).toUpperCase() + pokeInfo[i].types[0].type.name.substring(1)} </li>
                    </ul>
                    <p class="card-text">${newPokemon[i].flavor_text_entries[1].flavor_text}</p>
                </div>
            </div>
        </div>`
        }else if(i>=6 && i<9){
            container = document.getElementById('2');
            container.innerHTML +=
            `<div class="col-md-4">
            <div id="border" class="card w-100">
                <img id="cardImage" class="img-fluid" src="${pokeInfo[i].sprites.front_default}" alt="">
                <div id="cardBody" class="text-white card-body">
                <h5 class="card-title"> ${newPokemon[i].name.charAt(0).toUpperCase() + newPokemon[i].name.substring(1)} </h5>
                    <ul class="list-unstyled">
                        <li> Weight: ${pokeInfo[i].weight} </li>
                        <li> Height: ${pokeInfo[i].height} </li>
                        <li> Type: ${pokeInfo[i].types[0].type.name.charAt(0).toUpperCase() + pokeInfo[i].types[0].type.name.substring(1)} </li>
                    </ul>
                    <p class="card-text">${newPokemon[i].flavor_text_entries[1].flavor_text}</p>
                </div>
            </div>
        </div>`
        }else if(i>=9 && i<12){
            container = document.getElementById('3');
            container.innerHTML +=
            `<div class="col-md-4">
            <div id="border" class="card w-100">
                <img id="cardImage" class="img-fluid" src="${pokeInfo[i].sprites.front_default}" alt="">
                <div id="cardBody" class="text-white card-body">
                <h5 class="card-title"> ${newPokemon[i].name.charAt(0).toUpperCase() + newPokemon[i].name.substring(1)} </h5>
                    <ul class="list-unstyled">
                        <li> Weight: ${pokeInfo[i].weight} </li>
                        <li> Height: ${pokeInfo[i].height} </li>
                        <li> Type: ${pokeInfo[i].types[0].type.name.charAt(0).toUpperCase() + pokeInfo[i].types[0].type.name.substring(1)} </li>
                    </ul>
                    <p class="card-text">${newPokemon[i].flavor_text_entries[1].flavor_text}</p>
                </div>
            </div>
        </div>`
        }else if(i>=12 && i<15){
            container = document.getElementById('4');
            container.innerHTML +=
            `<div class="col-md-4">
            <div id="border" class="card w-100">
                <img id="cardImage" class="img-fluid" src="${pokeInfo[i].sprites.front_default}" alt="">
                <div id="cardBody" class="text-white card-body">
                <h5 class="card-title"> ${newPokemon[i].name.charAt(0).toUpperCase() + newPokemon[i].name.substring(1)} </h5>
                    <ul class="list-unstyled">
                        <li> Weight: ${pokeInfo[i].weight} </li>
                        <li> Height: ${pokeInfo[i].height} </li>
                        <li> Type: ${pokeInfo[i].types[0].type.name.charAt(0).toUpperCase() + pokeInfo[i].types[0].type.name.substring(1)} </li>
                    </ul>
                    <p class="card-text">${newPokemon[i].flavor_text_entries[1].flavor_text}</p>
                </div>
            </div>
        </div>`
        }
    }
}

fetchData();
fetchPokéData();
display();