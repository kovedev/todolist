import React from 'react';

export const EventDataTable = ({ data }) => 
<table>
  <caption>Event Data</caption>
  <thead>
    <tr>
      <th>Sensor</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Date</td>
      <td>{data.date}</td>
    </tr>
    <tr>
      <td>Sensor 1</td>
      <td>{data.sensor1}</td>
    </tr>
    <tr>
      <td>Sensor 2</td>
      <td>{data.sensor2}</td>
    </tr>
    <tr>
      <td>Sensor 3</td>
      <td>{data.sensor3}</td>
    </tr>
    <tr>
      <td>Sensor 4</td>
      <td>{data.sensor4}</td>
    </tr>
  </tbody>
</table>;