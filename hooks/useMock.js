import React from 'react';
import useInterval from './useInterval';

/**
 *
 * @param {Function} mockDataGenerator
 * @param {number} timeout
 * @returns
 */
const useMock = (mockDataGenerator, timeout = 2000) => {
  const [mockData, setMockData] = React.useState(mockDataGenerator());

  useInterval(() => {
    setMockData([...mockData, ...mockDataGenerator()].slice(1, 21));
  }, timeout);

  return mockData;
};

export default useMock;
