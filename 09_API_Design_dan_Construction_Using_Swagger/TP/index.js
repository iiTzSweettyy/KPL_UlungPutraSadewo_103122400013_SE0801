const express = require('express');
const { specs, swaggerUi } = require('./swagger.js');
const app = express();
const port = 3000;

const menuData = {
    bakmi: {
        "bakmi ayam spesial": 25000,
        "bakmi rica-rica": 28000,
        "bakmi komplit (bakso pangsit)": 35000
    },
    rames: {
        "nasi rames biasa": 15000,
        "nasi rames rendang": 25000,
        "nasi rames telur balado": 18000
    }
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /menu:
 *     get:
 *       summary: Ambil semua kategori menu
 *       responses:
 *         200:
 *           description: Daftar kategori berhasil diambil
 */
app.get('/menu', (req, res) => {
    const categories = Object.keys(menuData);
    res.json({
        kategori_tersedia: categories
    });
});

/**
 * @swagger
 * /menu/{category}:
 *     get:
 *       summary: Ambil menu berdasarkan kategori
 *       parameters:
 *         - in: path
 *           name: category
 *           required: true
 *       description: Nama kategori menu
 *       schema:
 *         type: string
 *       responses:
 *         200:
 *           description: Menu berhasil diambil
 *         404:
 *           description: Kategori tidak ditemukan
 */
app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const menu = menuData[category];

    if (menu) {
        res.json(menu);
    } else {
        res.status(404).json({ error: "Menu tidak ditemukan" });
    }
});

app.listen(port, () => {
    console.log(`Server jalan di http://localhost:${port}`);
    console.log(`Cek Swagger di http://localhost:${port}/docs`);
});