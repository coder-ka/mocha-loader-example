import { add } from "../src/index.js";

import chai from "chai";

chai.should();

describe("sample1 test", () => {
  it("add test", () => {
    add(1, 2).should.be.equal(3);
  });
});
