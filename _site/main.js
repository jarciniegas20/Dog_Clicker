
document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');
    
    const clickSound = new Howl({
      src: ['single_click_sound.mp3'],
      html5: true
    });
    
    clickButton.addEventListener('click', () => {
      clickSound.play();
    });
  });
  
  
  
  