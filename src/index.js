import app from'./app.js';

const port = process.env.PORT

//Puerto
app.listen(port, () => {
    console.log(`Escuchando en puerto: ${port}`);
})
