var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://seobirdlife.coderf5.es/seguidores/rrss/apis", requestOptions)
      .then(response => response.json())
      .then(data => {
          const barContainer = document.querySelector('#rrss-bars-container');

          const babiaBarsData = data.map(item => {
              return {
                  height: item.cantidad,
                  rotation: "0 0 0",
                  tooltip: `Año: ${item.fkYear.year}\nCantidad: ${item.cantidad}`
              };
          });

          const babiaBarsEntity = document.createElement('a-entity');
          babiaBarsEntity.setAttribute('babia-bars', {
              legend: true,
              axis: true,
              palette: "ubuntu",
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
