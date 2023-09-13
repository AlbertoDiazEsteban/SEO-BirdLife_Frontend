document.addEventListener('DOMContentLoaded', function () {
    const btnDown = document.querySelector('.btn-down');
    const btnUp = document.querySelector('.btn-up');
    const btnRight = document.querySelector('.btn-rgt');
    const btnLeft = document.querySelector('.btn-lft');
  
    const camera = document.querySelector('a-camera');
    const bird = document.querySelector('#main-bird');
    const incremento = 0.7;
    let intervalId = null;
    
    // Up
    btnUp.addEventListener('touchstart', () => {
        intervalId = setInterval(() => {
          const currentPositionCamera = camera.getAttribute('position');
          const newPositionCamera = { ...currentPositionCamera };
          newPositionCamera.z -= incremento;

          const currentPositionBird = bird.getAttribute('position');
          const newPositionBird = { ...currentPositionBird };
          newPositionBird.z -= incremento;

          camera.setAttribute('position', newPositionCamera);
          bird.setAttribute('position', newPositionBird);
        }, 100);
      });
      btnUp.addEventListener('touchend', () => {
        clearInterval(intervalId);
      });
      btnUp.addEventListener('touchcancel', () => {
        clearInterval(intervalId);
      });
      btnUp.addEventListener('mousedown', () => {
        intervalId = setInterval(() => {
          const currentPositionCamera = camera.getAttribute('position');
          const newPositionCamera = { ...currentPositionCamera };
          newPositionCamera.z -= incremento;

          const currentPositionBird = bird.getAttribute('position');
          const newPositionBird = { ...currentPositionBird };
          newPositionBird.z -= incremento;

          camera.setAttribute('position', newPositionCamera);
          bird.setAttribute('position', newPositionBird);
        }, 100);
      });
      btnUp.addEventListener('mouseup', () => {
        clearInterval(intervalId);
      });
      btnUp.addEventListener('mouseleave', () => {
        clearInterval(intervalId);
      });


    // Down
    btnDown.addEventListener('touchstart', () => {
      intervalId = setInterval(() => {
        const currentPositionCamera = camera.getAttribute('position');
        const newPositionCamera = { ...currentPositionCamera };
        newPositionCamera.z += incremento;

        const currentPositionBird = bird.getAttribute('position');
        const newPositionBird = { ...currentPositionBird };
        newPositionBird.z += incremento;

        camera.setAttribute('position', newPositionCamera);
        bird.setAttribute('position', newPositionBird);
      }, 100);
    });
    btnDown.addEventListener('touchend', () => {
      clearInterval(intervalId);
    });
    btnDown.addEventListener('touchcancel', () => {
      clearInterval(intervalId);
    });
    btnDown.addEventListener('mousedown', () => {
      intervalId = setInterval(() => {
        const currentPositionCamera = camera.getAttribute('position');
        const newPositionCamera = { ...currentPositionCamera };
        newPositionCamera.z += incremento;

        const currentPositionBird = bird.getAttribute('position');
        const newPositionBird = { ...currentPositionBird };
        newPositionBird.z += incremento;

        camera.setAttribute('position', newPositionCamera);
        bird.setAttribute('position', newPositionBird);
      }, 100);
    });
    btnDown.addEventListener('mouseup', () => {
      clearInterval(intervalId);
    });
    btnDown.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
    });

  
    // Left
    btnLeft.addEventListener('touchstart', () => {
      intervalId = setInterval(() => {
        const currentPositionCamera = camera.getAttribute('position');
        const newPositionCamera = { ...currentPositionCamera };
        newPositionCamera.x -= incremento;

        const currentPositionBird = bird.getAttribute('position');
        const newPositionBird = { ...currentPositionBird };
        newPositionBird.x -= incremento;

        camera.setAttribute('position', newPositionCamera);
        bird.setAttribute('position', newPositionBird);
      }, 100);
    });
    btnLeft.addEventListener('touchend', () => {
      clearInterval(intervalId);
    });
    btnLeft.addEventListener('touchcancel', () => {
      clearInterval(intervalId);
    });
    btnLeft.addEventListener('mousedown', () => {
      intervalId = setInterval(() => {
        const currentPositionCamera = camera.getAttribute('position');
        const newPositionCamera = { ...currentPositionCamera };
        newPositionCamera.x -= incremento;

        const currentPositionBird = bird.getAttribute('position');
        const newPositionBird = { ...currentPositionBird };
        newPositionBird.x -= incremento;

        camera.setAttribute('position', newPositionCamera);
        bird.setAttribute('position', newPositionBird);
      }, 100);
    });
    btnLeft.addEventListener('mouseup', () => {
      clearInterval(intervalId);
    });
    btnLeft.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
    });

    
    // Right
    btnRight.addEventListener('touchstart', () => {
      intervalId = setInterval(() => {
        const currentPositionCamera = camera.getAttribute('position');
        const newPositionCamera = { ...currentPositionCamera };
        newPositionCamera.x += incremento;

        const currentPositionBird = bird.getAttribute('position');
        const newPositionBird = { ...currentPositionBird };
        newPositionBird.x += incremento;

        camera.setAttribute('position', newPositionCamera);
        bird.setAttribute('position', newPositionBird);
      }, 100);
    });
    btnRight.addEventListener('touchend', () => {
      clearInterval(intervalId);
    });
    btnRight.addEventListener('touchcancel', () => {
      clearInterval(intervalId);
    });
    btnRight.addEventListener('mousedown', () => {
      intervalId = setInterval(() => {
        const currentPositionCamera = camera.getAttribute('position');
        const newPositionCamera = { ...currentPositionCamera };
        newPositionCamera.x += incremento;

        const currentPositionBird = bird.getAttribute('position');
        const newPositionBird = { ...currentPositionBird };
        newPositionBird.x += incremento;

        camera.setAttribute('position', newPositionCamera);
        bird.setAttribute('position', newPositionBird);
      }, 100);
    });
    btnRight.addEventListener('mouseup', () => {
      clearInterval(intervalId);
    });
    btnRight.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
    });
});


