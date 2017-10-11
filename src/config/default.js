export default {
  api: {
    url: process.env.URL, //Added local URL modify this based on environment
    host: process.env.HOST
  },
  HTTP_Status:{
    SUCCESS: '200',
    UNAUTHORIZE: '401',
    CREATE_SUCCESS: '201',
    DELETE_SUCCESS: '204'
  }
};
