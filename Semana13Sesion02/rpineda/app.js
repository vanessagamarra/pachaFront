const app = function () {

    let urlUser;
    let urlClima;
    let key = "ec8a9f98a9e74f82bd613118233005"
    let nroEmpleados = 10

    function sl() {
        $('.modal').modal('show');
    }
    function hl() {
        $('.modal').modal('hide');
    }


    let eventos = function () {

    }
    let cargarInformacionInicial = function () {
        for (let index = 0; index < nroEmpleados; index++) {
            cargarEmpleado(index);
        }
    }
    function cargarEmpleado(index) {
        sl();
        let plantilla = '';
        $.ajax({
            type: 'GET',
            url: urlUser,
            success: function (respuesta) {
                answer = respuesta;
                console.log(respuesta)
                plantilla= `<div class="col-lg-3 col-sm-6">
        <div class="card hovercard">
            <div class="cardheader">
            </div>
            <div class="avatar">
                <img alt="" src="${answer.results[0].picture.large}">
            </div>
            <div class="info">
                <div class="title">
                    <a target="_blank" href="https://scripteden.com/">${answer.results[0].name.first} ${answer.results[0].name.last}</a>
                </div>
                <div class="desc">${answer.results[0].cell}</div>
                <div class="desc">${answer.results[0].email}</div>
                <div class="desc">${answer.results[0].gender}</div>
            </div>
            <div class="bottom">
                <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                    <i class="fa fa-twitter"></i>
                </a>
                <a class="btn btn-danger btn-sm" rel="publisher"
                   href="https://plus.google.com/+ahmshahnuralam">
                    <i class="fa fa-google-plus"></i>
                </a>
                <a class="btn btn-primary btn-sm" rel="publisher"
                   href="https://plus.google.com/shahnuralam">
                    <i class="fa fa-facebook"></i>
                </a>
                <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                    <i class="fa fa-behance"></i>
                </a>
            </div>
        </div>
    </div>`
            },
            error: function (jqXHR, status, err) {
                console.log(status);
            },
            complete: function () {
                console.log("Consulta Ejecutada")
                const nomina = document.getElementById('nomina');
                nomina.innerHTML += plantilla;
                hl();
            }
        });
         
        
    }
    function cargarUsuario() {
        let answer;
        sl();
        $.ajax({
            type: 'GET',
            url: urlUser,
            success: function (respuesta) {
                answer = respuesta;
            },
            error: function (jqXHR, status, err) {
                console.log(status);
            },
            complete: function () {
                console.log("Consulta Ejecutada")
                cargarClima(answer.results[0].location.city)
                hl();
            }
        });

    }
    function cargarClima(ciudad) {
        sl();
        let url = urlClima + `key=${key}&q=${ciudad}&aqi=no`;
        $.ajax({
            type: 'GET',
            url: url,
            success: function (respuesta) {
                console.log(respuesta)
            },
            error: function (jqXHR, status, err) {
                console.log(status);
            },
            complete: function () {
                console.log("Consulta Ejecutada")
                hl();
            }
        });
    }

    const getNombres = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            const names = ["Roberto", "Karen", "David"];
            resolve(names);
        }, 5000);
    });

    const getCuentas = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            const cuentas = ["001", "002", "003"];
            //throw "Error en getCuentas"
            resolve(cuentas)
        }, 7000);
    });

    const getPartners = new Promise(function (resolve, reject) {
        return setTimeout(function () {
            const partners = ["Luis", "Juan", "Pedro"];
            resolve(partners)
        }, 4000)
    });

    async function ListData() {
        try {
            //console.log('inicio getnombres')
            const nombres = await getNombres;
            // console.log('fin getNombres')
            // console.log('inicio getCuentas')
            const cuentas = await getCuentas;
            // console.log('fin getCuentas')
            // console.log('inicio getPartners')
            const partners = await getPartners;
            // console.log('fin getPartners')

            return {
                nombres,
                cuentas,
                partners
            };
        } catch (error) {
            console.error(error);
        }
    }
    return {
        init: function (parametros) {
            urlUser = parametros.urlUser;
            urlClima = parametros.urlClima;
            eventos();
            cargarInformacionInicial();
        }
    }
}();