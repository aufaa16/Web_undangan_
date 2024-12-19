function lihatUndangan(){
    const cover = document.querySelector('cover');
    const qoutes = document.querySelector('#qoutes');
    const couple = document.querySelector('#couple');
    const WD = document.querySelector('#WD');
    const tamu = document.querySelector('#tamu');
    const gallery = document.querySelector('#gallery');
    const RSVP = document.querySelector('RSVP');

    cover.style.display = 'none';
    qoutes.style.display = 'block';
    WD.style.display = 'block';
    tamu.style.display = 'block';
    gallery.style.display = 'block';
    RSVP.display = 'block';

    lagu.play();

}

function putarLagu(){
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');

    if(lagu.paused){
        lagu.play();
        tombol.src = 'assets/img/pngfind.com-musical-notes-png-1011808.png';
    }else{
        lagu.pause();
        tombol.src = 'assets/img/musik-on.png';
    }
}

// Set the date we're counting down to
var targetDate = new Date("sep 8, 2027").getTime();

// Set the interval to update the countdown every second
var interval = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the target date
  var distance = targetDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the #countdown element
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, clear the interval
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    alert("TIME'S UP!");
  }
}, 1000);

const form = document.getElementById('rsvp-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmationMessage.innerHTML = 'Terima kasih atas RSVP Anda! Kami akan segera menghubungi Anda.';
});