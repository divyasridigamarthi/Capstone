import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultsPage = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/results/1'); // Replace 1 with dynamic ID
        setResults(response.data);
      } catch (err) {
        setError('Failed to fetch results.');
      }
    };

    fetchResults();
  }, []);

  return (
    <div style={styles.container}>
      {error && <p>{error}</p>}
      {results ? (
        <div style={styles.resultsCard}>
          <h2 style={styles.cardTitle}>Results</h2>
          <p style={styles.resultText}><strong>Filename:</strong> {results.filename}</p>
          <p style={styles.resultText}><strong>Result:</strong> {results.result}</p>
        </div>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '32px',
    textAlign: 'center',
  },
  resultsCard: {
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '24px',
    color: '#1F2937',
    marginBottom: '16px',
  },
  resultText: {
    fontSize: '16px',
    color: '#4B5563',
    marginBottom: '8px',
  },
};

export default ResultsPage;