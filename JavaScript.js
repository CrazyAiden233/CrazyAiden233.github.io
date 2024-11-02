function displayRandomlyrics() {
    fetch('lyrics.txt')
        .then(response => response.text())
        .then(data => {
            const lyrics = data.split('\n').filter(line => line.trim() !== '');
            
            const randomIndex = Math.floor(Math.random() * lyrics.length);
            const [lyricsText, title] = lyrics[randomIndex].split('#');
            
            document.getElementById("lyrics").innerText = `"${lyricsText.trim()}"`;
            document.getElementById("title").innerText = title ? `— ${title.trim()}` : "";
        });
}
window.onload = displayRandomlyrics;