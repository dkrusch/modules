import {contactCollection} from "./contactCollection.js"

let displayContacts = () =>
{
    let thing = document.createElement("div")
    thing.innerHTML += contactCollection()
    console.log(thing)
    return thing
}

export {displayContacts}