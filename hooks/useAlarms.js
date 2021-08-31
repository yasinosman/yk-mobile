import React from 'react';
import { formatDate } from '../lib/utils';
import useFirestoreCollection from './useFirestoreCollection';

const useAlarms = () => {
  const [alarms, setAlarms] = React.useState([]);

  const [alarmsData, loading] = useFirestoreCollection('alarms');

  React.useEffect(() => {
    setAlarms(
      alarmsData
        .sort((a, b) => b.created_at.toDate() - a.created_at.toDate())
        .map(alarm => ({
          ...alarm,
          created_at: formatDate(alarm.created_at.toDate()),
        }))
    );
  }, [alarmsData]);

  return [alarms, loading];
};

export default useAlarms;
