let http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

    if (req.url === "/time") {
        res.end(`
            <html lang="ru">
                <body>
                    <h1 id="time">Loading time...</h1>
                    <script>     
                        const updateTime = () => {
                            const date = new Date();
                            const hours = date.getHours().toString().padStart(2, '0');  
                            const minutes = date.getMinutes().toString().padStart(2, '0');  
                            const seconds = date.getSeconds().toString().padStart(2, '0');  
                            document.getElementById('time').innerText = hours + ':' + minutes + ':' + seconds;};
                        updateTime();
                        setInterval(updateTime, 1000);
                    </script>
                    <a href="/">Main</a>
                </body>
            </html>
        `);
    } else {

        res.end('<h1>Добро пожаловать!</h1>' +
            '<a href="/time">Time</a>');
    }
});

server.listen(9000, () => {
    console.log(`Server is running at http://localhost:9000/`);
    console.log(`Server Time is running at http://localhost:9000/time`);
});
