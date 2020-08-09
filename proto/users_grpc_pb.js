// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserRequest(arg) {
  if (!(arg instanceof users_pb.UserRequest)) {
    throw new Error('Expected argument of type users.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserRequest(buffer_arg) {
  return users_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  getUser: {
    path: '/users.Users/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.UserRequest,
    responseType: users_pb.User,
    requestSerialize: serialize_users_UserRequest,
    requestDeserialize: deserialize_users_UserRequest,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  createUser: {
    path: '/users.Users/CreateUser',
    requestStream: true,
    responseStream: false,
    requestType: users_pb.User,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getUsers: {
    path: '/users.Users/GetUsers',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: users_pb.User,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
