import React from 'react';
import { DataTable as Table, TableHeader, IconButton, Menu, MenuItem } from 'react-mdl';
import { fromJS, List } from 'immutable';
import { TableWrapper, TableInnerWrapper } from './wrappers';

import generateHeaders from './headers';

const ROWS = [
  {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
  {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
  {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
  {id: 1004, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
  {id: 1005, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
  {id: 1006, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
];

const HEADERS = fromJS([
  { name: 'famoco_id', tooltip: '', label: 'FAMOCO ID', numeric: false },
  { name: 'fleet', tooltip: '', label: 'Fleet', numeric: false },
  // { name: 'profile', tooltip: '', label: 'Profile', numeric: false },
  { name: 'last_sync', tooltip: '', label: 'Last Sync', numeric: false },
  { name: 'sync_status', tooltip: '', label: 'Sync Status', numeric: false },
  { name: 'maintenance_status', tooltip: '', label: 'Maintenance Status', numeric: false },
  { name: 'heartbeat', tooltip: '', label: 'Heartbeat', numeric: false },
  { name: 'model', tooltip: '', label: 'Model', numeric: false },
  { name: 'imei', tooltip: '', label: 'IMEI', numeric: false, cellFormatter: (imeis) => imeis.join() },
  { name: 'logs', tooltip: '', label: 'Logs', numeric: false, cellFormatter: (logs) => logs.results.map(log => log.description).join(' || ') }
]);

const DataTable = ({ data }, { height }) => {
  const rows = data.get('results').toJS();
  console.log(rows)
  return (
    <TableWrapper className="mdl-shadow--4dp">
      <div className="mdl-card__title" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className="mdl-card__title-text">DataTable</h2>
        <div style={{position: 'relative'}}>
          <IconButton name="filter_list" id="table-headers-filter" />
          <Menu target="table-headers-filter" align="right">
            {HEADERS.map(header => <MenuItem key={header.get('name')}>{header.get('label')}</MenuItem>).toArray()}
          </Menu>
        </div>
      </div>
      <TableInnerWrapper height={height - 94}>
        <Table
          selectable
          shadow={0}
          rowKeyColumn="id"
          rows={rows}
        >
          {generateHeaders(HEADERS)}
        </Table>
      </TableInnerWrapper>
      {/*<div className="mdl-card__actions">
        Page 1 of 10
      </div>*/}
    </TableWrapper>
  );
}

DataTable.contextTypes = {
  height: React.PropTypes.number,
}

export default DataTable;
