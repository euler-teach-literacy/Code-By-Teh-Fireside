


//check bug before putting it pls


// clicking sound: keyboard click
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

let currentIndex = 0;
const player = document.createElement("audio");
player.preload = "auto";
document.body.appendChild(player);


function startMusic() {
  player.src = playlist[currentIndex];
  player.play().catch(() => {});
}

//interaction
["click", "keydown", "touchstart"].forEach(event => {
  document.addEventListener(event, startMusic, { once: true });
});

//Auto play
player.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  player.src = playlist[currentIndex];
  player.play();
});
//ai is so useful ,it told me how to make this go to next track automatically
