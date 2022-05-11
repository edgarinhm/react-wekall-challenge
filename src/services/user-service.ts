import { USERS_URL } from "../constants/api-constant";
import { httpClient } from "../http-client";
import { User } from "../interfaces/user-interface";

const LOGIN_URL = `${USERS_URL}?email=`;
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
}

export default UserService;
