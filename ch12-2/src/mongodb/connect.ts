const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:1111@cluster0.vpvhi.mongodb.net/typescript?retryWrites=true&w=majority";
export const connect = () => {
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}