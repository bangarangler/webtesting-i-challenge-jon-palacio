module.exports = {
  succeed,
  fail,
  repair,
  get
};

//const item = {
//name: "staff",
//durability: 78,
//enhancement: 8
//};

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
  if (item.enhancement < 15) {
    item.durability = item.durability - 5;
    return item;
  } else if (item.enhancement >= 15 && item.enhancement > 16) {
    item.durability = item.durability - 10;
    item.enhancement = item.enhancement - 1;
    return item;
  } else if (item.enhancement >= 15) {
    item.durability = item.durability - 10;
    return item;
    return item;
  } else if (item.enhancement > 16) {
    item.enhancement--;
    return item;
  }
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
if (item.enhancement === 0) {
  return item;
} else if (item.enhancement > 0) {
  item.name = `[+${item.enhancement}] ${item.name}`
  return item;
}
}
