const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    
    counter.innerHTML = '0';

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerHTML;

        const increment = target / 100;
      
        if(c < target){
            counter.innerHTML = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1000)
        }else{
            counter.innerHTML = target;
        }
    }

    updateCounter()
});