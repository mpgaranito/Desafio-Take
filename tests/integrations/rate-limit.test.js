const { expect } = require('chai');

const { getOrg } = require('../fixtures/api.test');

describe('Github Rate Limit', () => {
  it('should whether or not to return request limit error', () => {
    getOrg().then(({ status }) => {
      try {
        expect(status).to.equal(200);
      } catch (err) {
        expect(err.status).to.equal(403);
        expect(err.response.data.message).to.equal(
          'Rate limit exceeded. Try again in a few minutes.',
        );
      }
    });
  });
});
