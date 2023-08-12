class Tamagotchi {
    constructor() {
      this.nombre = "Stitch";
      this.hambre = 0;
      this.felicidad = 0;
      this.energia = 100;
    }
  
    nacer() {
      setInterval(() => {
        this.estadoActual();
        this.mostrarEstado;
        this.hambre += 5;
        this.felicidad -= 5;
        this.energia -= 5;
        this.revisionEstado();
      }, 5000);
    }
  
    detener() {
      clearInterval(vida);
      this.mostrarAlerta(`El tamagotchi ${this.nombre} ha sido detenido.`);
    }
  
    comer() {
      this.hambre -= 10;
      this.felicidad += 5;
      this.energia += 5;
      this.mostrarAlerta(`Has alimentado a ${this.nombre}.`);
      this.revisionEstado();
    }
  
    jugar() {
      this.hambre += 2;
      this.felicidad += 2;
      this.energia -= 2;
      this.mostrarAlerta(`Has jugado con ${this.nombre}.`);
      this.revisionEstado();
    }
  
    dormir() {
      this.hambre +=2;
      this.felicidad -= 2;
      this.energia += 3;
      this.mostrarAlerta(`Has puesto a dormir a ${this.nombre}.`);
      this.revisionEstado();
    }
  
    estadoActual() {
      console.log(
        `Estado de ${this.nombre}: Hambre: ${this.hambre}, Felicidad: ${this.felicidad}, Energía: ${this.energia}`
      );
    }
  
    revisionEstado() {
      if (this.hambre >= 60) {
        this.mostrarAlerta(`${this.nombre} tiene hambre. ¡Dale de comer!`);
        this.mostrarEstado();
      }
  
      if (this.felicidad <= 10) {
        this.mostrarAlerta(
          `${this.nombre} está triste. ¡Vamos a jugar para animarlo!`
        );
        this.mostrarEstado();
      }
      if (this.energia <= 20) {
        this.mostrarAlerta(`${this.nombre} está cansado. ¡vamos a dormir!`);
        this.mostrarEstado();
      }
    }
  
    mostrarEstado() {
      const estadoElement = document.getElementById("estado");
      estadoElement.innerHTML = `Hambre: ${this.hambre}, Felicidad: ${this.felicidad}, Energía: ${this.energia}`;
    }
  
    mostrarAlerta(mensajeAlerta) {
      const alerta = document.getElementById("alerta");
      alerta.innerHTML = mensajeAlerta;
    }
  
    revivir() {
      if (this.hambre >= 100 || this.felicidad <= 0 || this.energia <= 0) {
        this.mostrarAlerta(`${this.nombre} ha sido revivido.`);
        this.hambre = 0;
        this.felicidad = 0;
        this.energia = 100;
      }
    }
  }
  
  const Stitch = new Tamagotchi();
  
  vida = setTimeout(() => {
    Stitch.detener();
  }, 200000);
  
  Stitch.nacer();
  Stitch.mostrarEstado();
  Stitch.estadoActual();
  
  const $btnComer = document.getElementById("btn-comer"),
    $btnJugar = document.getElementById("btn-jugar"),
    $btnDormir = document.getElementById("btn-dormir");
  
  function cambioEstado(imagen) {
    const $imagen = document.getElementById("tamagotchi");
    $imagen.src = imagen;
  }
  
  document.addEventListener("click", (e) => {
    if (e.target === $btnComer) {
      cambioEstado("./assets/comer.png");
      Stitch.comer();
      Stitch.mostrarEstado();
    }

    if (e.target === $btnJugar) {
      cambioEstado("./assets/jugar.png");
      Stitch.jugar();
      Stitch.mostrarEstado();
    }
    if (e.target === $btnDormir) {
      cambioEstado("./assets/dormir.png");
      Stitch.dormir();
      Stitch.mostrarEstado();
    }
  });