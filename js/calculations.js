
  let buttonNumber 
  let buttonResult 
  let operator = ""
  let number1 
  let number2
  let noRepeatOperator

  export function firtNumber(click){
    buttonNumber = document.querySelector('#number').innerText
    buttonResult = document.querySelector('#result').innerText
    if(buttonNumber == "0" && buttonNumber.length == 1 && click == ","){
      document.querySelector('#number').innerText = buttonNumber + click
    } else if(buttonNumber == "0" && buttonNumber.length == 1) {
      buttonNumber = "" 
      number(click)
    } else {
      number(click)
    }
  }
  
  function updateNumber(click){
    document.querySelector('#number').innerText = buttonNumber + click
    
  }

  function updateResult(click){
    buttonResult == "" ? document.querySelector('#result').innerText = `${buttonNumber} ${click}` : document.querySelector('#result').innerText = `${buttonResult} ${click}`
    document.querySelector('#number').innerText = ""
    
  }

  function deleteAll() {
    document.querySelector('#result').innerText = ""
    document.querySelector('#number').innerText = "0"
    number1 = ""
    number2 = ""
    operator = ""
    noRepeatOperator = false
  }

  function result() {
    document.querySelector('#number').innerText = buttonNumber.replace('.', ',')
    document.querySelector('#result').innerText = `${buttonResult}     ${number2.replace('.', ',')}`
    number1 = buttonNumber
    number2 = 0
    operator = ""
  }

  function number(click) {
    switch (click) {
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
        
        updateNumber(click) 
        noRepeatOperator = true
        break
      case ',':
        buttonNumber.includes(',') ? console.log("teste") : updateNumber(click)

        break
      case '+':
        if (noRepeatOperator & operator == ""){
          noRepeatOperator = false
          operator = '+'
          number1 = document.querySelector('#number').innerText
          updateResult('+') 
        }
        break
      case '-':
        if (noRepeatOperator & operator == ""){
          noRepeatOperator = false
          operator = '-'
          number1 = document.querySelector('#number').innerText
          updateResult('-') 
        }
        break
      case '*':
      case 'x':
        if (noRepeatOperator & operator == ""){
          noRepeatOperator = false
          operator = 'x'
          number1 = document.querySelector('#number').innerText
          updateResult('x') 
        }
        break
      case '/':
      case '÷':
        if (noRepeatOperator & operator == ""){
          noRepeatOperator = false
          operator = '÷'
          number1 = document.querySelector('#number').innerText
          updateResult('÷') 
        }
        break
      case 'Escape':
      case 'Delete':
        deleteAll()
        break
      case 'Enter':
      case '=':
        number2 = buttonNumber
        if(number1 != '' & operator != '' & number2 != ''){  
          calculatio() 
        } 
        break
  
    }
  }

  function calculatio() {
    number1 = number1.replace(',', '.')
    number2 = number2.replace(',', '.')

    switch (operator) {
  
      case '+':
        buttonNumber = parseFloat(number1) + parseFloat(number2)
        buttonNumber = parseFloat(buttonNumber.toFixed(4))
        buttonNumber = buttonNumber.toString()
        result()
        break
      case '-':
        buttonNumber = parseFloat(number1) - parseFloat(number2)
        buttonNumber = parseFloat(buttonNumber.toFixed(4))
        buttonNumber = buttonNumber.toString()
        console.log(buttonNumber)
        result()
        break
      case 'x':
        buttonNumber = parseFloat(number1) * parseFloat(number2)
        buttonNumber = parseFloat(buttonNumber.toFixed(4))
        buttonNumber = buttonNumber.toString()
        result()
        break
      case '÷':
        buttonNumber = parseFloat(number1) / parseFloat(number2)
        buttonNumber = parseFloat(buttonNumber.toFixed(4))
        buttonNumber = buttonNumber.toString()
        console.log(buttonNumber)
        result()
        break
    }
    
    
  }
