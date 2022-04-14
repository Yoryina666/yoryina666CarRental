
function mostrarTodo() {

    var texto = document.getElementById("infTCar");
    var select = document.getElementById("tipoVehiculo");

    const imgVista = document.getElementById("imgVista");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
   
    
    if (select.options[select.selectedIndex].value == 10.45) {
        imgVista.src = 'images/Compacto1.png';
        img1.src = 'images/Compacto1.png';
        img2.src = 'images/Compacto2.png';
        img3.src = 'images/Compacto3.png'
        texto.innerHTML = "KIA PICANTO, Año 2016";
        
    }
    else {
        if (select.options[select.selectedIndex].value == 15.50) {
            imgVista.src = 'images/Mediano1.png';
            img1.src = 'images/Mediano1.png';
            img2.src = 'images/Mediano2.png';
            img3.src = 'images/Mediano3.png';
            texto.innerHTML = "HONDA CITY CAR, Año 2017";
        }
        else {
            if (select.options[select.selectedIndex].value == 25.25) {
                imgVista.src = 'images/TodoTerreno1.png';
                img1.src = 'images/TodoTerreno1.png'
                img2.src = 'images/TodoTerreno2.png'
                img3.src = 'images/TodoTerreno3.png'
                texto.innerHTML = "TOYOTA FJ CRUISER, Año 2016";
            }
            else {
                imgVista.src = 'images/Familiar1.png';
                img1.src = 'images/Familiar1.png'
                img2.src = 'images/Familiar2.png'
                img3.src = 'images/Familiar3.png'
                texto.innerHTML = "TOYOTA SIENNA, Año 2018";
            }
        }
    }
}

function mostrarImagen(valor) {
    var select = document.getElementById("tipoVehiculo");
    const imgVista = document.getElementById("imgVista");
    var texto = document.getElementById("infTCar");
   /* if (select.options[select.selectedIndex].value == 10.45) {*/
    if (valor == 1) {
        if (select.options[select.selectedIndex].value == 10.45) {
            texto.innerHTML = "KIA PICANTO, Año 2016";
            imgVista.src = 'images/Compacto1.png';
        }

        if (select.options[select.selectedIndex].value == 15.50) {
            texto.innerHTML = "HONDA CITY CAR, Año 2017";
            imgVista.src = 'images/Mediano1.png';
        }

        if (select.options[select.selectedIndex].value == 25.25) {
            texto.innerHTML = "TOYOTA FJ CRUISER, Año 2016";
            imgVista.src = 'images/TodoTerreno1.png';
        }

        if (select.options[select.selectedIndex].value == 20.30) {
            texto.innerHTML = "TOYOTA SIENNA, Año 2018";
            imgVista.src = 'images/Familiar1.png';
        }

    }
    else {
        if (valor == 2) {
            if (select.options[select.selectedIndex].value == 10.45) {
                texto.innerHTML = "FORD FIESTA ST, Año 2015";
                imgVista.src = 'images/Compacto2.png';
            }

            if (select.options[select.selectedIndex].value == 15.50) {
                texto.innerHTML = "MERCEDES SLS, Año 2015";
                imgVista.src = 'images/Mediano2.png';
            }

            if (select.options[select.selectedIndex].value == 25.25) {
                texto.innerHTML = "TOYOTA Prado, Año 2018";
                imgVista.src = 'images/TodoTerreno2.png';
            }

            if (select.options[select.selectedIndex].value == 20.30) {
                texto.innerHTML = "DODGE GRAND CARAVANE, Año 2015";
                imgVista.src = 'images/Familiar2.png';
            }
        }
        else {
            if (select.options[select.selectedIndex].value == 10.45) {
                texto.innerHTML = "PEUGEOT 308, Año 2018";
                imgVista.src = 'images/Compacto3.png';
            }

            if (select.options[select.selectedIndex].value == 15.50) {
                texto.innerHTML = "FORD FIESTA ST, Año 2016";
                imgVista.src = 'images/Mediano3.png';
            }

            if (select.options[select.selectedIndex].value == 25.25) {
                texto.innerHTML = "NISSAN JUKE, Año 2017";
                imgVista.src = 'images/TodoTerreno3.png';
            }

            if (select.options[select.selectedIndex].value == 20.30) {
                texto.innerHTML = "HYUNDAI ELANTRA, Año 2016";
                imgVista.src = 'images/Familiar3.png';
            }
        }
    }

    //if (valor == 2 && select.options[select.selectedIndex].value == 10.45) {
    //        texto.innerHTML = "FORD FIESTA ST, Año 2015";
    //        imgVista.src = 'images/Compacto2.png';
    //    }

    //if (valor == 3 && select.options[select.selectedIndex].value == 10.45) {
    //        imgVista.src = 'images/Compacto3.png';
    //        texto.innerHTML = "PEUGEOT 308, Año 2018";
    //    }
   /* }*/
    
        //if (select.options[select.selectedIndex].value == 15.50) {
    //if (valor == 1 && select.options[select.selectedIndex].value == 15.50) {
    //            texto.innerHTML = "HONDA CITY CAR, Año 2017";
    //            imgVista.src = 'images/Mediano1.png';
    //        }

    //if (valor == 2 && select.options[select.selectedIndex].value == 15.50) {
    //            texto.innerHTML = "MERCEDES SLS, Año 2015";
    //            imgVista.src = 'images/Mediano2.png';
    //        }

    //if (valor == 3 && select.options[select.selectedIndex].value == 15.50) {
    //            imgVista.src = 'images/Mediano3.png';
    //            texto.innerHTML = "FORD FIESTA ST, Año 2016";
    //        }
        //}
    
   
}