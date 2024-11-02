function displayRandomLyric() {
    fetch('lyrics.txt')
        .then(response => response.text())
        .then(data => {
            const lyricsArray = data.split('\n').filter(line => line.trim() !== '');
            
            const randomIndex = Math.floor(Math.random() * lyricsArray.length);
            const [lyricText, songTitle] = lyricsArray[randomIndex].split('#');
            
            document.getElementById("lyrics").innerText = `"${lyricText.trim()}"`;
            document.getElementById("title").innerText = songTitle ? `— ${songTitle.trim()}` : "";
        })
        .catch(error => {
            console.error("无法加载歌词文件：", error);
            document.getElementById("lyrics").innerText = "无法加载歌词";
            document.getElementById("title").innerText = "";
        });
}

window.onload = displayRandomLyric;