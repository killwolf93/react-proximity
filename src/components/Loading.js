import React from 'react';
import './styles/Loading.scss';

const Loading = ({name}) => {
  return <div className="col-12 loader">
    <span className="fa fa-spinner fa-pulse fa-3x fa-fw"/>
    <p>Loading {name}</p>
  </div>
}
export default Loading;