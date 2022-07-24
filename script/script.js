var root = document.querySelector(".root");
var nome =document.querySelector("#nome");

var img = document.getElementById("img");
const BaixarAparenciaApiSuperHero = async()=>{
     const result= await fetch(`https://akabab.github.io/superhero-api/api/id/`+Math.floor((Math.random()*100)+1).toFixed(0)+`.json`);
       const json = await result.json();
       console.log(json);
       nome.innerHTML = json.name;
       
    img.src =json.images.md
}