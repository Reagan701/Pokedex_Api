// Container used for appending rows to the HTML
let container = document.getElementById("mainContainer");

// Number of pokémon fetched from the API
let numberOfFetchedPokémon = 30;

// Function to fetch pokédex information
async function fetchData(){
    // Fetches the results from the API and converts it to JSON
    let result = await fetch('https://pokeapi.co/api/v2/pokedex/2/');
    let data = await result.json();

    // Initializes pokémon array
    let pokemon = [];

    // Loops through the requested number of pokémon and fetches more detailed information
    for(let i = 0; i <numberOfFetchedPokémon;i++){
        let pokemondata = await fetch(data.pokemon_entries[i].pokemon_species.url);
        let pData = await pokemondata.json();
        // Adds to the pokemon array
        pokemon.push(pData);
    }
    return pokemon
}

// Function that fetches all the pokémon types
async function fetchTypes(){
    let result = await fetch('https://pokeapi.co/api/v2/type');
    let data = await result.json();

    let types = [];

    for(let i = 0;i<data.count;i++){
        let typeData = data.results[i].name;
        types.push(typeData);
    }
    return types;
}

// Function to fetch pokémon specific information
async function fetchPokéData(){
    let result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    let data = await result.json();
    let pokemon = [];
    for(let i = 0; i <numberOfFetchedPokémon;i++){
        let pokemondata = await fetch(data.results[i].url);
        let pData = await pokemondata.json();
        pokemon.push(pData);
    }
    return pokemon;
}

function CreatePokémonHTML(newPokemon,pokeInfo,index,currentIteration,typeData){
    container = document.getElementById(index);
            container.innerHTML +=
            `<div class="col-md-4">
                <div id="border" class="card w-100">
                    <img id="cardImage" class="img-fluid" src="${pokeInfo[currentIteration].sprites.front_default}" alt="">
                    <div id="cardBody" class="text-white card-body">
                    <h5 class="card-title"> ${newPokemon[currentIteration].name.charAt(0).toUpperCase() + newPokemon[currentIteration].name.substring(1)} </h5>
                    <ul class="list-unstyled">
                            <li> Weight: ${pokeInfo[currentIteration].weight} </li>
                            <li> Height: ${pokeInfo[currentIteration].height} </li>
                            <li> Type: <button style="background-color:${chooseColor(pokeInfo[currentIteration].types[0].type.name,typeData)} " class="btn" id="" >${pokeInfo[currentIteration].types[0].type.name.charAt(0).toUpperCase() + pokeInfo[currentIteration].types[0].type.name.substring(1)} </button> </li>
                        </ul>
                        <p class="card-text">${newPokemon[currentIteration].flavor_text_entries[1].flavor_text}</p>
                    </div>
                </div>
            </div>`;
}

// Converts the type and color arrays into a 2 Dimensional array.
function convertTo2D(array1,array2){
    let i = -1;
    let result = [];
    while(array1[++i]){
        result.push([array1[i],array2[i]])
    }
    return convertTo(result);
}

// Then converts the 2D Array into an object

function convertTo(ar){
    let object = {};
    for(let i = 0; i<ar.length;i++){
        let key = ar[i][0];
        let value = ar[i][1];
        object[key] = value;
    }
    return object;
}

// Checks the corresponding value to the corresponding key in the object and returns a color

function chooseColor(pokeType,typeData){
    let result;
    if(typeData != undefined && typeData.hasOwnProperty(pokeType)){
        result = (typeData[pokeType]);
    }else if(pokeType == 'bug'){
        result = 'darkolivegreen';
    }
    return result;
}

// Initializes typeData object

async function manageTypes(){
    // Fetches the data from the API
    let types = await fetchTypes();
    // Creates an array of all possible colors
    let colors = ['silver', 'darkred','lightseagreen','purple', 'goldenrod','goldenrod','darkolivegreen', 'darkblue','gray','red','blue','green','yellow','magenta','cyan','royalblue', 'brown','pink', 'gray', 'darkmagenta'
    ];
    // Converts the two arrays into an object
    let newObject = convertTo2D(types,colors);
    return newObject;
}

// Function that creates rows and displays information in cards, in columns, in the rows
async function display(){
    // Calls the functions the already fetched information
    let newPokemon = await fetchData();
    let pokeInfo = await fetchPokéData();
    let typeData = await manageTypes();

    // Loop that creates rows per 3 pokemon requested, starting from zero. Math.ceil() returns the next highest integer
    for(let i = 0; i < Math.ceil(newPokemon.length/3); i++){
        // Creates div and applies the appropriate ID and classes
        let newRow = document.createElement('div');
        newRow.className = "row my-5";
        newRow.id = i;
        container.appendChild(newRow);
    }
    let currentIteration;

    for(let i = 0; i < newPokemon.length;i++){
        switch(true){
            case (i<3):
                currentIteration =i;
                CreatePokémonHTML(newPokemon,pokeInfo,0,currentIteration,typeData);
            break;
            case(i>=3 && i<6):
                currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,1,currentIteration,typeData);
            break;
            case(i>=6 && i<9):
            currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,2,currentIteration,typeData);
            break;
            case(i>=9 && i<12):
                currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,3,currentIteration),typeData;
            break;
            case(i>=12 && i<15):
            currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,4,currentIteration,typeData);
            break;
            case(i>=15 && i<18):
            currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,5,currentIteration,typeData);
            break;
            case(i>=18 && i<21):
            currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,6,currentIteration,typeData);
            break;
            case(i>=21 && i<24):
            currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,7,currentIteration,typeData);
            break;
            case(i>=24 && i<27):
            currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,8,currentIteration,typeData);
            break;
            case(i>=27 && i<30):
            currentIteration = i;
                CreatePokémonHTML(newPokemon,pokeInfo,9,currentIteration,typeData);
            break;
        }
    }
}

// Calls the function
display();