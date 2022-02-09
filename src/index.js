console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cards = document.querySelector('ul')


function createCard(cards) {
    const card = document.createElement('li')
    card.classList.add('card')
    cards.appendChild(card)
    for (let i = 0; i < data.length; i++) {
        //create h2
        const name = document.createElement('h2')
        name.classList.add('card--title')
        name.innerText = data[i].name
        card.appendChild(name)
            //create image
        const img = document.createElement('img')
        img.classList.add('card--img')
        img.setAttribute('src', data[i].sprites.other['official-artwork'].front_default)
        img.setAttribute('width', '256')
        card.appendChild(img)
            //create ul
        const ul = document.createElement('ul')
        ul.classList.add('card--text')
    }
}



// function card1(data) {

// const h2El = document.createElement('h2') //creates the element



// 

// // document.querySelector('h2')

// const h2El = document.createElement('h2') 

// document.body.appendChild(h2El)

// h2El.innerText = "Bulbasaur"




    

// const cards = document.querySelector(".cards")

// }

// card1 (data)









// console.log('data', data)

// function addPerson(person) {
//     console.log(person)
//     const li = document.createElement("LI")
//     li.classList.add("card")
//     li.setAttribute("name", person.name)

//     const h2 = document.createElement("H2")
//     const h2Text = document.createTextNode(person.name)
//     h2.appendChild(h2Text)
//     li.appendChild(h2)

//     const statsList = document.createElement("UL")

//     const ageStat= document.createElement("LI")
//     const ageText = document.createTextNode(`Age: ${person.age}`)
//     ageStat.appendChild(ageText)

//     const favDrink = document.createElement("LI")
//     const favDrinkText = document.createTextNode(`Favorite drink: ${person.favoriteDrink}`)
//     favDrink.appendChild(favDrinkText)

//     const favFood = document.createElement("LI")
//     const favFoodText = document.createTextNode(`Favorite food: ${person.favoriteFood}`)
//     favFood.appendChild(favFoodText)

//     statsList.appendChild(ageStat)
//     statsList.appendChild(favDrink)
//     statsList.appendChild(favFood)

//     li.appendChild(statsList)

//     return li 
// }

// const cards = document.querySelector(".cards")

// for(let i = 0; i < data.length; i++) {
//     const person = addPerson(data[i])
//     cards.appendChild(person)
// }