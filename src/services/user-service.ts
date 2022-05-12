import { LOGIN_URL, USERS_URL } from "../constants/api-constant";
import { httpClient } from "../http-client";
import { User } from "../interfaces/user-interface";

class UserService {
  static async login(loginUser: User): Promise<User[]> {
    try {
      const { data } = await httpClient.get<User[]>(
        `${LOGIN_URL}${loginUser.email}`
      );
      return data;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async signup(sigupUser: User): Promise<User> {
    try {
      const { data } = await httpClient.post<User>(`${USERS_URL}`, sigupUser);
      return data;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }

  static async findUserByEmail(email: string): Promise<boolean> {
    try {
      const { data } = await httpClient.get<User[]>(`${LOGIN_URL}${email}`);
      return !!data.length;
    } catch ({ response: { data, status } }) {
      throw Error(status as string);
    }
  }
}

export default UserService;
