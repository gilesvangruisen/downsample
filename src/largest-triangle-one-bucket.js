import chunk from 'chunk'

export default function largestTriangleOneBucket (data, threshold = 1) {
  const significances = data.map((y, x, arr) => {
    const a = {
      x: arr[x - 1] != undefined ? x - 1 : x + 2,
      y: arr[x - 1] || arr[x + 2]
    }

    const b = { x, y }

    const c = {
      x: arr[x + 1] != undefined ? x + 1 : x - 2,
      y: arr[x + 1] || arr[x - 2]
    }

    return {
      y,
      significance: triangleArea(a, b, c)
    }
  })

  const chunkSize = data.length / threshold
  const buckets = [
    [significances[0]],
    ...chunk(significances.slice(1, significances.length - 1), chunkSize),
    [significances[significances.length - 1]]
  ]

  return buckets.map((bucket) => {
    const sorted = bucket.sort((a, b) => (a.significance - b.significance))

    return sorted[bucket.length - 1].y
  }).slice(1, buckets.length - 1)
}

function triangleArea (a, b, c) {
  const abc = a.x * (b.y - c.y)
  const bca = b.x * (c.y - a.y)
  const cab = c.x * (a.y - b.y)

  return Math.abs((abc + bca + cab) / 2)
}
