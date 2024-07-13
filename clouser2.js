const app = () =>{
    const myDiv = document.getElementById('myDiv')
    const allDivs  = Array.from(document.getElementsByTagName('div'))
    const myElementsByClassName = Array.from(document.getElementsByClassName('MyClass'))
    const myDivQ = document.querySelector(`#myDiv`)
    const myDivsQ = document.querySelectorAll('.MyClass')
    console.log(myDivsQ.forEach(e => e.style.backgroundColor = 'red'));

    myDivQ.style.backgroundColor = 'green'
    // myElementsByClassName.forEach((element, index) => element.style.backgroundColor='pink')
    // allDivs.forEach((div, index)=>div.innerText = index)
}

window.addEventListener('load', app)

//live collections vs static collections