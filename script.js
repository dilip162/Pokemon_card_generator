const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };



  const url = " https://pokeapi.co/api/v2/pokemon/";

  const card=document.querySelector('.card')
  const btn=document.querySelector('.btn')


  function getPokeData(){
    // generate a random number between 1 and 150
    let id=Math.floor(Math.random()*150)+1;

    //combine the pokeapi with the pokimon id
    const finalUrl=url + id;

    //fetch the generated url
    fetch(finalUrl)
    .then((response)=>response.json())
    .then((data)=>generateCard(data))
  }



  // Generate the Cards
  function generateCard(data){
    // get necessary data and assign it to variables

  

    const hp=data.stats[0].base_stat
    const imgSrc=data.sprites.other.dream_world.front_default;
    const pokeName=data.name;
    const statAttack=data.stats[1].base_stat;
    const statDefence=data.stats[2].base_stat;
    const statSpeed=data.stats[5].base_stat;

    // set theme color on type of pokemon
    const themeColor=typeColor[data.types[0].type.name];

    console.log(imgSrc)
    
    card.innerHTML=`<p class="hp"><span>HP</span> ${hp}</p>

            <img src=${imgSrc} alt="">

            <h3 class="pok_name">${pokeName}</h3>

            <div class="types">
                
            </div>

            <div class="stats">
                <div>
                    <h2>${statAttack}</h2>
                    <p>Attack</p>
                </div>

                <div>
                    <h2>${statDefence}</h2>
                    <p>Defence</p>
                </div>

                <div>
                    <h2>${statSpeed}</h2>
                    <p>Speed</p>
                </div>
            </div>`;

        appendTypes(data.types)

        styleCard(themeColor)
  }

  function appendTypes(types){

    types.forEach((item)=>{
        let span=document.createElement('span')
        span.textContent=item.type.name;
        document.querySelector('.types').appendChild(span)
    })

  }


  

  function styleCard(color){
    console.log(color)
    card.style.background=`radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%);`
  }

  btn.addEventListener('click',getPokeData)

  window.addEventListener('load',getPokeData)