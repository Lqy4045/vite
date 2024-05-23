import compomentA from  './a.compoment.module.css'
console.log('compmentA',compomentA)
const div = document.createElement('div')
div.className = compomentA.footer
document.body.appendChild(div)