const { expect } = require('chai');

const { getOrg } = require('../fixtures/api.test');

describe('Get ORG TakeNet', () => {
  it('should return a promise', () => {
    getOrg().then(({ data, status }) => {
      expect(status).to.equal(200);
      expect(data).to.be.a(Promise);
    });
  });

  it('should resolve with an array of TakeNet', () => {
    getOrg().then(({ data, status }) => {
      expect(status).to.equal(200);
      expect(data).to.be.an('array').that.has.lengthOf(1);
    });
  });

  it('should return the correct data', () => {
    getOrg().then(({ data, status }) => {
      try {
        expect(status).to.equal(200);
        expect(data).to.have.all.keys('name', 'url', 'id', 'logo');
      } catch (err) {
        expect(err.status).to.equal(403);
        expect(err.response.data.message).to.equal(
          'Rate limit exceeded. Try again in a few minutes.',
        );
      }
    });
  });

  it('should return an array of 1 object', () => {
    return getOrg().then(({ data, status }) => {
      try {
        expect(data).to.be.an('array');
        expect(status).to.equal(200);
        expect(data).to.have.lengthOf(1);
        expect(data[0].owner.id).to.be.a('number');
        expect(data[0].owner.login).to.be.a('string');
        expect(data[0].owner.avatar_url).to.be.a('string');
        expect(data[0].owner.html_url).to.be.a('string');
        expect(data[0].owner.type).to.be.a('string');
      } catch (err) {
        expect(err.status).to.equal(403);
        expect(err.response.data.message).to.equal(
          'Rate limit exceeded. Try again in a few minutes.',
        );
      }
    });
  });

  it('should must return information about the company to takeNet', () => {
    return getOrg().then(({ data, status }) => {
      try {
        // expect an object back
        expect(typeof data).to.equal('object');
        expect(status).to.equal(200);
        expect(data[0].owner.login).to.equal('takenet');
        expect(data[0].owner.id).to.equal(4369522);
        expect(data[0].owner.avatar_url).to.equal(
          'https://avatars.githubusercontent.com/u/4369522?v=4',
        );
        expect(data[0].owner.html_url).to.equal('https://github.com/takenet');
        expect(data[0].owner.type).to.equal('Organization');
      } catch (err) {
        expect(err.status).to.equal(403);
        expect(err.response.data.message).to.equal(
          'Rate limit exceeded. Try again in a few minutes.',
        );
      }
    });
  });
});
