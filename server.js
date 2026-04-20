const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Read Online - Athena' })
})

app.get('/browse', (req, res) => {
    res.render('browse', {
        title: 'Solo Leveling',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quod beatae cumque dicta dolore nisi!',
        genre: 'Action' 
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



