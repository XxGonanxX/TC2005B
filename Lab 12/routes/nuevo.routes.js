//Basandonos en el que tiene el profe sobre perros
const express = require('express');

const router = express.Router();

const artistasNuevos = [{ nombre: "YOVNGCHIMI", 
imagen: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5ebbdd0ad2e600ed916df760703&imgrefurl=https%3A%2F%2Fopen.spotify.com%2Fartist%2F4aSlfXDn9R60UlbZEboBUy&tbnid=9UupbaQMrcVU7M&vet=12ahUKEwi5gu6o1739AhX6xMkDHZS6DM4QMygAegUIARDFAQ..i&docid=ArvZ0apI0yajBM&w=534&h=640&q=yovngchimi%20fotos&ved=2ahUKEwi5gu6o1739AhX6xMkDHZS6DM4QMygAegUIARDFAQ", 
descripcion: "BLI$$Y GANG"}, 
{nombre: "Mora",
imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vice.com%2Fes%2Farticle%2Fepngme%2Fde-producirle-a-bad-bunny-al-reggaeton-del-futuro-hablamos-con-mora&psig=AOvVaw284cbLoSU_WUXyLuLxjqNG&ust=1677861609660000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCnyd3Xvf0CFQAAAAAdAAAAABAD",
descripcion: "Desde el CALENTON",
}, 
{nombre: "Quevedo",
imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Falbum%2F68h2vEsehoGztPwSj1fpY1&psig=AOvVaw3keLN3T7AiF0AJqoOw1tHl&ust=1677861705013000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC1-YrYvf0CFQAAAAAdAAAAABAD",
descripcion: "El primero de Canarias.",
},
 {nombre: "Duki",
 imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FDuki&psig=AOvVaw0w4VFoTM6_AnWvBvW0nIuG&ust=1677861922664000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCH9_HYvf0CFQAAAAAdAAAAABAM" ,
 desripcion: "El único en MODO DIABLO",
 },
 {nombre: "paopao",
 imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F5AS4y4rlmbUYDCdg35qmI9&psig=AOvVaw3bR1dRdna2v6qef3K9na4T&ust=1677861941956000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjonPvYvf0CFQAAAAAdAAAAABAD" ,
 descripcion: "HoLa",
} ,
{nombre: "JhayCo",
imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F6nVcHLIgY5pE2YCl8ubca1&psig=AOvVaw1IGutN4zFbEgWlwszf6SIn&ust=1677861962773000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDDr4TZvf0CFQAAAAAdAAAAABAD" ,
descripcion: "Si no es JhayCo, es Jhay Cortez, si no es Jhay Cortez, es JhayCo JhayCortez...",
},
{nombre: "Legallyrxx",
imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fchannel%2FUC-P8sWt6Pgbcb4Tt__fsAWw&psig=AOvVaw1ZDs5meLTSSz4BdD447cXY&ust=1677861975231000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiPsYrZvf0CFQAAAAAdAAAAABAD",
descripcion: "El primero de México",
}]
router.get('/', (request, response, next) => {
    response.render('lista', {NewGen: artistasNuevos});
});
                        

module.exports = router;