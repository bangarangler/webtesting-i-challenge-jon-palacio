module.exports = {
  succeed,
  fail,
  repair,
  get
};

const item = {
  name: "staff",
  durability: 78,
  enhancement: 8
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement++;
    return item;
  } else if (item.enhancement > 20) {
    item.enhancement = 20;
  } else {
    item.enhancement;
    return item;
  }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
  return { ...item };
}
