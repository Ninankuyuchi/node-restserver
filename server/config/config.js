//Objeto global que corre durante toda la aplicacion de Node, actualizado dependiendo del entorno o envairoment
/* 
Modificar el Process.envairoment.Port y preguntare exactamente lo mismo lo desplegado en heroku
process.envairoment.Port actualizado y si no existe es 3000
*/
// =======================
// Puerto
// =======================

process.env.PORT = process.env.PORT || 3000;