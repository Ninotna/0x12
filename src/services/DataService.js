import axios from "axios";
import { getMockUserData } from "./MockData";

const API_URL = "http://localhost:3000";

/**
 * Service de gestion des données utilisateur
 */
const DataService = {
  /**
   * Récupère les données utilisateur via l'API ou les mocks
   * @param {number} userId - L'ID de l'utilisateur
   * @param {boolean} useMock - Utiliser les données mockées au lieu de l'API
   * @returns {Promise<Object|null>} Les données utilisateur ou null en cas d'erreur
   */
  getUserData: async (userId, useMock = false) => {
    if (useMock) {
      return await getMockUserData(userId);
    }
    try {
      const response = await axios.get(`${API_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données utilisateur",
        error
      );
      return null;
    }
  },
};

export default DataService;
