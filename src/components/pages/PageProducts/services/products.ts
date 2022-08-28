import { Product } from "models/Product";
import API_PATHS from "constants/apiPaths";

export const getProductsList = async () => {
  const apiUrl = `${API_PATHS.product}/products`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.products as Product[];
}
