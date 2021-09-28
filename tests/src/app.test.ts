import * as request from 'supertest'
import App from './app'

describe('Test the root path', () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
    });
    
    it('Should do something', (done) => {
        request(App.app)
        .get(`/`)
        .expect(200)
        .then(() => { done(); })
        .catch(done);
    });
});