import React from 'react'
import ReactDOM from 'react-dom'

import Chart from './chart'
import randomData from './random-data'

const data = randomData(100, 0, 100)
// const data = JSON.parse`
// [20, 33, 47, 27, 44, 32, 18, 33, 19, 7, -8, 6, 4, -2, -12, -20, -29, -28, -34, -50, -35, -50, -54, -54, -50, -37, -42, -46, -59, -77, -73, -61, -71, -56, -74, -77, -77, -70, -89, -85, -94, -76, -87, -71, -83, -64, -60, -70, -72, -64, -69, -82, -77, -70, -69, -82, -84, -84, -71, -70, -76, -94, -86, -85, -80, -71, -53, -68, -77, -69, -74, -72, -57, -63, -57, -66, -59, -51, -57, -39, -27, -36, -19, -11, -27, -18, -16, -1, -13, 3, -16, -36, -25, -36, -46, -42, -27, -20, -5, -17]
// `

ReactDOM.render(<Chart data={data} />, document.getElementById('main'))
