const fetchPokemon = () => {
    const pokeName=document.getElementById('pokeName');
    let pokeInput=pokeName.value;


  const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  fetch(url).then((res) => {
      if(res.status !="200"){
          console.log(res);
          pokeImage('https://www.nintenderos.com/wp-content/uploads/2021/04/pikachu-pokemon.jpg')


      }
      else{
        console.log(res);
      return res.json();
      }
      
  }).then((data) => {
      console.log(data);
      let pokeImg = data.sprites.front_default;
      
      pokeImage(pokeImg);
      
          
      
  })

    };



fetchPokemon();


const pokeImage=(url)=>{
    const pokeImg=document.getElementById('pokeImg');
    pokeImg.src=url;

}



const imprimir = () => {
    const pokeName=document.getElementById('pokeName');
    let pokeInput=pokeName.value;

    console.log("Hola mundo " +pokeInput);
  
}