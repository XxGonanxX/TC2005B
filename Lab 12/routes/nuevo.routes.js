//Basandonos en el que tiene el profe sobre perros
const express = require('express');

const router = express.Router();

const artistasNuevos = [
{nombre: "Mora",
imagen: "https://www.neo2.com/wp-content/uploads/2022/08/Mora-Microdosis-produccion-productor-musica-urbana-foto-3.jpg",
descripcion: "Desde el CALENTON",
}, 
{nombre: "Quevedo",
imagen: "https://i.scdn.co/image/ab6761610000e5eb1536543a342cab0ed03700f9",
descripcion: "El primero de Canarias.",
},
 {nombre: "Duki",
 imagen:"https://upload.wikimedia.org/wikipedia/commons/9/98/Duko_concierto.jpg" ,
 descripcion: "El único en MODO DIABLO",
 },
 {nombre: "paopao",
 imagen: "https://i.scdn.co/image/ab6761610000e5eb7d10b32e12de45e34649a9b2" ,
 descripcion: "HoLa",
} ,
{ nombre: "YOVNGCHIMI", 
imagen: "https://i.scdn.co/image/ab6761610000e5ebbdd0ad2e600ed916df760703", 
descripcion: "BLI$$Y GANG"
}, 
{nombre: "JhayCo",
imagen: "https://yt3.googleusercontent.com/CE0G60L6SOFlONCmxvc6pN7a3DaxQZfcdPNZihQA69kvmpiyTzdJD0N7tNa0a-3j9l3zGehG=s900-c-k-c0x00ffffff-no-rj" ,
descripcion: "Si no es JhayCo, es Jhay Cortez, si no es Jhay Cortez, es JhayCo JhayCortez...",
},
{nombre: "Legallyrxx",
imagen: "https://yt3.googleusercontent.com/OH6lXV-5oDliaCWLHZtOKBy_PeVgdYyZTSFJoPREAJlnv6fy5XbzarsRkfjUGN0-Pl4vwtuhKQ=s900-c-k-c0x00ffffff-no-rj",
descripcion: "El primero de México",
}]
router.get('/', (request, response, next) => {
    response.render('lista', {NewGen: artistasNuevos});
});
                        

module.exports = router;