const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));

// Router files


// Routes
app.get('/api/test', (req, res, next) => {
    res.json({
        messgae: 'Route Working'
    });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// eslint-disable-next-line
function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found!', status: 404, url: req.originalURL });
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined;
    res.status(500).send({ error: err.messgae, stack, url: req.originalURL });
}

app.listen(PORT, () => {
    console.log(`this is running on port: ${PORT}`);
});