export default class UserViewModel {
    constructor() {
      this.name = "Your Name";
      this.email = "example@gmail.com";
    }
  
    getUserInfo() {
      return { name: this.name, email: this.email };
    }
  }
   