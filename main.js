  const card=document.getElementsByClassName("box")

  let hamle = 20;
  var score = 0;
  

  for(var i=0;i<card.length;i++){
    card[i].addEventListener("click",flipCard, {once : true});
  }

   function flipCard(){
    this.classList.toggle("flipCard");
 }

 function scoreArttir() {
  
  score = score + 10;
  document.getElementById("scoreCount").innerHTML=score;
  document.querySelector(".scre").innerHTML=score;
  console.log(score + "score");
  if(score==120){
    document.querySelector('.gameOver').style.display='block';
    alert('Tebrikler Hepsini Buldun:)')
  }
      
}
function degistir(){
  document.getElementById("score").innerHTML = `Success! Score: <a id="scoreCount"> </a>`;
  document.getElementById("scoreCount").innerHTML=  score;
  
}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function ikili(dizi){
    shuffle(dizi);
    return[dizi[0],dizi[1]];
} 

let ilkSira = ikili([1, 2, 3, 4, 5, 6]);
let ikiSira = ikili([7, 8, 9, 10, 11, 12]);
let ucSira = ikili([13,14,15,16,17,18]);
let dortSira = ikili([19,20,21,22,23,24]);
let besSira = ikili([25,26,27,28,29,30]);
let altiSira = ikili([31,32,33,34,35,36]);


let gemiler = [...ilkSira, ...ikiSira, ...ucSira, ...dortSira, ...besSira, ...altiSira];

console.log(gemiler)


document.querySelectorAll('.box').forEach(i => {
  i.addEventListener('click', (element) => { 
    
    console.log('tiklandi')
    

    hamle = hamle - 1;
    document.getElementById("moveCount").innerHTML = hamle;

    if ( hamle == 0 ){
      document.querySelector('.boxes').style.pointerEvents = 'none';
      
      
      setTimeout(() => {
        document.getElementById("move").innerHTML="Game Over";
        document.querySelector('.gameOver').style.display='block';
        document.querySelector('.gameOver').style.pointerEvents='auto';
      }, 1000);
      
    }   
    
   
     let tiklananID = parseInt(element.target.id.replace('box', ''));
     if(gemiler.includes(tiklananID)){
      
        element.target.innerHTML = `<img src="./gemi.png" />`;
        element.target.style.boxShadow = 'inset 0px 0px 0px 4px #070F7C';
        element.target.style.backgroundColor='#6495ed';
        element.target.style.opacity='0.72';
        scoreArttir();
        degistir();
     }
     if(!gemiler.includes(tiklananID)) {
        element.target.style.opacity='0.22'; 
     }
        
      
        },{once : true});
      
       });
      

       
