import { CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import './ComponentLoading.scss'

const ComponentLoading = () => {
    return ( 
        <div className="loading-over-relay">
            <CircularProgress color="#777" />
        </div>
     );
}
 
export default ComponentLoading;