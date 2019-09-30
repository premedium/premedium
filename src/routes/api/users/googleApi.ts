import { google } from 'googleapis';
import express from 'express';

const googleApi = express.Router();
const googleConfig = {
  clientId:
    '362999773764-md0tp901tv9gvf66dqplvnhs6612ah7q.apps.googleusercontent.com',
  clientSecret: 'TuyNekMWrBm2xlVzr4uSiRQu',
  redirect: 'localhost:3000'
};

const createConnection = () => {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
};

googleApi.create = createConnection;

export default googleApi;
