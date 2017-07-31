import chunk from 'chunk'

export default function modeMedianBucket (data, threshold = 1) {
  const first = data[0]
  const last = data[data.length - 1]

  const start = {
    high: first >= last ? first : last,
    low: first <= last ? first : last,
    data: []
  }

  const chunkSize = data.length / threshold
  const buckets = chunk(data, chunkSize)

  const middle = buckets
      .slice(1, buckets.length - 1)
      .reduce(({ high, low, data }, bucket) => {
        const sorted = bucket.sort()

        const bucketHigh = bucket[bucket.length - 1]
        const bucketLow = bucket[0]

        if (bucketHigh >= high) {
          return {
            high: bucketHigh,
            low,
            data: [...data, bucketHigh]
          }
        } else if (bucketLow <= low) {
          return {
            high,
            low: bucketLow,
            data: [...data, bucketLow]
          }
        } else {
          const median = Math.floor((bucket.length - 1) / 2)

          return {
            high,
            low,
            data: [...data, bucket[median]]
          }
        }
      }, start)
      .data

    return [first, ...middle, last]
  }
