import axios from "axios";
import { API_BASE_URL } from "..";




class EmpregadoService {



    salvar(empregados) {
        return axios.post(API_BASE_URL, empregados);
    }

    listar() {
        return axios.get(API_BASE_URL);
    }

    getEmpregadobyID(id, empregado) {
        return axios.get(API_BASE_URL + '/' + id, empregado);
    }

    AtualizarEmpregado(id, empregado) {
        return axios.put(API_BASE_URL + '/' + id, empregado);
    }

    deletarEmpregado(id) {
        return axios.delete(API_BASE_URL + '/' + id);
    }

}

export default new EmpregadoService();
