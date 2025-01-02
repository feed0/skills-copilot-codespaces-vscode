// Create web server
// 1. Load express module
const express = require('express')
// 2. Create express object
const app = express()
// 3. Create a route
app.get('/comments', (req, res) => {
    // 4. Send the response
    res.send('Comments page')
})
// 5. Start the server
app.listen(3000, () => {
    console.log('Server is running')
})