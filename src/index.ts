import express, { Express, Request, Response } from 'express'

const server: Express = express()
// Do not run on 8080 because its the actanalyzer's port
const port = 8081

server.get('/', (request: Request, response: Response) => {
    response.sendFile(__dirname + "/pages/index.html");
})

server.listen(port, () => console.log(`Running on http://localhost:${port}/`))