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

const wand = {
  name: "wand",
  durability: 99,
  enhancement: 25
};

const armor = {
  name: "armor",
  durability: 99,
  enhancement: 15
};

const shield = {
  name: "shield",
  durability: 78,
  enhancement: 8
};

const dagger = {
  name: "dagger",
  durability: 78,
  enhancement: 0
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

describe("succeed function", () => {
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

describe(`fail function`, () => {
  // TEST CASE
  it(`return item failed specs`, () => {
    let enhanceShield = enhancer.fail(shield);
    let enhanceWand = enhancer.fail(wand);
    let enhanceArmor = enhancer.fail(armor);
    // ASSERTIONS
    expect(enhanceShield.durability).toEqual(73);
    expect(enhanceWand.durability).toEqual(89);
    expect(enhanceWand.enhancement).toEqual(24);
    expect(enhanceArmor.durability).toEqual(89);
  });
});

describe(`get function`, () => {
  // TEST CASE
  it(`return enhancement + name if enhancement > 0`, () => {
    let enhanceShield = enhancer.get(shield);
    let enhanceDagger = enhancer.get(dagger);
    // ASSERTIONS
    expect(enhanceShield.name).toEqual("[+8] shield");
    expect(enhanceDagger.name).toEqual(`${dagger.name}`);
  });
});
