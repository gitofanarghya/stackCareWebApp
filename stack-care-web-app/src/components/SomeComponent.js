import React from 'react';
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalRectSeries
} from 'react-vis';
import green from '@material-ui/core/colors/green';

const timestamp = new Date('May 23 2017').getTime();
const ONE_DAY = 86400000;

const DATA = [
  {x0: ONE_DAY * 2, x: ONE_DAY * 3, y: 1},
  {x0: ONE_DAY * 4, x: ONE_DAY * 5, y: 1},
  {x0: ONE_DAY * 6, x: ONE_DAY * 7, y: 1},
  {x0: ONE_DAY * 8, x: ONE_DAY * 9, y: 2},
  {x0: ONE_DAY * 10, x: ONE_DAY * 11, y: 2.2}
].map(el => ({x0: el.x0 + timestamp, x: el.x + timestamp, y: el.y}));

export default class Example extends React.Component {
  render() {
    return (
        
      <FlexibleXYPlot
        xDomain={[timestamp - 2 * ONE_DAY, timestamp + 20 * ONE_DAY]}
        yDomain={[0.1, 3.1]}
        xType="time"
        color={green[500]}>
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalRectSeries data={DATA}/>
      </FlexibleXYPlot>
    );
  }
}