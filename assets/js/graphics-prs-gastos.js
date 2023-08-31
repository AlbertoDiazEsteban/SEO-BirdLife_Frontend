document.addEventListener('DOMContentLoaded', function() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://seobirdlife.coderf5.es/presupuesto/apis", requestOptions)
        .then(response => response.json())
        .then(data => {
            const barContainer = document.querySelector('#gastos-bars-container');
    
            const babiaBarsData = data.map(item => {
                return {
                    height: item.gastos,
                    tooltip: `Año: ${item.fkYear.year}\nCantidad: ${item.gastos}` 
                };
            });
    
            const babiaBarsEntity = document.createElement('a-entity');
            babiaBarsEntity.setAttribute('babia-bars', {
                legend: true,
                axis: false,
                palette: "commerce",
                color: "blue",
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