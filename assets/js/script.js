let base_url= "https://rickandmortyapi.com/api/character"

class characters{
    constructor(image, name, species){
        this.image = image
        this.name = name
        this.species = species
    }
    get information() {
        let elements = [this.image, this.name, this.species]
        return elements
    }
}

const rickAndMorty = async () => {
    try{
        const res = await fetch(base_url);
        const data = await res.json()
        let persons = data.results
        console.log(persons);
        persons.map((person) => {
            let character = new characters(person.image, person.name, person.species)
            show(character.information)
        })
    }
    catch(error){
        console.log(error)
    }
}

const show = (content) => {
    const cards = document.getElementById("card-dinamica")
    const templateCard = document.getElementById("template-card").content
    const fragment = document.createDocumentFragment()
    const clone = templateCard.cloneNode(true)
    
    clone.querySelector("img").setAttribute("src", content [0])
    clone.querySelector("h3").textContent= content [1]
    clone.querySelector("p").textContent= content [2]

    fragment.appendChild(clone)
    cards.appendChild(fragment)
}

rickAndMorty()











