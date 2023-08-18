const clickButton = document.getElementById('clickButton');
const clickSound = new Howl({
  src: ['single_click_sound.mp3']
});

clickButton.addEventListener('click', () => {
  clickSound.play();
});
