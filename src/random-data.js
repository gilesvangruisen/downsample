function randomWhole (min, max) {
  const rand = Math.random()
  const unadjustedWhole = Math.floor(rand * (max - min))
  return unadjustedWhole + min
}

export default function randomData (n, min, max) {
  return Array(n).fill(undefined).reduce((accum, _, i) => {
    const range = max - min
    const upperDeltaRange = range / 5

    const prev = accum[i - 1] ||  randomWhole(min, max)
    const next = prev + randomWhole(-upperDeltaRange, upperDeltaRange)

    return accum.concat([next])
  }, [])
}
