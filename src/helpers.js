import crypto from 'crypto-browserify';

export const uniqid = () => {
  return crypto.randomBytes(16).toString('hex');
};

export const pprint = (msg, color) => {
  console.log(`%c${msg}`, `color: ${color}`);
};
