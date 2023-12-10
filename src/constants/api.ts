export enum REST_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DEL = "DEL",
}

export const api = {
  auth: {
    getNonce: "/auth/get-nonce/",
    login: "/auth/login/",
  },
}
