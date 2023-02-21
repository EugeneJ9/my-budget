import http from '../http-common';

class IncomeCategoriesDataService {
  getAll() {
    return http.get('/income-categories');
  }

  get(id) {
    return http.get(`/income-categories/${id}`);
  }

  create(data) {
    return http.post('/income-categories', data);
  }

  update(id, data) {
    return http.put(`/income-categories/${id}`, data);
  }

  delete(id) {
    return http.delete(`/income-categories/${id}`);
  }

  deleteAll() {
    return http.delete(`/income-categories`);
  }

  findByTitle(name) {
    return http.get(`/income-categories?name=${name}`);
  }
}

export default new IncomeCategoriesDataService();
