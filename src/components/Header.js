import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>MediScan</div>
      <div style={styles.settingsIcon}>
        <i className="fas fa-cog"></i>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    borderBottom: '1px solid #E5E7EB',
  },
  logo: {
    color: '#3B82F6',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  settingsIcon: {
    fontSize: '20px',
    color: '#6B7280',
    cursor: 'pointer',
  },
};

export default Header;