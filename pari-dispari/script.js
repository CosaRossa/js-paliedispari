var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var pariDispari = document.getElementById("seleziona").value;
  var num = parseInt(document.getElementById("num").value);
  var numCPU = Math.floor(Math.random()*(5)) + 1;
  var sum = num + numCPU;
  console.log(sum);

  if ((pariDispari == 0 && sum % 2 == 0) || (pariDispari == 1 && sum % 2 == 1)) {
    console.log("Hai Vinto!"); 
  } else if (pariDispari == "") {
    console.log("Seleziona Pari o Dispari");
  } else {
    console.log("Hai Perso!");
  }
});
