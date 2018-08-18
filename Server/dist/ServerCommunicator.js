"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
class ServerCommunicator {
    constructor() {
        this.port = process.env.PORT || 8082;
        this.app = express();
    }
    start() {
        this.middleware();
        this.routes();
        this.listen();
    }
    middleware() {
        this.app.use(cors());
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello from server :)');
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}
exports.default = ServerCommunicator;
