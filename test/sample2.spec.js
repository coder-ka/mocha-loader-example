import { add } from "../src/index.js";

import chai from "chai";

chai.should();

describe("sample2 test", () => {
  it("add test", () => {
    add(4, 6).should.be.equal(3);
  });
});
