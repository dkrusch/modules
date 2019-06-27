import {displayContacts} from "./contact.js"

let contactList = () =>
{
    let ul = document.createElement("ul")
    ul.innerHTML += `<li>${displayContacts()}</li>`
    document.getElementById("container").appendChild(ul)
}

export {contactList}