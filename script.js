function getColors() {
  const anneau1 = parseInt(document.getElementById("anneau1").value);
  const anneau2 = parseInt(document.getElementById("anneau2").value);
  const anneau3 = parseInt(document.getElementById("anneau3").value);
  const anneau4 = parseFloat(document.getElementById("anneau4").value);
  const calc = document.getElementById("calc");

  if (anneau3 === -1) {
    calc.textContent = ` ${(anneau1 * 10 + anneau2) / 10} Ω  ±${anneau4} %`;
  } else if (anneau3 === -2) {
    calc.textContent = ` ${(anneau1 * 10 + anneau2) / 100} Ω  ±${anneau4} %`;
  } else {
    let totale = (anneau1 * 10 + anneau2) * 10 ** anneau3;
    if (totale <= 990) {
      totale = totale / 1;
      calc.textContent = `${totale} Ω  ±${anneau4} %`;
    } else if (totale > 990 && totale <= 990000) {
      totale = totale / 1000;
      calc.textContent = `${totale} KΩ  ±${anneau4} %`;
    } else if (totale > 990000 && totale <= 990000000) {
      totale = totale / 1000000;
      calc.textContent = `${totale} MΩ  ±${anneau4} %`;
    } else {
      totale = totale / 1000000000;
      calc.textContent = `${totale} GΩ  ±${anneau4} %`;
    }
  }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getColors();
    }
});
