let buttonNumber = document.querySelector('#number')
let buttonResult = document.querySelector('#result')

let number1 = ''
let number2 = ''
let operator = ''

function number(number) {

  switch (number) {
    case '00':
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      buttonNumber.innerText = buttonNumber.innerText + number  
      break
    case ',':
      if(buttonNumber.innerText.includes(',')) {
        break
      }else {
        buttonNumber.innerText = buttonNumber.innerText + number
        break
      }
    case '+':
      number1 = buttonNumber.innerText
      operator = number
      buttonResult.innerText = `${buttonNumber.innerText} ${number}`
      buttonNumber.innerText = ''
      break
    case '-':
      number1 = buttonNumber.innerText
      operator = number
      buttonResult.innerText = `${buttonNumber.innerText} ${number}`
      buttonNumber.innerText = ''
      break
    case '*':
    case 'x':
      number1 = buttonNumber.innerText
      operator = 'x'
      buttonResult.innerText = `${buttonNumber.innerText} ${operator}`
      buttonNumber.innerText = ''
      break
    case '/':
    case '÷':
      number1 = buttonNumber.innerText
      operator = '÷'
      buttonResult.innerText = `${buttonNumber.innerText} ${operator}`
      buttonNumber.innerText = ''
      break
    case 'Backspace':
    case '!':
      buttonNumber.innerText = buttonNumber.innerText.slice(0, -1)
      break
    case 'AC':
      buttonNumber.innerText = ''
      break
    case 'Escape':
    case 'C':
      buttonNumber.innerText = ''
      buttonResult.innerText = ''
      break
    case 'Enter':
    case '=':
      number2 = buttonNumber.innerText
      if(number1 != '' & operator != '' & number2 != ''){
        buttonResult.innerText = `${buttonResult.innerText} ${buttonNumber.innerText}`
        calculation(number1, operator, number2)
      } 
      break

  }
}


function calculation(n1, operator, n2) {

  n1 = n1.replace(',', '.')
  n2 = n2.replace(',', '.')
  switch (operator) {

    case '+':
      buttonNumber.innerText = parseFloat(n1) + parseFloat(n2)
      break
    case '-':
      buttonNumber.innerText = parseFloat(n1) - parseFloat(n2)
      break
    case 'x':
      buttonNumber.innerText = parseFloat(n1) * parseFloat(n2)
      break
    case '÷':
      buttonNumber.innerText = parseFloat(n1) / parseFloat(n2)
      break
  }
  buttonNumber.innerText = buttonNumber.innerText.replace('.', ',')
  
}


addEventListener('click', function(event) {
  if(buttonNumber.innerText.length <= 15 & buttonResult.innerText.length <= 30){
    number(event.target.innerText)
  } else {
    alert("Número não suportado.")
    buttonNumber.innerText = ''
    buttonResult.innerText = ''
  }
})

addEventListener('keydown', function(e) {
  e.preventDefault()
  if(buttonNumber.innerText.length <= 15 & buttonResult.innerText.length <= 30){
    number(e.key)
  } else {
    alert("Número não suportado.")
    buttonNumber.innerText = ''
    buttonResult.innerText = ''
  }

})