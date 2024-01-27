import axios from "axios";
import { apiRouteList } from "../utils/api-routes";
import { servUrl } from "../utils/content/content";
const baseUrl = `${servUrl}${apiRouteList.business}`;
const updateBusImg = async (busId, img) => {
  return await axios.put(`${baseUrl}updateBusImg/${busId}`, img);
};
const createBus = async (formData) => {
  return await axios.post(`${baseUrl}businessCreate`, formData);
};

const updateBus = async (formData) => {
  return await axios.put(`${baseUrl}businessUpdate`, formData);
};
const getSingleBusiness = async (id) => {
  return axios.post(`${baseUrl}${id}`);
};

const businessServices = {
  getSingleBusiness,
  createBus,
  updateBusImg,
  updateBus,
};
export default businessServices;
