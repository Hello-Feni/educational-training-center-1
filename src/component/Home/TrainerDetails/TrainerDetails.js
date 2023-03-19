import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TrainerDetails.css'

const TrainerDetails = ({trainer}) => {
    return (
        <div className="col-md-3 text-center trainer">
        <img style={{width:'200px'}} src={trainer.image} alt=""/>
        <h3 className="mt-3">{trainer.name}</h3>
        <h6>{trainer.course}</h6>
        <p ><FontAwesomeIcon style={{color: '#1cc7c1'}} icon={trainer.icon}/>{trainer.number}</p>
    </div>
    );
};

export default TrainerDetails;