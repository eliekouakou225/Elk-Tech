import React, { useState } from 'react';
import TrainingList from '../Components/2Training/TrainingList';
import { trainings } from '../../Assets/Data/dataTrainings';

function Training() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTrainings = trainings.filter((training) =>
    training.title.toLowerCase().includes(filter.toLowerCase())
  );

  return ( 
    <div> 
      <h1>Trainings</h1>
      <input
        type="text" 
        placeholder="Filter trainings"
        value={filter}
        onChange={handleFilterChange}
      />
      <TrainingList trainings={filteredTrainings} />
    </div>
  );
}

export default Training;
