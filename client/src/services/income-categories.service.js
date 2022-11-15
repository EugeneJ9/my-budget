import http from '../http-common';

class IncomeCategoriesDataService {
  getAll() {
    return http.get('/income-categories');
  }

  create(data) {
    return http.post('/income-categories', data);
  }
}

export default new IncomeCategoriesDataService();
