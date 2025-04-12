const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});