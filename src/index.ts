import express, { Express, Request, Response } from 'express'
import hbs from 'hbs'

import { getTranslationsFor } from './lang'
import { processSearchHistoryData } from './logic'
import { 
    getAllUsers, getCategorisedUserSearches, 
    getTotalUserSearches, getUser 
} from './api'

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

server.get('/users/searches/detailed', async (request: Request, response: Response) => {
    const browserLanguage = request.acceptsLanguages()[1]

    let userId = request.query.id?.toString() ?? "1"

    let userInfo = await getUser(userId)
    let userTotalSearches = await getTotalUserSearches(userId)
    let userCategorisedSearches = await getCategorisedUserSearches(userId)

    response.render('users-searches-detailed.hbs', { 
        translation: getTranslationsFor(browserLanguage),
        
        user: userInfo,
        totalSearches: userTotalSearches,

        summarisedData: processSearchHistoryData(userTotalSearches, userCategorisedSearches)
    })
})

server.get('/users/searches/recommend', async (request: Request, response: Response) => {
    const browserLanguage = request.acceptsLanguages()[1]
})

server.listen(port, () => console.log(`Running on http://localhost:${port}/`))