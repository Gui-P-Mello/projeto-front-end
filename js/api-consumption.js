document.addEventListener('DOMContentLoaded', function () {
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonName = document.querySelector('.pokemon__name');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonType1 = document.querySelector('.pokemon__type1');
const pokemonType2 = document.querySelector('.pokemon__type2');
const pokemonHP = document.querySelector('.hp');
const pokemonAttack = document.querySelector('.attack');
const pokemonDefense = document.querySelector('.defense');
const pokemonSAttack = document.querySelector('.special__attack');
const pokemonSDefense = document.querySelector('.special__defense');
const pokemonSpeed = document.querySelector('.speed');
const pokemonHeight = document.querySelector('.pokemon__height');
const pokemonWeight = document.querySelector('.pokemon__weight');
const pokemonPrice = document.querySelector('.pokemon__price');
const pokemonForm = document.querySelector('#pokemon__form');
const pokemonInput = document.querySelector('.pokemon__search');

// const pokemon1Image = document.querySelector('.pokemon1__image');
// const pokemon1Number = document.querySelector('.pokemon1__number');
// const pokemon1Name = document.querySelector('.pokemon1__name');
// const pokemon1Type1 = document.querySelector('.pokemon1__type1');
// const pokemon1Type2 = document.querySelector('.pokemon1__type2');
// const pokemon1Price = document.querySelector('.pokemon1__price');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    console.log(data);
    pokemonNumber.innerHTML = '#' + data.id;
    let cap = data.name[0].toUpperCase();
    let name = cap+data.name.slice(1);
    pokemonName.innerHTML = name;
    if(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']===null){
        pokemonImage.src = data['sprites']['front_default'];
    }
    else{
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];  
    }

    pokemonType1.innerHTML = data['types']['0']['type']['name'];
    if(data['types']['1']!=null){
        pokemonType2.innerHTML = data['types']['1']['type']['name'];
    }
    else{
        pokemonType2.innerHTML = " ";
    }
    pokemonHP.innerHTML = "HP: " + data['stats']['0']['base_stat'] + data['stats']['0']['effort'];
    pokemonAttack.innerHTML = "Attack: " + data['stats']['1']['base_stat'] + data['stats']['1']['effort'];
    pokemonDefense.innerHTML = "Defense: " + data['stats']['2']['base_stat'] + data['stats']['2']['effort'];
    pokemonSAttack.innerHTML = "SA: " + data['stats']['3']['base_stat'] + data['stats']['3']['effort'];
    pokemonSDefense.innerHTML = "SD: " + data['stats']['4']['base_stat'] + data['stats']['4']['effort'];
    pokemonSpeed.innerHTML = "Speed: " + data['stats']['5']['base_stat'] + data['stats']['5']['effort'];
    pokemonHeight.innerHTML = data.height + " m";
    pokemonWeight.innerHTML = data.weight + " kg";
    let price = 0;
    for (let i = 0; i < 6; i++) {
        price+= data['stats'][i]['base_stat'] + data['stats'][i]['effort'];
    }

    pokemonPrice.innerHTML = "<img src='./img/pokedolar.png' style='width:9px'>" + price;
}

pokemonForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(pokemonInput.value.toLowerCase());
});


renderPokemon('2');


// const renderPokemonCarrosel = async () => {
//     const data = await fetchPokemon('823');
//     console.log(data);
//     data.id === null?console.log("id nulo!!!"):console.log(data.id);
//     pokemon1Number.innerHTML = '#' + data.id;
//     let cap = data.name[0].toUpperCase();
//     let name = cap+data.name.slice(1);
//     pokemon1Name.innerHTML = name;
//     if(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']===null){
//         pokemon1Image.src = data['sprites']['front_default'];
//     }
//     else{
//         pokemon1Image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];  
//     }

//     pokemon1Type1.innerHTML = data['types']['0']['type']['name'];
//     if(data['types']['1']!=null){
//         pokemon1Type2.innerHTML = data['types']['1']['type']['name'];
//     }
//     else{
//         pokemon1Type2.innerHTML = " ";
//     }
//     // pokemonHP.innerHTML = "HP: " + data['stats']['0']['base_stat'] + data['stats']['0']['effort'];
//     // pokemonAttack.innerHTML = "Attack: " + data['stats']['1']['base_stat'] + data['stats']['1']['effort'];
//     // pokemonDefense.innerHTML = "Defense: " + data['stats']['2']['base_stat'] + data['stats']['2']['effort'];
//     // pokemonSAttack.innerHTML = "SA: " + data['stats']['3']['base_stat'] + data['stats']['3']['effort'];
//     // pokemonSDefense.innerHTML = "SD: " + data['stats']['4']['base_stat'] + data['stats']['4']['effort'];
//     // pokemonSpeed.innerHTML = "Speed: " + data['stats']['5']['base_stat'] + data['stats']['5']['effort'];
//     // pokemonHeight.innerHTML = data.height + " m";
//     // pokemonWeight.innerHTML = data.weight + " kg";
//     let price = 0;
//     for (let i = 0; i < 6; i++) {
//         price+= data['stats'][i]['base_stat'] + data['stats'][i]['effort'];
//     }

//     pokemon1Price.innerHTML = "$" + price;
// }

// renderPokemonCarrosel();
});