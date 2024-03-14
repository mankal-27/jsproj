const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault() // to prevent the default form submission behavior. You can then proceed with your BMI calculation logic and result display within this function.
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if(height === '' || height < 0 || isNaN(height)){
        result .innerHTML = `Please Enter a valid Height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result .innerHTML = `Please Enter a valid Weight ${weight}`
    }else{
       const bmi = (weight/ ((height*height)/10000)).toFixed(2)
       let message = ''
       if(bmi <= 18.5) {
         message = "UnderWeight"
       }else if(bmi > 18.5 && bmi < 24.9 ){
        message = "Healthy weight"
       } else if (bmi > 25.0 && bmi < 29.9){
        message = "Overweight"
       }else{
        message = "Obese"
       }
       //Display the result
       result.innerHTML = `<span>${bmi}</span><br> <span>${message}</span>`
    }
})