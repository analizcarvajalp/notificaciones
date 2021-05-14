const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000

//TODO: build a server side rendering logic for React

app
    .use(express.static(path.join(__dirname, '..', 'build', 'index.html')))

    //Common fallback
    .get('/*', (req, res) => {
        console.log(
            `Sending main app at ${ new Date() }. `
            + `Remote address: ${ req.connection.remoteAddress }. `
            + `Forwarded for: ${ req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : 'N/A' }.`
        )
        res.sendFile(path.join(__dirname, '..', 'build' ,'index.html'))
    })

    .listen(PORT, () => console.log(`Server initialized. Listening on ${ PORT }`))