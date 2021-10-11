import React, { useState } from 'react';
import { formatDate } from '../utils/formatDate';
import './eventDataTable.scss';

export const EventHistoryDataTable = ({ eventHistoryData }) => {
  const [index, setIndex] = useState(0);
  const data = eventHistoryData[index];
  const length = eventHistoryData.length;
  
  if(data)
    return (
      <div>
        <table className='event-data-table'>
          <caption>History Data</caption>
          <thead>
            <tr>
              <th>Sensor</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date</td>
              <td>{formatDate(data.date)}</td>
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
        </table>
        <div className='control-buttons'>
          <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
            {'<'}
          </button>
          <button disabled={index === (length - 1)} onClick={() => setIndex(index + 1)}>
            {'>'}
          </button>
        </div>
      </div>
    );
  else
    return <div>No Event History Data</div>
}