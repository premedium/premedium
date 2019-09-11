import { escape } from 'validator';

const cleaner = (value) => {
  const result = escape(value.trim());

  return result;
};

export default cleaner;
