const ship = (length) => {
  const health = new Array(length);
  const getHealth = () => {
    return health;
  };
  const hit = (target) => {
    if (target < length && target >= 0) {
      health[target] = 1;
    }
  };
  const isSunk = () => {
    for (let i = 0; i < length; i += 1) {
      if (health[i] != 1) {
        return false;
      }
    }
    return true;
  };

  return { getHealth, hit, isSunk };
};

export default ship;
