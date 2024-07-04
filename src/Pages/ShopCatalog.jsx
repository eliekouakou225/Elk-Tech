import React from 'react';
import TrainingList from './TrainingList';
import { trainings } from '../dataTrainings';

function ShopCatalog({ catalog }) {
  const filteredTrainings = trainings.filter(training => training.catalog === catalog);

  return (
    <div>
      <h1>{catalog} Trainings</h1>
      <TrainingList trainings={filteredTrainings} />
    </div>
  ); 
}

export default ShopCatalog;
