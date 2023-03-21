export class DisplayNumber {
  constructor(click, number1) {
    this.click = click
    this.buttonNumber = document.querySelector('#number').innerText
    this.buttonResult = document.querySelector('#result').innerText
    this.firtNumber()
    this.number1 = number1
  }
  function firtNumber(click){
    if(this.buttonNumber == "0" && this.buttonNumber.length == 1 && this.click == ","){
      document.querySelector('#number').innerText = this.buttonNumber + this.click
    } else if(this.buttonNumber == "0" && this.buttonNumber.length == 1) {
      this.buttonNumber = ""
      this.number(this.click)
    } else {
      this.number(this.click)
    }
  }

  updateNumber(click){
    document.querySelector('#number').innerText = this.buttonNumber + click
    
  }

  updateResult(click){
    this.buttonResult == "" ? document.querySelector('#result').innerText = `${this.buttonNumber} ${click}` : document.querySelector('#result').innerText = `${this.buttonResult} ${click}`
    document.querySelector('#number').innerText = ""
    
  }

  deleteLastNumber(){
    document.querySelector('#number').innerText =  this.buttonNumber.slice(0, -1)
    console.log(this.buttonNumber)
  }

  deleteNumber() {
    document.querySelector('#number').innerText = ""
  }

  deleteAll() {
    document.querySelector('#result').innerText = ""
    document.querySelector('#number').innerText = ""
  }

  result() {
    document.querySelector('#number').innerText = parseFloat(n1) + parseFloat(n2)
  }

  number(click) {
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
        console.log(this.number1)
        this.updateNumber(click) 
        console.log(this.number1)
        break
      case ',':
        this.buttonNumber.includes(',') ? console.log("teste") : this.updateNumber(this.click)

        break
      case '+':
        this.operator = '+'
        console.log(this.operator)
        console.log(this.number1)
        
        this.updateResult('+')
        break
      case '-':
        this.number1 = this.buttonNumber
        this.operator = '-'
        this.updateResult(this.operator)
        
        break
      case '*':
      case 'x':
        this.number1 = this.buttonNumber
        this.operator = 'x'
        this.updateResult(this.operator)
        break
      case '/':
      case '÷':
        this.number1 = this.buttonNumber
        this.operator = '÷'
        this.updateResult(this.operator)
        break
      case 'Backspace':
      case '!':
        this.deleteLastNumber()
        break
      case 'AC':
        this.deleteNumber()
        break
      case 'Escape':
      case 'C':
        this.deleteAll()
        break
      case 'Enter':
      case '=':
        this.number2 = this.buttonNumber
        if(this.number1 != '' & this.operator != '' & this.number2 != ''){  
          this.calculatio()
          this.updateResult(this.buttonNumber)
        } 
        

      
        break
  
    }
  }


  calculatio() {
    console.log(this.operator)
    this.number1 = this.number1.replace(',', '.')
    this.number2 = this.number2.replace(',', '.')
    console.log(this.operator)

    switch (this.operator) {
  
      case '+':
        console.log('chegou aqui')
        result(this.number1, this.number2)
        document.querySelector('#number').innerText = parseFloat(this.number1) + parseFloat(this.number2)
        break
      case '-':
        this.buttonNumber.innerText = parseFloat(n1) - parseFloat(n2)
        break
      case 'x':
        this.buttonNumber.innerText = parseFloat(n1) * parseFloat(n2)
        break
      case '÷':
        this.buttonNumber.innerText = parseFloat(n1) / parseFloat(n2)
        break
    }
    this.buttonNumber = this.buttonNumber.replace('.', ',')
    
  }
}