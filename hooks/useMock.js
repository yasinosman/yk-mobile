import React from 'react';
import useInterval from './useInterval';

/**
 *
 * @param {Function} mockDataGenerator
 * @param {number} timeout
 * @param {boolean} generateRealisticData
 * @returns
 */
const useMock = (
  mockDataGenerator,
  timeout = 2000,
  generateRealisticData = true
) => {
  const [mockData, setMockData] = React.useState(mockDataGenerator());

  useInterval(() => {
    generateRealisticData
      ? setMockData([...mockData, ...mockDataGenerator()].slice(1, 21))
      : setMockData(mockDataGenerator());
  }, timeout);

  return mockData;
};

export default useMock;
