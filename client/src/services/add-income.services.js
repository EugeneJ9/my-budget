import http from "../http-common";

class AddIncomeDataService {
  getAll() {
    return http.get('/incomes');
  }
  
  get(id) {
    return http.get(`/add-income/${id}`);
  }

  create(data) {
    return http.post('/add-income', data);
  }

  update(id, data) {
    return http.put(`/add-income/${id}`, data);
  }

  delete(id) {
    return http.delete(`/add-income/${id}`);
  }

  deleteAll() {
    return http.delete(`/add-income`);
  }

  findByTitle(name) {
    return http.get(`/add-income?name=${name}`);
  }
}

export default new AddIncomeDataService();