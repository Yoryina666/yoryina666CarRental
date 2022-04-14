$(document).ready(function () {
    function CargarCombo() {
        $.getJSON("https://restcountries.com/v3.1/all", function (data) {
            var ListaPaises = [];
            var ListaVal = [];
            
            for (var i = 0; i < Object.keys(data).length; i++) {
                ListaPaises.push(data[i].common)
                ListaVal.push(data[i].cca3)
               
            }

           

            ListaVal.forEach(element => {
                var pais = $("<option></option>").val(element).text(element)
                $("#nacionalidad").append(pais)
               
            })
        })
    }
    CargarCombo();
})