import mongoose from 'mongoose'

const connectmongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to mongodb");
    } catch (error) {
        console.log('error to connecting to mongodb')
    }
}
export default connectmongo;