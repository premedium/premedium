import { escape } from 'validator';

const cleaner = (value: boolean | number | string): string => {
  return escape(value.toString().trim());
};

export default cleaner;
