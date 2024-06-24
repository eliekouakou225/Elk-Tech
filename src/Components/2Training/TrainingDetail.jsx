// src/components/TrainingDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { trainings } from '../../Assets/Data/dataTrainings';
import {convertTitleToUrl} from '../Utils/utils'

function TrainingDetail() {
  // const { id } = useParams(); 
  const { title  } = useParams(); 
  // const training = trainings.find(t => t.id === parseInt(id) );
  const training = trainings.find((training) => convertTitleToUrl(training.title) === title);

  if (!training) {
    return <h2>Training not found</h2>;
  } 

  return (
    <div className='p-150'> 
      <h1>{training.title}</h1>
      <p>{training.description}</p> 
      <p> 
      {training.contentModule.map(modules => (
        <>
            <p>{modules.tileModule}</p>
            {modules.moduleItems.map(modulesItem => (
                    <li>{modulesItem} </li>
             ))}
        </> 
      ))}
      </p>
    </div>
  );
}

export default TrainingDetail;
