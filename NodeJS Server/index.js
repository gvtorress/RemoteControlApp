import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import mainRoutes from './src/routes/main.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/main', mainRoutes)

app.listen(8000, () => {
    console.log('Running Server')
})
