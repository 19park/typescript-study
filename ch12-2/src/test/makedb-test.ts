import {connect} from '../mongodb/connect'

const makedbTest = async() => {
    let connection
    try {
        connection = await connect()
        connection.connect(err => {
            const db = connection.db('ch12-2')
            console.log('db', db)
            connection.close();
          });
    } catch(e) {
        console.log(e.message)
    } finally {
        connection.close()
    }
}

makedbTest()