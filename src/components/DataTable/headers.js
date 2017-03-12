import React from 'react';
import {TableHeader} from 'react-mdl';

const HEADERS = [
  { name: 'material', tooltip: '', label: 'Material', numeric: false},
  { name: 'quantity', tooltip: '', label: 'Quantity', numeric: true},
  { name: 'price', tooltip: '', label: 'Price', numeric: true, cellFormatter: (price) => `$${price.toFixed(2)}`},
];

const generateHeaders = (headers = HEADERS) => headers.map((header) => (
  <TableHeader
    name={header.name}
    tooltip={header.tooltip}
    numeric={header.numeric}
    cellFormatter={header.cellFormatter}
  >
    {header.label}
  </TableHeader>
))

export default generateHeaders;
