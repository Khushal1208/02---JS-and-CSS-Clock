const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Calculate the correct second hand position
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Calculate the correct minute hand position
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // Calculate the correct hour hand position (including minutes for smooth movement)
  const hours = now.getHours();
  const hoursDegrees = ((hours % 12) / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Prevents glitch when second hand resets to 0
  if (seconds === 0) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
}

// Run function every second
setInterval(setDate, 1000);
setDate(); // Initial call to set correct time immediately