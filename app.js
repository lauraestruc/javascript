/*-------------------------- AUTOMOTORES ----------------------------*/ 
class Cars{
    constructor(brand, model, year, fuel, colour, valor){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
        this.colour = colour;
        this.valor = valor;
    }

    /*cuotas (cantidad,interes){
        let valor = this.valor * interes
        let cuotasvalor = document.getElementById("cuotas");
        cuotasvalor.innerHTML = `
        <p>
        El costo total en ${cantidad} cuotas es de ${valor}, cada cuota sale ${valor / cantidad}
        </p>
        `
        console.log(`El costo total en ${cantidad} cuotas es de ${valor}, cada cuota sale ${valor / cantidad}`);
    }*/
}


let catalogo = []

const car1 = new Cars("chevrolet", "camaro", 1986, "nafta", "rojo", 8500000)
const car2 = new Cars("ford", "mustang", 1963, "nafta", "negro", 7630000)
const car3 = new Cars("ferrari", "f355", 1996, "nafta", "amarillo", 11420000)
const car4 = new Cars("chevrolet", "corvette", 1972, "nafta", "azul", 10950000)
const car5 = new Cars("lamborghini", "diablo", 1990, "nafta", "amarillo", 13560000)
const car6 = new Cars("bugatti", "veyron", 2006, "nafta", "gris", 24780000)
const car7 = new Cars("maserati", "mc20", 2021, "nafta", "blanco", 35000000)
const car8 = new Cars("alfaromeo", "gtv", 2002, "nafta", "rojo", 21200000)


catalogo.push(car1)
catalogo.push(car2)
catalogo.push(car3)
catalogo.push(car4)
catalogo.push(car5)
catalogo.push(car6)
catalogo.push(car7)
catalogo.push(car8)

console.log(catalogo);

let catalogoCars = catalogo.filter (e=> e.brand == "chevrolet")
let lowCost = catalogo.find(e => e.valor <13000000)



console.log(catalogoCars);
console.log(lowCost);
//console.log(car7.cuotas(84, 1.21));

let saveCars = JSON.stringify(catalogo)
localStorage.setItem("catalogo", saveCars)

/*----------------------- DATO DE SOLICITUDES --------------------*/

class User {
    constructor(firstName, lastName, email, phone, car) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.car = car;
    }
}

let users = []

let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")

const saveData = () => {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let car = document.getElementById("car").value

    if (JSON.parse(localStorage.getItem("users") != null)) {
        users = JSON.parse(localStorage.getItem("users")) 
        let index = users.length + 1
        let user = new User(firstName, lastName, email, phone, car, index) 
        users.push(user) 
        localStorage.setItem("users", JSON.stringify(users)) 
    } else {
        let index = 1
        let user = new User(firstName, lastName, email, phone, car, index) 
        users.push(user) 
        localStorage.setItem("users", JSON.stringify(users)) 
    }

}

const printData = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("users"))

    if (dataToPrint != null) {
        dataToPrint.forEach(e => {

            
            let table = document.createElement("tr")

            let td = document.createElement("td")
            td.setAttribute("class", "col-1")
            td.textContent = `${dataToPrint.indexOf(e)}`
            table.appendChild(td)

            let th1 = document.createElement("th")
            th1.setAttribute("class", "col-2")
            th1.textContent = `${e.firstName}`
            table.appendChild(th1)

            let th2 = document.createElement("th")
            th2.setAttribute("class", "col-2")
            th2.textContent = `${e.lastName}`
            table.appendChild(th2)

            let th3 = document.createElement("th")
            th3.setAttribute("class", "col-2")
            th3.textContent = `${e.email}`
            table.appendChild(th3)

            let th4 = document.createElement("th")
            th4.setAttribute("class", "col-2")
            th4.textContent = `${e.phone}`
            table.appendChild(th4)

            let th5 = document.createElement("th")
            th5.setAttribute("class", "col-2")
            th5.textContent = `${e.car}`
            table.appendChild(th5)

            let td2 = document.createElement("td")
            td2.setAttribute("class", "col-2")
            table.appendChild(td2)


           
            tablePrint.appendChild(table)
        })

    } else {
        document.getElementById("err").textContent = "No existe usuarios"
    }


}

const sweetAlert = ()=>{
    Swal.fire(
        '¡Solicitud enviada con exito!',
        'A la brevedad nos pondremos en contacto.',
        'success'
)}


window.addEventListener("submit",() =>{
    saveData()
})

window.addEventListener("load", () => {
    printData()
})

sweetAlert()
