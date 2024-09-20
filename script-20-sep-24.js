// //rest opeartor and spread
// //eg:
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
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    Object.defineProperty(User.prototype, "Username", {
        get: function () {
            return this.username;
        },
        set: function (username) {
            this.username = username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Password", {
        get: function () {
            return this.password;
        },
        set: function (password) {
            this.password = password;
        },
        enumerable: false,
        configurable: true
    });
    User.validatePassword = function (password) {
        if (password.length < 8) {
            console.log("Password is too short. It needs to be at least 8 characters.");
            return false;
        }
        var hasNumber = password;
        if (!hasNumber) {
            console.log("Password must have at least one number.");
            return false;
        }
        console.log("Password is valid.");
        return true;
    };
    return User;
}());
var user1 = new User(" isha", "Pass12389");
console.log("Username: " + user1.Username);
console.log("Password: " + user1.Password);
user1.Password = "NewPass123 ";
console.log("Updated Password: " + user1.Password);
User.validatePassword("short");
User.validatePassword("09876");
