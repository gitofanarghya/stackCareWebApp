import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './dark-highchart-theme'

const options = {
  chart: {
    type: 'column',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {

        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var x = (new Date()).getTime(), // current time
            y = Math.random();
          series.addPoint([x, y], true, true);
        }, 30000);
      }
    }
  },
  title: {
    text: ''
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 1500
  },
  yAxis: {
    title: {
      text: 'Value'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Notifications',
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 30000,
          y: Math.random()
        });
      }
      return data;
    }())
  }]
}

const Notifications = () => <HighchartsReact highcharts={Highcharts} options={options} />

export default Notifications;