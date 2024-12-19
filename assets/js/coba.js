function bukaUndangan(){
    const s1 = document.querySelector('#section-1');
    const s2 = document.querySelector('#section-2');
    const s3 = document.querySelector('#section-3');
    const s4 = document.querySelector('#section-4');
    const s5 = document.querySelector('#section-5');
    const s6 = document.querySelector('#section-6');
    const s7 = document.querySelector('#section-7');
    const s8 = document.querySelector('#section-8');
    const s9 = document.querySelector('#section-9');
    s1.style.display = 'none';
    s2.style.display = 'block';
    s3.style.display = 'block';
    s4.style.display = 'block';
    s5.style.display = 'block';
    s6.style.display = 'block';
    s7.style.display = 'block';
    s8.style.display = 'block';
    s9.style.display = 'block';

    const musik = document.querySelector('#kotak-musik');
    musik.style.display = 'block';
    const lagu = document.querySelector('#lagu');
    lagu.play();

    document.getElementById('topnav').style.display = 'block';

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

console.log('JavaScript code executed');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is ready');

  const form = document.getElementById('rsvp-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  console.log('Form element:', form);
  console.log('Confirmation message element:', confirmationMessage);

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rsvp = document.getElementById('rsvp').value.trim();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('RSVP:', rsvp);

    // Form validation
    if (!name || !email || !rsvp) {
      alert('Please fill out all fields');
      return;
    }

    // Optional: email validation (basic regex example)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Send the RSVP response to the server
    axios.post('/rsvp', { name, email, rsvp })
      .then(function(response) {
        console.log('RSVP response:', response);
        confirmationMessage.innerHTML = `Thank you for your RSVP, ${name}!`;
        form.reset(); // Reset the form after submission
      })
      .catch(function(error) {
        console.error('Error sending RSVP:', error);
        alert('There was an error submitting your RSVP. Please try again.');
      });
  });

  form.addEventListener('reset', function() {
    console.log('Form reset');
    confirmationMessage.innerHTML = ''; // Clear confirmation message on reset
  });
});

