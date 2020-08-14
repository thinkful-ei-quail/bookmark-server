const app = require('./app');
const {PORT} = require('./config');
function main()
{
    console.log(`Listening on port:${PORT}`)
}

app.listen(PORT,main)