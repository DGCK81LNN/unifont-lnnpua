// put unflipped unreversed finals in #text
const doReverse = true

function reverseBits(num) {
    let result = 0;
    for (let i = 0; i < 8; i++) {
        result = (result << 1) | (num & 1);
        num >>= 1;
    }
    return result;
}

return SoulLS.text.split("\n").flatMap(l => {
  let [cp, hex] = l.split(":", 2)
  cp = parseInt(cp, 16)
  hex = hex.match(/../g).slice().map(x=>parseInt(x, 16))

  const results = [
    hex,
    hex.map(x=>reverseBits(x>>1)),
  ]
  if (doReverse) results.push(
    [0,0,...hex.slice(2,15).map(x=>reverseBits(x>>1)).reverse(), 0],
    [0,0,...hex.slice(2,15).reverse(), 0],
  )
  return results.map((hex, i) => [(cp + i).toString(16).toUpperCase(),hex.map(h=>h.toString(16).toUpperCase().padStart(2,"0")).join("")].join(":"))
}).join("\n")
