const request = require("jest")
const app = require("./routes/User")
const mongoose = require('mongoose')


// describe('Test the root path', () => {
    test.todo("The post method should give a response"), () => {
        const response = request(app).post("http://localhost:8000/User/add").json(
            {
                "Name": "Syed Zulkifal Banuri",
                "Email": "syed@gmail.com",
                "Age" : 20,
                "Contact": 22
            }
        )
        expect(response.statusCode).toBe(100)

    }

    test.todo("The delete method should give a response"), () => {
        const response = request(app).delete("http://localhost:8000/User/:id").json(
            {
                "Name": "Syed Zulkifal Banuri",
                "Email": "syed@gmail.com",
                "Age" : 20,
                "Contact": 22
            }
        )
        expect(response.statusCode).toBe(100)

    }
   
// })
