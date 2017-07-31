import React from 'react'

import { VictoryLine, VictoryChart } from 'victory'
// import drawChart from './draw-chart'
import modeMedianBucket from './mode-median-bucket'
import largestTriangleOneBucket from './largest-triangle-one-bucket'
import largestTriangleThreeBuckets from './largest-triangle-three-buckets'

export default class Chart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      algo: 'largestTriangleThreeBuckets',
      threshold: 50
    }
  }

  show(algo) {
    this.setState({ algo })
  }

  get modeMedianBucket () {
    return modeMedianBucket(this.props.data, this.state.threshold)
  }

  get largestTriangleOneBucket () {
    return largestTriangleOneBucket(this.props.data, this.state.threshold)
  }

  get largestTriangleThreeBuckets () {
    return largestTriangleThreeBuckets(this.props.data, this.state.threshold)
  }

  render() {
    console.log(this[this.state.algo])
    return (
      <div id="chart">
          <VictoryLine
            data={this.props.data}
            standalone={true}
            range={{ x: [50, 250], y: [50, 250] }}
            style={{
              parent: { position: 'absolute', top: 50 },
              data: { strokeWidth: 1, stroke: 'rgba(53, 108, 167, 0.5)' }
            }}
          />
          <VictoryLine
            data={this[this.state.algo]}
            range={{ x: [50, 250], y: [50, 250] }}
            style={{
              parent: { position: 'absolute', top: 50 },
              data: { strokeWidth: 1, stroke: 'rgba(53, 108, 167, 1)' }
            }}
          />
        <ShowButton
          title='Mode Median'
          mode='modeMedianBucket'
          show={this.show.bind(this)}
        />
        <ShowButton
          title='Largest Triangle One Bucket'
          mode='largestTriangleOneBucket'
          show={this.show.bind(this)}
        />
        <ShowButton
          title='Largest Triangle Three Buckets'
          mode='largestTriangleThreeBuckets'
          show={this.show.bind(this)}
        />
        {this.state.algo}
        <script type='text/javascript'>
          {"(function() {console.log('sdf')})()"}
        </script>
      </div>
    )
  }
}
function ShowButton({ title, mode, show }) {
  return (
    <button
      onClick={() => show(mode)}
    >
      {title}
    </button>
  )
}
