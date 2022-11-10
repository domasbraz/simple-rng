function rng()
{
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  let number = Math.floor((Math.random() * ((max + 1) - min)) + min);
  document.getElementById("main").innerHTML = number;
}
