import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class JwtService {
  constructor() {}

  getToken() {
    return window.localStorage["token"];
  }

  saveToken(token: any) {
    window.localStorage["token"] = token;
  }

  destroyToken() {
    window.localStorage.clear();
  }
}
