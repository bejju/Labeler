export default {
  api: {
    url: 'http://localhost:9000', //Added local URL modify this based on environment
    host: process.env.HOST,
    FETCH_DOCUMENT_SETS: 'api/v1/document-sets/'
  },
  HTTP_Status:{
    SUCCESS: 200,
    UNAUTHORIZE: 401
  }
};
