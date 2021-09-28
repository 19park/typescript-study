import * as express from 'express'

class App {

  public app:express.Application;
  public port:number;

  constructor() {
    this.app = express();
    this.port = 8989;
    this.testUrl();
    this.listen();
  }

  public testUrl() {
    this.app.get('/', (req, res) => {
      res.sendStatus(200);
    });
  };

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default new App();