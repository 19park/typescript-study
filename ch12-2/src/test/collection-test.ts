import {connect} from '../mongodb/connect'

const makeCollectionsTest = async() => {
    let connection
    try {
        connection = await connect()
        connection.connect(err => {
            const db = connection.db('ch12-2')
            const personsCollection = db.collection('persons')
            const addressesCollection = db.collection('addresses')
            console.log(personsCollection, addressesCollection)
            connection.close()
          });
    } catch(e) {
        console.log(e.message)
    } finally {
        connection.close()
    }
}

makeCollectionsTest()