import { escape } from 'validator';

const cleaner = (value) => {
  const result = escape(value.toString().trim());

  return result;
};

export default cleaner;
