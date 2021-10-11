import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../root/rootReducer';
import {
  fetchEventData,
  saveEventData,
  fetchEventHistoryData,
} from './actions';
import { EventDataTable } from './eventDataTable';
import { EventHistoryDataTable } from './eventHistoryDataTable';

import './eventDataPage.scss'; 

const EventDataPage = ({ 
  fetchEventData, 
  eventData,
  isFetchingEventData,
  isFetchingEventHistoryData,
  eventHistoryData,
  accessToken,
  saveEventData,
  fetchEventHistoryData,
}) => {
  useEffect(() => {
    if(!isFetchingEventData && !eventData && accessToken && !eventHistoryData)
      fetchEventData(accessToken);
      fetchEventHistoryData();
  }, []); // eslint-disable-line

  const saveEventDataFunction = () => {
    if(!isFetchingEventHistoryData)
      saveEventData(eventData);
  }

  if(!eventData && isFetchingEventData)
    return (<div>Loading</div>)

  return (
    <div className='event-data-content'>
      {eventData && <EventDataTable data={eventData} />}
      <button onClick={() => saveEventDataFunction()}>
        Save event data
      </button>
      {isFetchingEventHistoryData && <div>Loading</div>}
      {(!isFetchingEventHistoryData && eventHistoryData) && 
        <EventHistoryDataTable eventHistoryData={eventHistoryData}/>}
    </div>
  )
}

const mapDispatchToProps = {
  fetchEventData,
  fetchEventHistoryData,
  saveEventData,
};

const mapStateToProps = (state: RootState) => ({
  isFetchingEventData: state.eventData.isFetchingEventData,
  isFetchingEventHistoryData: state.eventData.isFetchingEventHistoryData,
  eventData: state.eventData.eventData,
  eventHistoryData: state.eventData.eventHistoryData,
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDataPage);