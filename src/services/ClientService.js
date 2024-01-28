import api from "../api";
import { toast } from 'react-toastify';

const ClientService = {
  optimizedRoute: async () => {
    try {
      const response = await api.get('/optimized-route');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  find: async () => {
    try {
      const response = await api.get('/client');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  findById: async (id) => {
    try {
      const response = await api.get('/client/' + id);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  remove: async (id) => {
    try {
      const response = await api.delete('/client/' + id);
      toast.success('Client sucessfully edited!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return response.data;
    } catch (error) {
      toast.error(error.toString(), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      throw error;
    }
  },
  update: async (params) => {
    try {
      const response = await api.put('/client/' + params.id, params);
      toast.success('Client sucessfully edited!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return response.data;
    } catch (error) {
      toast.error(error.toString(), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      throw error;
    }
  },
  create: async (params) => {
    try {
      const response = await api.post('/client', params);
      toast.success('Client sucessfully created!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return response.data;
    } catch (error) {
      toast.error(error.toString(), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      throw error;
    }
  }
};

export default ClientService;
