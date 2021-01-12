import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');
  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

// function SimpleMediaQuery() {
//   return (<h1>Hello media</h1>)
// }

export default SimpleMediaQuery;