let images = ["img/num-01.png",
"img/num-02.png",
"img/num-03.png",
"img/num-04.png",
"img/num-05.png",
"img/num-06.png",
"img/num-07.png",
"img/num-08.png",
"img/num-09.png",
"img/num-00.png"];
let tasu = document.querySelectorAll("img");

function roll() {
  tasu.forEach(function(die) {
    die.classList.add("shake");
  });
  setTimeout(function() {
    tasu.forEach(function(die) {
      die.classList.remove("shake");
    });

    let tasuOneValue = Math.floor(Math.random()*10);
    let tasuTwoValue = Math.floor(Math.random()*10);
    console.log(tasuOneValue,tasuTwoValue);
    document.querySelector("#num-1").setAttribute("src", images[tasuOneValue]);
    document.querySelector("#num-2").setAttribute("src", images[tasuTwoValue]);
    // document.querySelector("#total").innerHTML = "こたえは "+ ((tasuOneValue + 1) + (tasuTwoValue + 1)) + " です。";
},
 1000
  );
}

