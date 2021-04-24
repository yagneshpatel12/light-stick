function linemovement(){
    const main = document.getElementById('main')
    const line = document.getElementById('line')
    const text = document.getElementById('text')
    main.addEventListener('mousemove', (e) => {
            
        console.log(e.pageX + ' ' + e.pageY)
        if (e.pageX > 300 && e.pageX < 730) {
            if (e.pageX > 437 && e.pageX < 537) {
                text.innerHTML = ` we wil Show <br> Your hidden<br>Tallents`
            }
            else {
                text.innerHTML = ` we wil Show <br> Your <br>Tallents`
            }
            const margin = e.pageX - 270;
            line.style.left = `${margin}px`
        }
    
    })

}
function downclick(){
    const main = document.getElementById('main')

        down.style.display = 'none'
        main.style.animation = `ani1 2s`
        main.innerHTML = ``
        const node = document.createElement('div')
        node.setAttribute('id', 'main2')
        left.append(node)
        const main2 = document.getElementById('main2');
        main2.style.animation = `ani2 2s`
    
        setTimeout(() => {
            left.innerHTML = `<div id='main2'><p id ='return'>Return</p><h1>Hotel business</h1>
            <img src="img3.jpg"  id="hotel" alt=""></div>`
            const main2 = document.getElementById('main2');
            main2.classList.add('center')
        }, 1500);

}
function returnclick(){

    const main2 = document.getElementById('main2')
   
        main2.style.animation = 'ani2left 2s';
        main2.innerHTML=``
        const node = document.createElement('div')
        node.setAttribute('id', 'main')
        left.append(node)
        const main = document.getElementById('main')
        main.style.animation=`ani1left 2s`
        setTimeout(() => {
            left.innerHTML=` <div id="main">
            <div id="line"></div>
            <div id="text">we wil Show <br> Your <br>Tallents</div>
            <div id="text2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quae consequatur </div>
        </div>
        <img src="img2.jpg" id='down' onclick='playani()' alt="">
        <img src="img.png" id="play" onclick='playani()' alt="">`
        const down = document.getElementById('down')
        const play = document.getElementById('play')
        play.style.display='block';
        down.style.display='block';
        playani()
    },1500)

}
function playani(){

const play = document.getElementById('play')

const down = document.getElementById('down')


play.addEventListener('click', () => {
    play.style.display = 'none';
    linemovement();
    down.addEventListener('click', () => {
        downclick()
        setTimeout(() => {
            const return1 = document.getElementById('return')
            return1.addEventListener('click', () => {
            returnclick()
            })
        }, 1600);
    })

    
})
}
 playani()
