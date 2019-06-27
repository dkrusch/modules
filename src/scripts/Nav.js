const nav = () =>
{
    // let holder = document.createElement("div")
    let title = "<h1>Betsy</h1>"
    let links = "<a href='index.html'>Categories</a><br><a href='index.html'>Orders</a><br><a href='index.html'>Log Out</a>"
    document.querySelector(".navbar").innerHTML += `${title}${links}`
    // document.querySelector(".navbar").appendChild(holder)
}

export {nav}