//add default drinks and ingredients to card
//when the user enters a drink, a picture, name, instructions and ingredients will pop up
//if the user wants to navigate to the next, or previous drink, they can


//add and event listener for the submit button
//document.querySelector('button').addEventListener('click', getDrink)

//add API url to a variable
const drinkPic = document.querySelector('img')
const instructions = document.querySelector('.instructions')
const drinkName = document.querySelector('.name')
const input = document.querySelector('input').value
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+input)
    .then(res => res.json())
    .then(data => {
        //add default info to placeholders
     document.querySelector('img').src = data.drinks[14].strDrinkThumb
     document.querySelector('.instructions').innerText = data.drinks[14].strInstructions
     document.querySelector('.name').innerText = data.drinks[14].strDrink
     document.querySelector('.ingredients').innerText = data.drinks[14].strIngredient1
        console.log(data.drinks[14])

    })
    .catch(err => {
        console.log(`error ${err}`)
    })







