import React, { useState, useEffect } from 'react';

const Date = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Met à jour la date actuelle chaque seconde
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Nettoie l'intervalle lorsqu'il n'est plus nécessaire
    return () => clearInterval(timer);
  }, []);

  // Formate la date comme vous le souhaitez
  const formattedDate = currentDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <>
      {formattedDate}
    </>
  );
};

export default Date;
