const app = () =>{
    const paragraphs = document.querySelectorAll('p')
    console.log(paragraphs, 'Before Update');
    const newParagraph = document.createElement('p')
    document.body.appendChild(newParagraph)
    newParagraph.innerText = 'P 4'
    console.log(paragraphs, 'After Update');
    const paragraphs1 = document.querySelectorAll('p')
    console.log(paragraphs1);
}
window.addEventListener('load', app)



//live collections vs static collections