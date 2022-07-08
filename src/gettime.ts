export const getTime = (fact: string) => {
  let time = 0;
  fact.split(' ').forEach((i: string) => {
    if (i.length > 2) {
      time += 0.3;
    }
  });
  return Math.ceil(time);
};
