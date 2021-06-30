import Axios from "axios";
import _ from "lodash";

const API_HOST = "http://192.168.43.99:8003/api"; // should be gateway addresse mba3da we update it

export { API_HOST };

const getApiFinalEndpoint = (endpoint) =>
  endpoint[0] === "/" ? `${API_HOST}${endpoint}` : `${API_HOST}/${endpoint}`;

const apiDefaultOptions = {
  crossDomain: true,
  resultCondition: (r) => true,
};

const api = {
  post: (endpoint, data = {}, options) => {
    options = Object.assign(_.cloneDeep(apiDefaultOptions), options);
    return new Promise((resolve, reject) => {
      Axios.post(getApiFinalEndpoint(endpoint), data, options)
        .then((suc) => {
          let success = _.get(suc, "data.success") || suc.status === 200;
          if (success) return resolve(suc.data);
          return reject(suc);
        })
        .catch(reject);
    });
  },
  get: (endpoint, options) => {
    options = Object.assign(_.cloneDeep(apiDefaultOptions), options);
    return new Promise((resolve, reject) => {
      Axios.get(getApiFinalEndpoint(endpoint), options)
        .then((suc) => {
          let success = _.get(suc, "data.success") || suc.status === 200;
          if (success) return resolve(suc.data);
          return reject(suc);
        })
        .catch(reject);
    });
  },
  put: (endpoint, data = {}, options) => {
    options = Object.assign(_.cloneDeep(apiDefaultOptions), options);
    return new Promise((resolve, reject) => {
      Axios.put(getApiFinalEndpoint(endpoint), data, options)
        .then((suc) => {
          let success = _.get(suc, "data.success") || suc.status === 200;
          if (success) return resolve(suc.data);
          return reject(suc);
        })
        .catch(reject);
    });
  },
  delete: (endpoint, options) => {
    options = Object.assign(_.cloneDeep(apiDefaultOptions), options);
    return new Promise((resolve, reject) => {
      Axios.delete(getApiFinalEndpoint(endpoint), options)
        .then((suc) => {
          let success = _.get(suc, "data.success") || suc.status === 200;
          if (success) return resolve(suc.data);
          return reject(suc);
        })
        .catch(reject);
    });
  },
};
export { api };
