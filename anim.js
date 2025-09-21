// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Otra mañana, por mi ventana", time: 12.5 },
  { text: "Ya se van las nubes de abril", time: 14 },
  { text: "Cuanto pasamos, risas y llantos", time: 23.5 },
  { text: "Yo no esperaba verme así", time: 25 },
  { text: "Siento las mismas ganas como la primera vez", time: 35 },
  { text: "Y no sé que hacer", time: 42 },
  { text: "No entiendo si es amor", time: 47 },
  { text: "Pero siempre que hablo de vos", time: 48.5 },
  { text: "El mundo es un poco mejor", time: 55.5 },
  { text: "Y aunque no lo busqué", time: 60 },
  { text: "Creo que ya encontré la sensación", time: 61 },
  { text: "No entiendo si es amor", time: 69.5 },

  { text: "Hace una semana me dejé de joder", time: 83.5 },
  { text: "Cambié mi forma de ser", time: 84.4 },
  { text: "Mi rol, mi papel", time: 90.3 },
  { text: "Y quiero que lo sepas, tenés mucho que ver", time: 91.2 },
  { text: "Nadie me conoce tan bien", time: 98 },
  { text: "Siento las mismas ganas como la primera vez", time: 106.5 },
  { text: "Y sigo sin saber que hacer", time: 111.5 },
  { text: "No entiendo si es amor", time: 116.3 },
  { text: "Pero siempre que hablo de vos", time: 117.5 },
  { text: "El mundo es un poco mejor", time: 126 },
  { text: "Y aunque no lo busqué", time: 130.5 },
  { text: "Creo que ya encontré la sensación", time: 133.5 },
  { text: "No entiendo si es amor, uh-oh", time: 139.5 },
  { text: "Me paso todo el día pensando en vos", time: 164 },
  { text: "Y no puedo evitarlo", time: 165.5 },
  { text: "Me paso todo el día pensando en vos", time: 177 },
  { text: "Y sin decírtelo", time: 182 },
  { text: "No entiendo si es amor", time: 184 },
  { text: "Pero siempre que hablo de vos", time: 190 },
  { text: "El mundo es un poco mejor", time: 195 },
  { text: "Y aunque no lo busqué", time: 197 },
  { text: "Creo que ya encontré la sensación", time: 202 },
  { text: "No entiendo si es amor", time: 209 },
  { text: "Uh-uh-uh-uh", time: 214 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);