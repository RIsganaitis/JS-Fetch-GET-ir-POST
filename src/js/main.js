fetch("https://radial-reinvented-shoe.glitch.me")
    .then(function(file){return file.json()})
    .then(function(file){
        file.forEach((element) => {
            const array = [];
            let advertBlock = document.createElement("div");
            document.querySelector(".property").append(advertBlock);
            let img = document.createElement("img");
            let price = document.createElement("h2");
            let city = document.createElement("h2");
            let description = document.createElement("p");
            img.src = element.image;
            price.textContent = element.price+"eur";
            city.textContent = element.city;
            description.textContent = element.description;
            document.querySelector(".property > div:last-child").append(img);
            document.querySelector(".property > div:last-child").append(price);
            document.querySelector(".property > div:last-child").append(city);
            document.querySelector(".property > div:last-child").append(description);
            array.push(element);
            // console.log(element.price);
        });
        console.log(file);
        // document.getElementById("vilnius").addEventListener("click", cityFunction);

        // document.querySelectorAll("button").addEventListener("click", cityFunction);
        document.querySelector('.cities > .city').addEventListener("click", cityFunction);

//miesto filtravimas pradžia
        function cityFunction(){
            let currentCity = document.querySelector("div.cities > button").value;
            console.log(currentCity);
            for (let i = 0; i < file.length; i++){
                if(file[i].city == currentCity){
                    console.log("sutampa");
                }else{
                    console.log("nesutampa");
                    document.querySelector(".property > div:nth-child(" + i + ")").style.display = "none";
                }
            }
            // file.forEach((cities) => {
            //     console.log(cities.city);
            //     let i = 1;
            //     if(cities.city == currentCity){
            //         console.log("sutampa");
            //         i = i + 1;
            //     }else{
            //         console.log("nesutampa");
            //         document.querySelector(".property > div:nth-child(" + i + ")").style.display = "none"; //neina pasirinkti, kurį div paslėpti
            //         i = i + 1;
            //         // console.log(cities);
            //     }
            //     console.log(i);
            // })
        }
//miesto filtravimas pabaiga
        // console.log(file[0].description);
    })

    document.getElementById("addProperty").addEventListener("click", sell);
    function sell(){
        location.href = "add.html";
    }

    // document.getElementById("vilnius").addEventListener("click", vilniusFunction);
    // // document.getElementById("kaunas").addEventListener("click", kaunasFunction);
    // // document.getElementById("klaipeda").addEventListener("click", klaipedaFunction);

    // function vilniusFunction(){
    //     let city = document.getElementById("vilnius").value;
    //     console.log(city);
    // }