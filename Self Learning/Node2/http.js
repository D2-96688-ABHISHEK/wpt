const http = require('http')

const users = [
    { uid: 1, name: 'anil', age: 30 },
    { uid: 2, name: 'mukesh', age: 35 },
    { uid: 3, name: 'ramesh', age: 40 },
    { uid: 4, name: 'suresh', age: 45 }
]

const products = [
    { pid: 1, name: 'Pen', price: 20 },
    { pid: 2, name: 'Book', price: 35 },
    { pid: 3, name: 'Pencil', price: 4 },
    { pid: 4, name: 'Eraser', price: 5 }
]

const server = http.createServer((req, res) => {
    const path = req.url
    const method = req.method
    res.setHeader('content-type', 'text/html')
    if (path == '/users') {
        if (method == 'GET') {
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(users))
        }
        else if (method == 'POST') {
            res.end('<h1>USER DATA INSERTED</h1>')
        }
        else if (method == 'PUT') {
            res.end('<h1>USER DATA UPDATED</h1>')
        }
        else if (method == 'DELETE') {
            res.end('<h1>USER DATA DELETED</h1>')
        }
    }
    else if (path == '/products') {
        if (method == 'GET') {
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify(products))
        }
        else if (method == 'POST') {
            res.end('PRODUCT DATA INSERTED')
        }
        else if (method == 'PUT') {
            res.end('PRODUCT DATA UPDATED')
        }
        else if (method == 'DELETE') {
            res.end('PRODUCT DATA DELETED')
        }
    } else {
        res.end('Inavlid path')
    }
})

server.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
})