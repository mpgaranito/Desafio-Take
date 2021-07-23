const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/index');

chai.should();
chai.use(chaiHttp);

describe('Request Controller', () => {
  it('should return with a success', (done) => {
    chai
      .request(server)
      .get('/api/get-repos-take')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql('success');
        done();
      });
  });

  it('should return the correct data type', (done) => {
    chai
      .request(server)
      .get('/api/get-repos-take')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.message[0].name.should.be.a('string');
        res.body.message[0].description.should.be.a('string');
        res.body.message[0].created_at.should.be.a('string');
        res.body.message[0].avatar.should.be.a('string');
        done();
      });
  });

  it('should return the correct name for each position', (done) => {
    chai
      .request(server)
      .get('/api/get-repos-take')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.message[0].should.have.property('name').eql('library.data');
        res.body.message[1].should.have.property('name').eql('library.logging');
        res.body.message[2].should.have.property('name').eql('CorrectNumber');
        res.body.message[3].should.have.property('name').eql('libphonenumber-csharp');
        res.body.message[4].should.have.property('name').eql('Takenet.Radar');
        done();
      });
  });
});
