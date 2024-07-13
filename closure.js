const app = () => {
// helepers  higher order function
    const createElement =(tagName, innerText, className) =>{
        
        const element = document.createElement(tagName)
        if (innerText){
            element.innerText = innerText
        }
        if (className) {
            element.className = className
        }
        return element
    }
    let count = 0;
  // references to html elements
  const incrementButton = document.getElementById('increment')
  const decrementButton = createElement('button', '-')
  const body = document.getElementById('body')
  const countPTag = createElement('p', count.toString())

  incrementButton.style.backgroundColor = 'red'
  decrementButton.style.backgroundColor = 'blue'

  // states
 

  // append or edit html element
// //   countPTag.innerText = count;
  body.appendChild(countPTag)
  body.appendChild(decrementButton)

  // all event handlers
  const increseCount = () => {
    count++
    countPTag.innerText = count
    console.log(countPTag)
  }

  const decrementCount = () => {
    count--
    countPTag.innerText = count
    console.log(countPTag)
  }

  // all addEvenetListenner methods
  incrementButton.addEventListener('click', increseCount)
  decrementButton.addEventListener('click', decrementCount)
}

window.addEventListener('load', app)