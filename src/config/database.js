import mongoose from 'mongoose';

const conection = async () => {

    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log('Base de datos conectada');

    } catch (err) {
        console.log(err);
    }

};

export default conection()