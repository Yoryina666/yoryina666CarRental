function MensajeTipoSeguro() {
    var select = document.getElementById("seguro")

    if (select.options[select.selectedIndex].value == 10.45) {
        alert("Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito. Costo de alquiler diario: $ 5.45 por día.");
    }
    else {
        if (select.options[select.selectedIndex].value == 15.50) {
            alert("Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones. Costo de alquiler diario: $ 9.50 por día.");
        }
        else {
            alert("Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo. Costo de alquiler diario: $ 11.25 por día.");
        }
    }
       
}

function calcular() {
    var dias = document.getElementById("dias");
    var fechaR = new Date(document.getElementById('fechaRetiro').value);
    var fechaD = new Date(document.getElementById('fechadevolucion').value);
    if (fechaD < fechaR) {
        alert("Fecha de devolución erronea");
        return false;
    }

    var diasdif = fechaD.getTime() - fechaR.getTime();
    var contdias = Math.round(diasdif / (1000 * 60 * 60 * 24));
    dias.value = contdias;

    var TD = document.getElementById("td");
    var selectTDV = document.getElementById("tipoVehiculo").value;
    var selectTDS = document.getElementById("seguro").value;
    var TDSindescuento;

    var TDV =+ selectTDV;
    var TDS = + selectTDS;
    var descuento = 1;
    TDSindescuento = TDV + TDS;

    if (dias.value > 30 && dias.value < 120) {
        descuento = descuento * 0.15;
        TD.value = TDSindescuento - descuento;
    }
    else {
        if (dias.value >= 120 && dias.value <= 365) {
            descuento = descuento * 0.25;
            TD.value = TDSindescuento - descuento;
        }
        else {
            if (!(dias.value >= 3 && dias.value <= 365)) {
                alert("Los días no son correctos");
                TD.value = "";
                return false;
            }
            else {
                TD.value = TDSindescuento;
            }
        }
       
    }
    var selectN = document.getElementById("nacionalidad").value;
    var reg="";
    var TotalPagar = document.getElementById("totalPagar");
    var TP;
    var Desc=1;
    var url = "https://restcountries.com/v3.1/alpha?codes={codigo}"
    $.get(url.replace("{codigo}", selectN), function (data) {
       
        reg = data[0].region
        if (reg == "Americas" || reg == "Europe") {
            Desc = Desc * 0.10;
            TP = TD.value * dias.value - ((TD.value * dias.value) * Desc);
            TotalPagar.value = TP;
        }

        if (reg == "Africa") {
            Desc = Desc * 0.05;
            TP = TD.value * dias.value - ((TD.value * dias.value) * Desc);
            TotalPagar.value = TP;
        }
    })

   
    


   
    

}