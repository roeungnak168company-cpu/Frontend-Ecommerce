export const apiUrl =
  "https://ecommerce-backend-production-78ef.up.railway.app/api";
export const adminToken = () => {
  const data = JSON.parse(localStorage.getItem("adminInfo"));
  return data.token;
};
export const userToken = () => {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  return data.token;
};
