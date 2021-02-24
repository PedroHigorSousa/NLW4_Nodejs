import 'reflect-metadata'
import express from 'express'
import routes from './routes'

// Database
import './database'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log('Server is running ...')
    console.log('http://127.0.0.1:3000')
})