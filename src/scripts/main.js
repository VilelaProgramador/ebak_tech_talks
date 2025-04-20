document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      once: true // anima apenas uma vez
    });
  
    const contador = document.getElementById('contador');
    if (!contador) return;
  
    const dataDoEvento = new Date('April 26 2025 09:00:00 GMT-0300');
    const timeStampDoEvento = dataDoEvento.getTime();
  
    const contaAsHoras = setInterval(function () {
      const agora = new Date();
      const timeStampAtual = agora.getTime();
      const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
  
      const diasEmMs = 1000 * 60 * 60 * 24;
      const horasEmMs = 1000 * 60 * 60;
      const minutoEmMs = 1000 * 60;
      const segundosEmMs = 1000;
  
      const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
      const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
      const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutoEmMs);
      const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundosEmMs);
  
      contador.innerHTML = `${diasAteOEvento} d ${horasAteOEvento} h ${minutosAteOEvento} m ${segundosAteOEvento} s`;
  
      if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contador.innerHTML = 'O evento já aconteceu!';
      }
    }, 1000);
  });