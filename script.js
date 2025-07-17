function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light') 


    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        // se tiver light mode
        img.setAttribute('src', './assets/avatar2.png')
    } else {
        // se não tiver light mode
        img.setAttribute('src', './assets/Avatar1.png')
    }

}