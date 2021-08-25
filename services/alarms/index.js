import { Timestamp } from '../../firebase';
import { formatDate } from '../../lib/utils';
import { addDocumentToCollection, fetchCollectionByName } from '../database';

export function getAlarms() {
  return new Promise((resolve, reject) => {
    fetchCollectionByName('alarms')
      .then(alarms =>
        resolve(
          alarms.map(alarm => ({
            ...alarm,
            created_at: formatDate(alarm.created_at.toDate()),
          }))
        )
      )
      .catch(error => reject(error));
  });
}

/**
 *
 * @param {string} name
 * @param {number} targetValue
 * @param {"buy" | "sell"} type
 */
export function createAlarm(name, targetValue, type) {
  return addDocumentToCollection('alarms', {
    name,
    target_value: targetValue,
    type,
    created_at: Timestamp.fromDate(new Date()),
  });
}
