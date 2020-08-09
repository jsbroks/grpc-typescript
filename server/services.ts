import {
  ServerUnaryCall,
  sendUnaryData,
  ServiceError,
  ServerWritableStream,
  ServerReadableStream,
} from "grpc";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { IUsersServer } from "../proto/users_grpc_pb";
import { User, UserRequest } from "../proto/users_pb";
import { users } from "./db";

export class UsersServer implements IUsersServer {
  getUser(call: ServerUnaryCall<UserRequest>, callback: sendUnaryData<User>) {
    const userId = call.request.getId();
    const user = users.find((u) => u.getId() === userId);

    if (!user) {
      const error: ServiceError = {
        name: "User Missing",
        message: `User with ID ${userId} does not exist.`,
      };
      callback(error, null);
      return;
    }

    console.log(`getUser: returning ${user.getName()} (id: ${user.getId()}).`);
    callback(null, user);
  }

  getUsers(call: ServerWritableStream<Empty>) {
    console.log(`getUsers: streaming all users.`);
    for (const user of users) call.write(user);
    call.end();
  }

  createUser(
    call: ServerReadableStream<Empty>,
    callback: sendUnaryData<Empty>
  ) {
    console.log(`createUsers: creating new users from stream.`);

    let userCount = 0;

    call.on("data", (u) => {
      userCount++;
      users.push(u);
    });

    call.on("end", () => {
      console.log(`Created ${userCount} new user(s).`);
      callback(null, new Empty());
    });
  }
}
