const pargraph1 = document.getElementById("paragraph")
pargraph1.textContent = "paragraph"

//ts so tuff




// clicking sound: keyboard click
var clicking_time = 0

const kbc_b = document.querySelector('.click_button');
const kbc_s = new Audio('resources/keyboard_click.mp3');

kbc_b.addEventListener('click', () => {
  kbc_s.play();
});

if (kbc_s.play){
  clicking_time += 1;
};
// // // / /// // // // / // / / // /
