const panels = document.querySelectorAll('.panel');


const expandingCard = () =>{
    
    panels.forEach(panel =>{
        panel.addEventListener('click', () =>{
            removeActiveCard();
            panel.classList.add('active');
        })
    })

}

expandingCard();

const removeActiveCard = () =>{
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}