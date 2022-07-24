const Users = require("../functions/users.ts");

const resolver = {
  list: function (args) {
    let resp = Array.from(Users);
    args.name = args.name.trim();
    if (!args.name) return resp;

    const regex = new RegExp(
      args.name
        .replace(/( )+/g, `|^((\b[A-zÀ-ú']{2,40}\b)\s*){2,}$|`)
        .toLowerCase()
    );

    let fUsers = resp.filter(function (item) {
      return regex.exec(item.name.toLowerCase());
    });

    return fUsers;
  },
};

module.exports = resolver;
