"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbInstance_1 = require("./middleware/dbInstance");
// Create Express server instance
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(dbInstance_1.dbInstance);
/* --- Home Routes --- */
app.get('/', (req, res) => {
    const filePath = fs_1.default.readFileSync(path_1.default.join(__dirname, '../public/index.html'), 'utf-8');
    res.send(filePath);
    // log the request ip address and browser info and file requested
    console.log('Request from:', req.ip, req.headers['user-agent'], req.url, req.method);
});
/* Cheak Db connected or not */
app.get('/db', (req, res) => {
    const db = req.db;
    if (db) {
        res.send({ status: 'success', message: 'Database connected successfully' });
        console.log('Request from:', req.ip, req.headers['user-agent'], req.url, req.method);
    }
    else {
        res.send({ status: 'error', message: 'Database connection failed' });
        console.log('Request from:', req.ip, req.headers['user-agent'], req.url, req.method);
    }
});
// Other Routes import
// import basicRoutes from './routes/basicRoutes';
// Use Routes
// app.use('/api', basicRoutes);
exports.default = app;
