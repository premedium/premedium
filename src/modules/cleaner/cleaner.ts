import { escape } from 'validator';

const cleaner = (value: string): string => {
  return escape(value.toString().trim());
};

export default cleaner;
