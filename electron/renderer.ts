window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
    const windowClose = document.querySelector('#window-close');
    console.log('window.close',windowClose)
    windowClose?.addEventListener('click', () => {
       
        //ipcRenderer.send('window-close')
    })
})