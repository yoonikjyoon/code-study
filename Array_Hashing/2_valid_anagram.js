const isAnagram = (s, t) => {
  // const arrS = [...new Set(s)].sort();
  // const arrT = [...new Set(t)].sort();
  // if (arrS.length === arrT.length) {
  //     const include = arrS.filter((item, index) => item === arrT[index]);
  //     return include.length === arrT.length && s.length === t.length;
  // } else {
  //     return false;
  // }
  const lengS = s.length;
  const lengT = t.length;
  const valid = {};

  if (lengS != lengT) return false;

  for (let i = 0; i < lengS; i++) {
    if (!valid[s[i]]) valid[s[i]] = 0;
    valid[s[i]]++;
  }
  for (let j = 0; j < lengT; j++) {
    if (!valid[t[j]]) return false;
    valid[t[j]]--;
  }
  return true;
};
