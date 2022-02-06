document.getElementById("addNewProperty").addEventListener("submit", addAdvert);

function addAdvert(e){
    e.preventDefault();
    const newData = {
        city: document.getElementById("newCity").value,
        description: document.getElementById("newDescription").value,
        image: document.getElementById("newImage").value,
        price: document.getElementById("newPrice").value
    };
    console.log(newData);
    fetch("https://radial-reinvented-shoe.glitch.me",{
        method: "POST",
        headers: {                              //Neaišku, kam skirta
            "Content-type": "application/json", //
        },                                      //
        body: JSON.stringify(newData),
    })
    .then(result => {
        result.json()
    })
    .then(
        alert("Succes"),
        location.href = "index.html"
    )
    .catch((erorr) => {
        alert("erorr")
    })
}