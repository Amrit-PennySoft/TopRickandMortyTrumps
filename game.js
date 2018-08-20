

const RnDc = 'https://rickandmortyapi.com/api/character/1,183'
const card = document.getElementById('container')

let characters
let dataStore

function getChar(URL){
  fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dataStore = data
        characters = data.results
        handleData(data)
      })
      .catch(err => {
        console.log(err)
      })
}

function handleData(){

  renderData(characters)
}

function renderData(data) {
  characters.map(characters => {
    card.innerHTML +=
       `<div>
        <img src=${character.image} />
        <p>${character.name}</p>
        <p>${character.species}</p>
        <p>${character.status}</p>
        <p>${character.gender}</p>
      </div>`
      })

}

function setup() {
  getChar(RnDc)
}

setup()
