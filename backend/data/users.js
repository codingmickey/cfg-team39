import bcrypt from "bcryptjs";

const users = [
  {
    name: "Kartik",
    email: "kjmickey003@gmail.com",
    password: "HithereCFG!",
    contact: "9619247188",
    organization: true,
    isAdmin: true
  }
  //   {
  //     name: "Rajat",
  //     email: "rajat@kosells.com",
  //     password: bcrypt.hashSync("pass123", 12),
  //     isConfirmed: true,
  //     avatar: "/images/icon_user.png"
  //   },
  //   {
  //     name: "Ravi",
  //     email: "ravi@kosells.com",
  //     password: bcrypt.hashSync("pass123", 12),
  //     isConfirmed: true,
  //     avatar: "/images/icon_user.png"
  //   },
  //   {
  //     name: "Voca",
  //     email: "dataxom889@flmmo.com",
  //     password: bcrypt.hashSync("pass123", 12),
  //     isConfirmed: true,
  //     avatar: "/images/icon_user.png"
  //   }
];

export default users;
