const adviceNumber = document.querySelector('#advice');
const statement = document.querySelector('.statement');
const btn = document.querySelector('.circle')


btn.addEventListener('click', getAdvice)

 function getAdvice(){
      fetch('https://api.adviceslip.com/advice')
          .then(value => value.json())
        .then(data => {
             adviceNumber.innerHTML =  `<h3> Advice #${data.slip.id}</h3>`
            statement.innerHTML = ` ${data.slip.advice} `
     })
 }

 window.onload = () => {
	getAdvice()
}