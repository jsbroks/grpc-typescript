import { User, UserRequest } from "../proto/users_pb";
import { client } from "./utils";

export default function getUsers(id: number) {
  return new Promise<User>((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    client.getUser(request, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}
