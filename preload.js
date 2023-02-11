const si = require('systeminformation');

window.addEventListener('DOMContentLoaded', () => {

   console.log('DOM fully loaded and parsed');

   let cpu = document.querySelector('.cpu');

   si.cpu().then(data => {
      console.log(data);

      console.log(cpu.childNodes[2]);

      cpu.querySelector('.manufacturer').innerHTML = data.manufacturer;
      cpu.querySelector('.model').innerHTML = data.brand;
      cpu.querySelector('.cores').innerHTML = data.cores;
      cpu.querySelector('.speed').innerHTML = data.speed;
      cpu.querySelector('.socket').innerHTML = data.socket;
      cpu.querySelector('.cache').innerHTML = data.cache;
      cpu.querySelector('.voltage').innerHTML = data.voltages;
      cpu.querySelector('.power').innerHTML = data.power;
      cpu.querySelector('.tdp').innerHTML = data.tdp;
      cpu.querySelector('.virtualization').innerHTML = data.virtualization;

   });

   let gpu = document.querySelector('.gpu');

   si.graphics().then(data => {
      console.log(data);

      gpu.querySelector('.manufacturer').innerHTML = data.controllers[0].vendor;
      gpu.querySelector('.model').innerHTML = data.controllers[0].model;
      gpu.querySelector('.vram').innerHTML = data.controllers[0].vram;
      gpu.querySelector('.vramDynamic').innerHTML = data.controllers[0].vramDynamic;
      gpu.querySelector('.bus').innerHTML = data.controllers[0].bus;
      gpu.querySelector('.display').innerHTML = data.controllers[0].display;
      gpu.querySelector('.displayActive').innerHTML = data.controllers[0].displayActive;
      gpu.querySelector('.pixel').innerHTML = data.controllers[0].pixelShader;
      gpu.querySelector('.vertex').innerHTML = data.controllers[0].vertexShader;
      gpu.querySelector('.memory').innerHTML = data.controllers[0].memory;
      gpu.querySelector('.clock').innerHTML = data.controllers[0].clock;
      gpu.querySelector('.clockMax').innerHTML = data.controllers[0].clockMax;
      gpu.querySelector('.clockBase').innerHTML = data.controllers[0].clockBase;
      gpu.querySelector('.clockBoost').innerHTML = data.controllers[0].clockBoost;
      gpu.querySelector('.voltage').innerHTML = data.controllers[0].voltage;
      gpu.querySelector('.power').innerHTML = data.controllers[0].power;
      gpu.querySelector('.tdp').innerHTML = data.controllers[0].tdp;
      gpu.querySelector('.temperature').innerHTML = data.controllers[0].temperature;
      gpu.querySelector('.temperatureMax').innerHTML = data.controllers[0].temperatureMax;
      gpu.querySelector('.temperatureMin').innerHTML = data.controllers[0].temperatureMin;
      gpu.querySelector('.fan').innerHTML = data.controllers[0].fan;
      gpu.querySelector('.fanMin').innerHTML = data.controllers[0].fanMin;
      gpu.querySelector('.fanMax').innerHTML = data.controllers[0].fanMax;
      gpu.querySelector('.driver').innerHTML = data.controllers[0].driver;
      gpu.querySelector('.driverVersion').innerHTML = data.controllers[0].driverVersion;
      gpu.querySelector('.driverDate').innerHTML = data.controllers[0].driverDate;
      gpu.querySelector('.driverVendor').innerHTML = data.controllers[0].driverVendor;
      gpu.querySelector('.driverModel').innerHTML = data.controllers[0].driverModel;
      gpu.querySelector('.driverType').innerHTML = data.controllers[0].driverType;
      gpu.querySelector('.driverDeviceID').innerHTML = data.controllers[0].driverDeviceID;
      gpu.querySelector('.driverDeviceKey').innerHTML = data.controllers[0].driverDeviceKey;
      gpu.querySelector('.api').innerHTML = data.controllers[0].api;
      gpu.querySelector('.apiVersion').innerHTML = data.controllers[0].apiVersion;
      
   });

});