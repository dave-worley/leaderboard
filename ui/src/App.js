import React from 'react';
import './App.css';
import { Store } from './Store';
import ErrorDisplay from './components/errorDisplay';


export default () => {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state && state.uploads.length === 0 && state.searchTerm === '' && fetchUploadsAction(dispatch);
  });
  return (<div className='App'>
    { state.error && <ErrorDisplay>{ state.error }</ErrorDisplay> }
    <p>Hello!</p>
  </div>);
}
