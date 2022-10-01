const btn = document.querySelector('#btn')
const toasts = document.querySelector('#toasts')

const messages = [
    'Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message 5'

]


const types = [
    'information', 'success', 'error'

]
btn.addEventListener('click', ()=> createNotification());


function createNotification(message = null, type = null){
    const notification = document.createElement('div')

    notification.classList.add('toast')
    notification.classList.add(type ? type : getRandomType())

    notification.innerHTML = message ? message : getRandomMessage()
    toasts.appendChild(notification)

    //set time to desapear from screen
    setTimeout(()=>{
        notification.remove()
    }, 3000)
}

function getRandomMessage(){
    return messages [Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
    return types [Math.floor(Math.random() * types.length)]
}