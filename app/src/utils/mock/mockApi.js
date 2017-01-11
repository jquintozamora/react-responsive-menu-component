var myData = require("./data");
module.exports = {
    getNavItems: (menu) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: myData.data[menu] });
            }, 300);
        });
    }
};
