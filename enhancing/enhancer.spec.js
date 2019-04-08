const enhancer = require("./enhancer.js");
// test away!

const staff = {
  name: "staff",
  durability: 78,
  enhancement: 8
};

const sword = {
  name: "sword",
  durability: 2,
  enhancement: 19
};

const helmet = {
  name: "helmet",
  durability: 99,
  enhancement: 25
};

describe("repair function", () => {
  // TEST CASE
  it(`return it with durability set to 100`, () => {
    let repairedStaff = enhancer.repair(staff);
    let repairedSword = enhancer.repair(sword);
    let repairedHelmet = enhancer.repair(helmet);
    // ASSERTIONS
    expect(repairedStaff.durability).toEqual(100);
    expect(repairedSword.durability).toEqual(100);
    expect(repairedHelmet.durability).toEqual(100);
  });
});

describe("succeed funstion", () => {
  // TEST CASE
  it(`return enhanced item`, () => {
    let enhanceStaff = enhancer.succeed(staff);
    let enhanceSword = enhancer.succeed(sword);
    let enhanceHelmet = enhancer.succeed(helmet);
    // ASSERTIONS
    expect(enhanceStaff.enhancement).toEqual(9);
    expect(enhanceSword.enhancement).toEqual(20);
    expect(enhanceHelmet.enhancement).toEqual(20);
  });
});
