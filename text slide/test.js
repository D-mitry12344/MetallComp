

let Block = document.querySelector('.block');

/*
for(let i = 0 ; i<masBlocks.length ;i++){
	let e= i+1;
	if(masBlocks[i].classList[1] === 'block-active'){
	 
  		
  			console.log(scol)
  			return scol;
  		}
  	}*/
/*et scol = 1;
document.addEventListener('wheel',(event)=>{
  			scol++; 
  			
  			if(scol > 10 ){
  				masBlocks[0].classList.add('block-active');
  				masBlocks[0].classList.remove('block');

 			}else{
 				masBlocks[0].classList.add('block');
  				masBlocks[0].classList.remove('block-active')
 			}if(scol > 20){
  				scol=0;
  			}
 			return scol;
})
*/


    if (Block.addEventListener) {
       Block.addEventListener("mousewheel", onWheel);
    } else { 
      Block.attachEvent("onmousewheel", onWheel);
    }
    let number=0;
    function onWheel(e) {
      var delta = e.deltaY;

      number = number + delta
      console.log(number) 
      if(number > 100 && number< 800 || number>1500 && number <2500 || number< -100 && number> -800 || number<-1500 && number>-2500){
      	 Block.classList.add('block');
  		Block.classList.remove('block-active')
      }else{
      	Block.classList.add('block-active');
  		Block.classList.remove('block');
  		if(number === 3500 || number === -3500){
  			number=0;
  		}
      }
     return number		
    }