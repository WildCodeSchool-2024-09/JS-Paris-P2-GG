import React, { useState, useEffect } from 'react';

function ResponsiveAlert() { // Enlever le "="
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Fonction pour vérifier la taille de l'écran
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Par exemple, 768px pour téléphone ou petite tablette
    };

    checkScreenSize(); // Vérifie la taille au chargement
    window.addEventListener('resize', checkScreenSize); // Vérifie lors du redimensionnement

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Nettoyage
    };
  }, []);

  return (
    isSmallScreen && (
      <div style={styles.alertBox}>
        <p style={styles.alertText}>
          Pour une meilleure expérience, veuillez consulter ce site sur un ordinateur ou un appareil avec un écran plus large.
        </p>
      </div>
    )
  );
}

const styles = {
  alertBox: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#ffcc00',
    color: '#000',
    textAlign: 'center',
    padding: '10px',
    zIndex: 1000,
  },
  alertText: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default ResponsiveAlert;
