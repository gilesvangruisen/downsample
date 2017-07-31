import * as d3 from 'd3'

export default function drawChart () {
  Array.from(arguments).forEach((rawData, i) => {
    var svg = d3.select("svg"),
      margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var x = d3.scaleLinear()
      .rangeRound([0, width]);

      var y = d3.scaleLinear()
      .rangeRound([height, 0]);

    const data = d3.entries(rawData)
    const firstData = d3.entries(arguments[0])

    var line = d3.line()
        .x(function(d) { return x(firstData.length * (d.key / data.length)); })
        .y(function(d) { return y(d.value); });

    function padExtent(extent) {
      const range = extent[1] - extent[0]

      return [extent[0] - (range / 2), extent[1] + (range / 2)]
    }

    x.domain(d3.extent(data, d => firstData.length * (d.key / data.length)));
    y.domain(padExtent(d3.extent(firstData, function(d) { return d.value; })));

    const opacity = (i + 1) / arguments.length

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", `rgba(53, 108, 167, ${opacity})`)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  })

}

window.drawChart = drawChart
