const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg');

let load = 0;


 const blurring = ()=>{
     load++;

     if(load > 99){
         clearInterval(value)
         
     }

   loader();
   blurringImg()
 }

 let value = setInterval(blurring, 30);


 const loader = ()=>{
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
 }

 const blurringImg = ()=>{
     bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
 }
 const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }