function calculate() {
  var p = 0;
  var y = 0;
  var r = 0;
  var SI = 0;

  p = parseInt(document.getElementById("principle").value);
  y = parseInt(document.getElementById("years").value);
  r = parseInt(document.getElementById("rate").value);

  SI = (p * y * r) / 100;
  document.getElementById("res").innerHTML = SI;
}
