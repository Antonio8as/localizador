function updateTimeAndDate() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    document.getElementById("time").textContent = `Hora: ${time}`;
    document.getElementById("date").textContent = `Fecha: ${date}`;
  }
  
  // Obtener ubicación del usuario
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        document.getElementById("location").textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Long ${longitude.toFixed(2)}`;
      }, () => {
        document.getElementById("location").textContent = "Ubicación: No disponible";
      });
    } else {
      document.getElementById("location").textContent = "Ubicación: No soportada";
    }
  }
  
  // Inicializar
  updateTimeAndDate();
  getLocation();
  setInterval(updateTimeAndDate, 1000);
  