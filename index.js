//check bug before putting it pls

// const pargraph1 = document.getElementById("paragraph")
// pargraph1.textContent = "paragraph"

//ts so tuff

//check bug before putting it pls


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

//background musicconst 
playlist = [
  "resources/menu.mp3",
  "resources/aria math.mp3",
  "resources/Living Mice.mp3",
  "resources/his theme.mp3"
];

const audio = new Audio();
audio.volume = 0.5;

let shuffled = [];
let index = 0;
let started = false;

// Fisher–Yates shuffle (correct)
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startMusic() {
  if (started) return;
  started = true;

  shuffled = shuffle(playlist);
  index = 0;

  audio.src = shuffled[index];
  audio.play().catch(() => {});
}

// Start on first real user action
document.addEventListener("pointerdown", startMusic, { once: true });
document.addEventListener("keydown", startMusic, { once: true });

audio.addEventListener("ended", () => {
  index++;

  // reshuffle after all songs played
  if (index >= shuffled.length) {
    shuffled = shuffle(playlist);
    index = 0;
  }

  audio.src = shuffled[index];
  audio.play();
});

//ai is so useful that told me how to make this go to next track automatically
