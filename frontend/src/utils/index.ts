import axios, { isAxiosError } from "axios";
interface RegisterUserProps {
  email: string;
  password: string;
  name: string;
}

export async function registerUser(data: RegisterUserProps) {
  try {
    let url = new URL(process.env.REACT_APP_API!);
    url.pathname = "/api/auth/signup";

    const res = await axios.post(url.href, data);

    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
}
export async function loginUser(data: Omit<RegisterUserProps, "name">) {
  try {
    let url = new URL(process.env.REACT_APP_API!);
    url.pathname = "/api/auth/login";
    const res = await axios.post(url.href, data);
    localStorage.setItem("token",res.data.token);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
}
export async function logout() {
  try {
    let url = new URL(process.env.REACT_APP_API!);
    url.pathname = "/api/auth/logout";
    await axios.post(url.href);
    removeCookie("name");
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
}
export function getCookie(name: string) {
    return localStorage.getItem(name);
}
export function addCookie(name: string, value: string) {
  localStorage.setItem(name,value); 
}
export function removeCookie(name: string) {
  localStorage.removeItem(name)
}
