document.addEventListener('DOMContentLoaded', function() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

fetch("https://seobirdlife.coderf5.es/voluntarios/apis", requestOptions)
    .then(response => response.json())
    .then(data => {
        const barContainer = document.querySelector('#volunteers-bars-container');

        const babiaBarsData = data.map(item => {
            return {
                height: item.cantidad,
                tooltip: `Año: ${item.fkYear.year}\nCantidad: ${item.cantidad}`
            };
        });

        const babiaBarsEntity = document.createElement('a-entity');
        babiaBarsEntity.setAttribute('babia-bars', {
            legend: true,
            axis: true,
            palette: "commerce",
            titleColor: "#FFFFFF",
            titleFont: "#optimerBoldFont",
            titleRotation: "0 0 0",
            heightMax: 20,
            animation: true,
            data: babiaBarsData
        });

        barContainer.appendChild(babiaBarsEntity);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
});