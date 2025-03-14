import UserModel from "../models/UserModel";

export default class AuthViewModel {
  constructor() {
    this.defaultUser = new UserModel("c", "1");
  }

  login(email, password) {
    if (email === this.defaultUser.email && password === this.defaultUser.password) {
      return { success: true, message: "Login successful!" };
    }
    return { success: false, message: "Invalid email or password." };
  }
}
