//check bug before putting it pls

// const pargraph1 = document.getElementById("paragraph")
// pargraph1.textContent = "paragraph"


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
// ===== Audio setup =====
let currentIndex = 0;
const player = document.createElement("audio");
player.preload = "auto";
player.volume = 0.5; // optional
document.body.appendChild(player);

// ===== Start music on FIRST user action =====
function startMusic() {
  player.src = playlist[currentIndex];
  player.play().catch(() => {});
}

// Listen for ANY real user interaction (once)
["click", "keydown", "touchstart"].forEach(event => {
  document.addEventListener(event, startMusic, { once: true });
});

// ===== Auto play next track =====
player.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  player.src = playlist[currentIndex];
  player.play();
});
//ai is so useful that told me how to make this go to next track automatically
