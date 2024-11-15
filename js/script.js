//歌词
function displayRandomLyrics() {
    fetch('lyrics.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const {lyrics, title} = data[randomIndex];

            document.getElementById("lyrics").innerText = `"${lyrics}"`;
            document.getElementById("title").innerText = title ? `${title}` : "";
        })
        .catch(error => {
            console.error("无法加载歌词文件：", error);
            document.getElementById("lyrics").innerText = "无法加载歌词";
            document.getElementById("title").innerText = "";
        });
}

//网站建立时间
function secondToDate(second) {
    if (!second) {
        return 0;
    }
    var time = [0, 0, 0, 0, 0];
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
    }
    if (second > 0) {
        time[4] = second;
    }
    return time;
}

function setTime() {
    //mouth要少一个月不然会出问题
    var create_time = Math.round(new Date(Date.UTC(2024, 10, 7, 0, 0, 0)).getTime() / 1000);
    var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
    var currentTime = secondToDate((timestamp - create_time));
    var currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
        + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
        + '秒';
    if (document.getElementById("htmer_time") != null)
        document.getElementById("htmer_time").innerHTML = "本站已存活" + currentTimeHtml;
}

//即时刷新
setInterval(setTime, 1000);

var gitalk = new Gitalk({
    clientID: 'Ov23liXTkkFAIxUqpowa',
    clientSecret: '77d71890245d3827fff9aaf4aebba0fbce948992',
    repo: 'CrazyAiden233.github.io',
    owner: 'CrazyAiden233',
    admin: ['CrazyAiden233'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})
gitalk.render('gitalk-container');

let loader = document.querySelector(".loader");
window.onload = function () {
    loader.style.display = "none";
    displayRandomLyrics();
}
