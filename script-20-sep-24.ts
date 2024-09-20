// //rest opeartor and spread
// //eg:1

// class Mobile {
//   preInstallesApps: string[] = [
//     "playstore",
//     "gallary",
//     "calender",
//     "calculator",
//   ];
//   constructor(
//     public company: string,
//     public price: number,
//     public ram: number,
//     public rom: number,
//     public cam_mpx: number,
//     public os: string,
//     public battery: number,
//     public processor: string
//   ) {}
//   DisplayDetails() {
//     console.log("Company: ", this.company);
//     console.log("Price: ", this.price);
//     console.log("RAM: ", this.ram);
//     console.log("ROM: ", this.rom);
//     console.log("camera in mega px :", this.cam_mpx);
//     console.log("OS :", this.os);
//     console.log("battery :", this.battery, "is % available");
//     console.log(" processor :", this.processor);
//   }
//   InstallApp(...Apps) {
//     this.preInstallesApps = [...this.preInstallesApps, ...Apps];
//     // console.log( "all installed apps",this.preInstallesApps,...Apps);
//   }
//   checkPreinstalledApps() {
//     console.log("All installed apps :", this.preInstallesApps);
//   }
// }
// let A13s = new Mobile(
//   "oppo",
//   25000,
//   64,
//   128,
//   64,
//   "android",
//   90,
//   "media tech 500"
// );
// A13s.DisplayDetails();
// A13s.InstallApp("whatsappp", "instagram", "telegram");
// A13s.checkPreinstalledApps();
// A13s.InstallApp("snapchat", "zoom");
// A13s.checkPreinstalledApps();

//eg:2
class User {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public get Username(): string {
    return this.username;
  }

  public set Username(username) {
    this.username = username;
  }

  public get Password(): string {
    return this.password;
  }

  public set Password(password) {
    this.password = password;
  }

  public static validatePassword(password: string): boolean {
    if (password.length < 8) {
      console.log(
        "Password is too short. It needs to be at least 8 characters."
      );
      return false;
    }

    // const hasNumber = password;
    // if (!hasNumber) {
    //   console.log("Password must have at least one number.");
    //   return false;
    // }

    console.log("Password is valid.");
    return true;
  }
}

const user1 = new User(" isha", "Pass12389");

console.log("Username: " + user1.Username);
console.log("Password: " + user1.Password);

user1.Password = "NewPass123 ";
console.log("Updated Password: " + user1.Password);

User.validatePassword("short");
User.validatePassword("098766Pass");
