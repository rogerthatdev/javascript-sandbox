const express = require('express', '4.18.2')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Hey world hey')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})