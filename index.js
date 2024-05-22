const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Category');
const brandsRouter = require('./routes/Brands');
const cors = require('cors')

const server = express();

// Middleware to parse JSON request bodies
server.use(cors({
    exposedHeaders:['X-Total-Count']
})) //to solve the cross origin issue ...we cant call from one port to another
server.use(express.json());
server.use('/products',productRouter.router);
server.use('/categories',categoriesRouter.router);
server.use('/brands',brandsRouter.router);

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
      
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

// Root route for testing the server
server.get('/', (req, res) => {
    res.json({ status: "success" });
});



// Global error handler
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

server.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
