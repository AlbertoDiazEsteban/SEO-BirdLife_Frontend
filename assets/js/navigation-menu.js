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


