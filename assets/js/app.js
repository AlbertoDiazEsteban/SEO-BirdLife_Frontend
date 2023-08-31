AFRAME.registerComponent('log', {
  
    init: function () {
      var debugtxt = document.querySelector('a-text');
      debugtxt.setAttribute('value', '');
    }
  });
  
  
  AFRAME.registerComponent('thumbstick-logging',{
    init: function () {
      
      this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    logThumbstick: function (evt) {
      var debugtxt = document.querySelector('a-text');
      var cameraRig = document.querySelector('#cameraRig');
      
      if (evt.detail.y > 0.95) { 
        debugtxt.setAttribute("value","DOWN"); 
        cameraRig.object3D.translateZ(0.05);
      }
      if (evt.detail.y < -0.95) { 
        debugtxt.setAttribute("value","UP");
        cameraRig.object3D.translateZ(-0.05);
      }
      if (evt.detail.x < -0.95) { 
        debugtxt.setAttribute("value","LEFT");
        cameraRig.object3D.rotateY(THREE.Math.degToRad(5));
      }
      if (evt.detail.x > 0.95) { 
        debugtxt.setAttribute("value","RIGHT");
        cameraRig.object3D.rotateY(THREE.Math.degToRad(-5));
      }
    }
  });


    AFRAME.addEventListener("thumbstickmoved", function(event) {
    // Obtén la posición actual del pájaro
    var birdPosition = document.querySelector("#main-bird").getAttribute("position");

    // Actualiza la posición del pájaro según la dirección del thumbstick
    if (event.detail.y > 0.95) {
      // Mueve el pájaro hacia arriba
      birdPosition.y += 0.05;
    }
    if (event.detail.y < -0.95) {
      // Mueve el pájaro hacia abajo
      birdPosition.y -= 0.05;
    }
    if (event.detail.x < -0.95) {
      // Mueve el pájaro hacia la izquierda
      birdPosition.x -= 0.05;
    }
    if (event.detail.x > 0.95) {
      // Mueve el pájaro hacia la derecha
      birdPosition.x += 0.05;
    }

    // Actualiza la posición del pájaro
    document.querySelector("#main-bird").setAttribute("position", birdPosition);
  });

  // AFRAME.addEventListener("keydown", function(event) {
  //   // Obtén la posición actual del pájaro
  //   var birdPosition = document.querySelector("#bird").getAttribute("position");
  
  //   // Actualiza la posición del pájaro según la tecla presionada
  //   if (event.keyCode == 38) {
  //     // Mueve el pájaro hacia adelante
  //     birdPosition.z += 0.05;
  //   }
  //   if (event.keyCode == 40) {
  //     // Mueve el pájaro hacia atrás
  //     birdPosition.z -= 0.05;
  //   }
  
  //   // Actualiza la posición del pájaro
  //   document.querySelector("#bird").setAttribute("position", birdPosition);
  // });
  
  
  
  // AFRAME.registerComponent('collider-check', {
  //   dependencies: ['raycaster'],
  
  //   init: function () {
     
  //     console.log('ok collider check');
  //     var debugtxt = document.querySelector('a-text');
  //     var thunksound = document.querySelector('#thunk');
      
  //     this.el.addEventListener('raycaster-intersection', function (e) {
  //       //-- get selected object
  //       this.selectedObj = e.detail.els[0];
  //       debugtxt.setAttribute('value', 'Cargate a los coders!');
  //     });
      
  //     this.el.addEventListener('raycaster-intersection-cleared', function (e) {
  //       //-- get selected object
  //       this.selectedObj = null;
        
  //     });
      
        
  //     //-- trigger button pressed
  //     this.el.addEventListener('triggerdown', function (e) {
  //         //debugtxt.setAttribute('value', 'Trigger button pressed');
        
  //         if(!this.selectedObj) return;
        
  //         debugtxt.setAttribute('value', this.selectedObj.id);
  //         this.selectedObj.parentNode.removeChild(this.selectedObj);
  //         thunksound.play();
        
  //     });
  //   },
    
    
  // });
  
  
  
  