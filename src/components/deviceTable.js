import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

const DeviceTable = ({ data }) => {
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

DeviceTable.fragments = {
  table: gql`
    fragment DeviceTable on Device {
      famoco_id
      fleet
      last_sync
      sync_status
      actions {
        name
        description
      }
    }
  `,
};

export default DeviceTable;
