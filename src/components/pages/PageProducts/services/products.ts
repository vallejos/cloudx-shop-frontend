import { Product } from "models/Product";

export const getProductsList = async () => {
  const apiUrl = `https://tdxvfwtpad.execute-api.us-east-1.amazonaws.com/dev/products`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.products as Product[];
}
