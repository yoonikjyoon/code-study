// 0 <numer1, denom1, numer2, denom2 < 1,000
// numer1	denom1	numer2	denom2	result
// 1	2	3	4	[5, 4]
// 9	2	1	3	[29, 6]

function solution(numer1, denom1, numer2, denom2) {
  const numerRes = numer1 * denom2 + numer2 * denom1;
  const denomRes = denom1 * denom2;
  let common = 1;
  for (let i = 1; i <= denomRes; i++) {
    if (numerRes % i === 0 && denomRes % i === 0) {
      common = i;
    }
  }
  return [numerRes / common, denomRes / common];
}
