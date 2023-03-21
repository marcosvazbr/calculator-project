import {firtNumber} from "./calculations.js";


addEventListener('click', function(event) {
  firtNumber(event.target.innerText)
})

addEventListener('keydown', function(e) {
  firtNumber(e.key)
})