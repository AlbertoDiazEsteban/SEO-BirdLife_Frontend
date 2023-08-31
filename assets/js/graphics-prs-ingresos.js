document.addEventListener('DOMContentLoaded', function() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://seobirdlife.coderf5.es/presupuesto/apis", requestOptions)
        .then(response => response.json())
        .then(data => {
            const barContainer = document.querySelector('#ingresos-bars-container');

            const babiaBarsData = data.map(item => {
                return {
                    height: item.ingresos,
                    tooltip: `Año: ${item.fkYear.year}\nCantidad: ${item.ingresos}` 
                };
            });

            const babiaBarsEntity = document.createElement('a-entity');
            babiaBarsEntity.setAttribute('babia-bars', {
                legend: true,
                axis: true,
                palette: "commerce",
                color: "blue",
                titleColor: "#FFFFFF",
                titleFont: "#optimerBoldFont",
                titleRotation: "0 0 0",
                heightMax: 20,
                animation: true,
                data: babiaBarsData // Usar los datos actualizados
            });

            barContainer.appendChild(babiaBarsEntity);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});