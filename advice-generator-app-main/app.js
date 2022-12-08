const adviceNo = document.querySelector(".advice-no")
const adviceText = document.querySelector(".advice-text")
const adviceBtn = document.querySelector(".generate-advice")




// fetch("https://api.adviceslip.com/advice")
//       .then((response) => response.json())
//       .then((data) => console.log(data))

async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()
    adviceText.innerHTML = `"${data.slip.advice}"`
    adviceNo.innerHTML = `ADVICE #${data.slip.id}`           
}

getAdvice()

adviceBtn.addEventListener('click', getAdvice)