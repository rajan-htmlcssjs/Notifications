const notiButton = document.getElementById('noti-btn')
const notiContainer = document.getElementById('notification-container')
// const totalNotification = document.querySelectorAll('notification')

let totalNotification = 0

notiButton.addEventListener('click',()=>{
    totalNotification++
    const notiEl = document.createElement('div')
    notiEl.classList.add('notification')
    notiEl.innerText = `Noti number ${totalNotification}`
    notiContainer.append(notiEl)

    setTimeout(()=>{
        notiEl.remove()
    },3000)
})