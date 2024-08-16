import { GetUsers } from "./servicios/getUsers";

resolProm()
async function resolProm() {
    let datosUsers = await GetUsers ()

    console.log(datosUsers);

}



const hora = document.getElementById("hora")

setInterval(() => {
    console.log("12:00");
    
}, 2000);