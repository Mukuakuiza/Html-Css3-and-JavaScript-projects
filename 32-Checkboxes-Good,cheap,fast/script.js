const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach((toggle)=> {
    toggle.addEventListener('change', (e)=> doTheTrick(e.target))
})


function doTheTrick(clickedToggle){

    if(good.checked && cheap.checked && fast.checked){
        if(good === clickedToggle){
            fast.checked = false;
        }

        if(cheap === clickedToggle){
            good.checked = fast;
        }

        if(fast === clickedToggle){
            cheap.checked = false;
        }
    }
}