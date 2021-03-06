import React from 'react'
import Highcharts from 'highcharts'
import HC_map from 'highcharts/modules/map'
import HighchartsReact from 'highcharts-react-official'
import mapData from './usa-and-canada'
import proj4 from 'proj4'
import orange from '@material-ui/core/colors/orange';

HC_map(Highcharts)

const Map = ({markersData}) => {
  window.proj4 = proj4

  const options = {
    chart: {
      map: mapData,
      marginLeft: 50,
    },
  
    title: {
      text: ''
    },
  
    mapNavigation: {
      enabled: false
    },
  
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
    },
  
    series: [{
      name: 'Basemap',
      borderColor: '#A0A0A0',
      nullColor: 'rgba(200, 200, 200, 0.3)',
      showInLegend: false
    }, {
      name: 'Separators',
      type: 'mapline',
      nullColor: '#707070',
      showInLegend: false,
      enableMouseTracking: false
    }, {
      type: 'mappoint',
      name: 'Communities',
      color: orange[500],
      showInLegend: false,
      data: markersData
    }]
  }
  

  return <HighchartsReact highcharts={Highcharts} constructorType={'mapChart'} options={options} />
}
export default Map;