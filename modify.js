/* global AFRAME, THREE */

/**
 * Player for animation clips. Intended to be compatible with any model format that supports
 * skeletal or morph animations.
 */  
AFRAME.registerComponent('play-all-model-animations', {
    init: function () {
      this.model = null;
      this.mixer = null;
  
      var model = this.el.getObject3D('mesh');
      if (model) {
        this.load(model);
      } else {
        this.el.addEventListener('model-loaded', function (e) {
          this.load(e.detail.model);
        }.bind(this));
      }
    },
  
    load: function (model) {
      this.model = model;
      this.mixer = new THREE.AnimationMixer(model);
      this.model.animations.forEach(animation => {
        this.mixer.clipAction(animation, model).play();
      });
    },
  
    tick: function (t, dt) {
      if (this.mixer && !isNaN(dt)) {
        this.mixer.update(dt / 1000);
      }
    }
  });

  // AFRAME.registerComponent('environment', {
  //   schema: {
  //     active: {default: false},
  //     preset: {default: 'default', oneOf: ['none', 'default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'arches', 'threetowers', 'poison', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris']},
  //     seed: {type: 'int', default: 1, min: 0, max: 1000},
  
  //     skyType: {default: 'color', oneOf:['none', 'color', 'gradient', 'atmosphere']},
  //     skyColor: {type: 'color'},
  //     horizonColor: {type: 'color'},
  //     lighting: {default: 'distant', oneOf: ['none', 'distant', 'point']},
  //     shadow: {default: false},
  //     shadowSize: { default: 10},
  //     lightPosition: {type:'vec3', default: {x: 0, y: 1, z: -0.2}},
  //     fog: {type:'float', default: 0, min: 0, max: 1},
  
  //     flatShading: {default: false},
  //     playArea: {type: 'float', default: 1, min: 0.5, max: 10},
  
  //     ground: {default: 'hills', oneOf:['none', 'flat', 'hills', 'canyon', 'spikes', 'noise']},
  //     groundYScale: {type: 'float', default: 3, min: 0, max: 50},
  //     groundTexture: {default: 'none', oneOf:['none', 'checkerboard', 'squares', 'walkernoise']},
  //     groundColor:  {type: 'color', default: '#553e35'},
  //     groundColor2: {type: 'color', default: '#694439'},
  
  //     dressing: {default: 'none', oneOf:['none', 'cubes', 'pyramids', 'cylinders', 'hexagons', 'stones', 'trees', 'mushrooms', 'towers', 'apparatus', 'arches', 'torii']},
  //     dressingAmount: {type: 'int', default: 10, min: 0, max: 1000},
  //     dressingColor:  {type: 'color', default: '#795449'},
  //     dressingScale: {type: 'float', default: 5, min: 0, max: 100},
  //     dressingVariance: {type: 'vec3', default: {x: 1, y: 1, z: 1}},
  //     dressingUniformScale: {default: true},
  //     dressingOnPlayArea: {type: 'float', default: 0, min: 0, max: 1},
  
  //     grid: {default:'none', oneOf:['none', '1x1', '2x2', 'crosses', 'dots', 'xlines', 'ylines']},
  //     gridColor: {type: 'color', default: '#ccc'}
  //   },
  // }