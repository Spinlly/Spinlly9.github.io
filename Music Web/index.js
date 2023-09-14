const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'Assets/Music 20.mp3',
        displayName: 'Sempurna',
        cover: 'Assets/img/Anime 20.jpg',
        artist: 'Andra And The Backbone',
    },
    {
        path: 'Assets/Music 2.mp3',
        displayName: 'Not You- (Alan Walker-speed up)',
        cover: 'Assets/img/Anime 2.jpg',
        artist: 'Emma Steinbakken',
    },
    {
        path: 'Assets/Music 3.mp3',
        displayName: 'Closed Doors- (speed-up)',
        cover: 'Assets/img/Anime 3.jpg',
        artist: 'Ismail',
    },
    {
        path: 'Assets/Music 4.mp3',
        displayName: 'Angels Like You- (speed-up)',
        cover: 'Assets/img/Anime 4.jpg',
        artist: 'Miley Cyrus',
    },
    {
        path: 'AssetsMusic 5.mp3',
        displayName: 'Jiwa Yang Bersedih',
        cover: 'Assets/img/Anime 5.jpg',
        artist: 'Ghea Indrawari',
    },
    {
        path: 'Assets/Music 6.mp3',
        displayName: 'Old Love',
        cover: 'Assets/img/Anime 6.jpg',
        artist: 'Yuji, Putri Dahlia',
    },
    {
        path: 'Assets/Music 7.mp3',
        displayName: 'Dandelions',
        cover: 'Assets/img/Anime 7.jpg',
        artist: 'Ruth B.',
    }, 
    {
        path: 'Assets/Music 8.mp3',
        displayName: 'Right Now',
        cover: 'Assets/img/Anime 8.jpg',
        artist: 'Ruth B.',
    },
    {
        path: 'Assets/Music 9.mp3',
        displayName: 'Perfect',
        cover: 'Assets/img/Anime 9.jpg',
        artist: 'Ed Sheeran',
    },
    {
        path: 'Assets/Music 10.mp3',
        displayName: 'Blue Jeans',
        cover: 'Assets/img/Anime 10.jpg',
        artist: 'GANGGA',
    },
    {
        path: 'Assets/Music 11.mp3',
        displayName: 'As It Was',
        cover: 'Assets/img/Anime 11.jpg',
        artist: 'Harry Styles',
    },
    {
        path: 'Assets/Music 12.mp3',
        displayName: 'A Year Ago',
        cover: 'Assets/img/Anime 12.jpg',
        artist: 'James Arthur',
    },
    {
        path: 'Assets/Music 13.mp3',
        displayName: 'Car`s Outside',
        cover: 'Assets/img/Anime 13.jpg',
        artist: 'James Arthur',
    },
    {
        path: 'Assets/Music 14.mp3',
        displayName: 'Tattoo',
        cover: 'Assets/img/Anime 14.jpg',
        artist: 'Loreen',
    },
    {
        path: 'Assets/Music 15.mp3',
        displayName: 'Love In The Dark',
        cover: 'Assets/img/Anime 15.jpg',
        artist: 'Adele',
    },
    {
        path: 'Assets/Music 16.mp3',
        displayName: 'Disenchanted',
        cover: 'Assets/img/Anime 16.jpg',
        artist: 'My Chemical Romance',
    },
    {
        path: 'Assets/Music 17.mp3',
        displayName: '18 one direction',
        cover: 'Assets/img/Anime 17.jpg',
        artist: 'One Direction',
    },
    {
        path: 'Assets/Music 18.mp3',
        displayName: 'Scoot Street',
        cover: 'Assets/img/Anime 18.jpg',
        artist: 'Phoebe Bridgers',
    },
    {
        path: 'Assets/Music 19.mp3',
        displayName: 'Diamonds',
        cover: 'Assets/img/Anime 19.jpg',
        artist: 'Rihanna',
    },
    {
        path: 'Assets/Music 1.mp3',
        displayName: 'Dakishimeru Made',
        cover: 'Assets/img/Anime 1.jpg',
        artist: 'Kotoha',
    },
   
    

];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);