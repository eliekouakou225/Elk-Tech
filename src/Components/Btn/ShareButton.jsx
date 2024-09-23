import React from 'react';

const ShareButton = () => {
  const handleShare = async () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      try { 
        await navigator.share({
          title: 'Venez découvrir cette page !',
          text: 'Regardez ce que j\'ai trouvé :',
          url: currentUrl,
        });
        console.log('URL partagée avec succès');
      } catch (error) {
        console.error('Erreur lors du partage :', error);
      }
    } else {
      alert('Le partage n\'est pas supporté sur ce navigateur');
    }
  };

  return (
    <button onClick={handleShare}>
      Partager cette page
    </button>
  );
};

export default ShareButton;
