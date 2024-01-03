import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { dbInstance } from './middleware/dbInstance';


// Create Express server instance
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(dbInstance);

/* --- Home Routes --- */
app.get('/', (req, res) => {
    const filePath = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8');
    res.send(filePath);
    // log the request ip address and browser info and file requested
    console.log('Request from:',req.url, req.method);
});

/* Cheak Db connected or not */
app.get('/db', (req, res) => {
    const db = (req as any).db;
    if (db) {
        res.send({ status: 'success', message: 'Database connected successfully' });
        console.log('Request from:',req.url, req.method);
    }
    else {
        res.send({ status: 'error', message: 'Database connection failed' });
        console.log('Request from:',req.url, req.method);
    }
});


// Other Routes import
import testRoutes from './routes/testRoutes';

// Use Routes
app.use('/api/v1', testRoutes);

export default app;