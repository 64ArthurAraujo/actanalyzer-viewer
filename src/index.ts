import express, { Express, Request, Response } from 'express'
import hbs from 'hbs'

import { getTranslationsFor } from './lang'
import { getAllUsers } from './api'

const server: Express = express()
// Do not run on 8080 because its the actanalyzer's port
const port = 8081

server.set('view engine', 'hbs')
server.set('views', __dirname + "/views")


server.get('/', (request: Request, response: Response) => {
    const browserLanguage = request.acceptsLanguages()[1]

    response.render('index.hbs', { translation: getTranslationsFor(browserLanguage) })
})

server.get('/users/list', async (request: Request, response: Response) => {
    const browserLanguage = request.acceptsLanguages()[1]

    response.render('users-list.hbs', { 
        translation: getTranslationsFor(browserLanguage),
        users: await getAllUsers()
    })
})

server.listen(port, () => console.log(`Running on http://localhost:${port}/`))