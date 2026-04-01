const express = require('express') /* importing express */
const app = express() /* creating an express instance */
const port = 3000 /* defing a port number */
const postsRouter = require('./routes/posts') /* importing routing */


app.use('/static', express.static('public')) /* to read static files */

app.get('/', (req, res) => {
    res.send('Server del mio blog') /* sending a response */
})

app.use('/posts', postsRouter) /* using the posts router */


app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`) /* starting the server */
})