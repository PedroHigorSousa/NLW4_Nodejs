import 'reflect-metadata'
import express from 'express'

// Database
import './database'

const app = express()

app.listen(3333, () => console.log('Server is running ...'));