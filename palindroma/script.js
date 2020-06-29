var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var par = document.getElementById("parola").value;
  console.log(par);
  //console.log(checkPalindromaV2(par));

  if (par != "") {
    console.log(checkPalindroma(par));
  } else {
    alert("Devi scrivere una parola!");
  }

});

function checkPalindroma(parola) {
  var splitted = parola.split('');
  var flag = true;
  console.log(splitted);
  for (var i = 0; i < splitted.length; i++) {
    var k = (splitted.length - 1) - i;
    console.log(k);

    if (splitted[i] == splitted[k]) {
      flag = true;
    } else {
      flag = false;
    }
  }

  return flag;
}

// function checkPalindromaV2(parola) {
//   console.log(parola.split('').reverse().join(''));
//   return parola == parola.split('').reverse().join('');
// }
