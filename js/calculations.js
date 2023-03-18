export class DisplayNumber {
  constructor(click) {
    this.click = click
    this.buttonNumber = document.querySelector('#number').innerText
    this.buttonResult = document.querySelector('#result').innerText
    console.log(this.buttonNumber.length)
    this.firtNumber()
  }
  firtNumber(){
    if(this.buttonNumber == "0" && this.buttonNumber.length == 1 && this.click == ","){
      console.log("chegou aqui")
      document.querySelector('#number').innerText = this.buttonNumber + this.click
      console.log(this.buttonNumber)
    } else if ( ) {
      this.number(this.click)
    }
  }

  atualizar(click){
    document.querySelector('#number').innerText = this.buttonNumber + click
    document.querySelector('#result').innerText = this.buttonResult
  }

  number(number) {
    console.log(number)
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
        this.atualizar(number) 
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
}