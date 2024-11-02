function displayRandomQuote() {
    fetch('quotes.txt')
        .then(response => response.text())
        .then(data => {
            const quotes = data.split('\n').filter(line => line.trim() !== '');
            
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const [quoteText, author] = quotes[randomIndex].split('#');
            
            document.getElementById("quote").innerText = `"${quoteText.trim()}"`;
            document.getElementById("author").innerText = author ? `— ${author.trim()}` : "";
        })
        .catch(error => {
            console.error("无法加载语录文件：", error);
            document.getElementById("quote").innerText = "无法加载语录";
            document.getElementById("author").innerText = "";
        });
}

window.onload = displayRandomQuote;