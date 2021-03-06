const chai = require("chai");
const assert = chai.assert;
const ncProvider = require("../../lib/core/base-provider");
const providers = require("../../lib/providers");

describe("Base provider", () => {
  it("should return AWS provider", done => {
    const ncAWS = new ncProvider(
      providers.AWS,
      process.env.ncconf
    );

    assert.typeOf(ncAWS, "object");
    done();
  });
});
