export default {
  api: {
    url: 'http://localhost:9000', //Added local URL modify this based on environment
    host: process.env.HOST,
    FETCH_DOCUMENT_SETS: 'api/v1/document-sets/',
    FETCH_DOCUMENT: 'api/v1/document-sets/documentSetId/documents/id'
  },
  HTTP_Status:{
    SUCCESS: 200,
    UNAUTHORIZE: 401
  },
  rails_api: {
  	url: 'http://localhost:3006',
  	host: process.env.HOST,
  	FETCH_LABELS: 'labels'
  }
};
