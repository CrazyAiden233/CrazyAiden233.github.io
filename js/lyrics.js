function displayRandomLyrics() {
    fetch('lyrics.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const { lyrics, title } = data[randomIndex];
            
            document.getElementById("lyrics").innerText = `"${lyrics}"`;
            document.getElementById("title").innerText = title ? `${title}` : "";
        })
        .catch(error => {
            console.error("无法加载歌词文件：", error);
            document.getElementById("lyrics").innerText = "无法加载歌词";
            document.getElementById("title").innerText = "";
        });
}

window.onload = displayRandomLyrics;