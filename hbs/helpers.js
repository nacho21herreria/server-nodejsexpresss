const hbs = require('hbs');

hbs.registerHelper('getDate', () => {
    return new Date().getFullYear();
})


hbs.registerHelper('capitalizarString', (cadena) => {
    let palabras = cadena.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

})
