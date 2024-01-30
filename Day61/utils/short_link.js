const moment = require("moment")
module.exports = {
  generateRandomString: (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";//Bỏ hết ký tự đặc biệt đi a, k lên url là nó lỗi á
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  },
  handleDate: (time) => {
    const specificTime = moment(time, "YYYY-MM-DD HH:mm:ss.SSZ")
    const currentTime = moment()
    const num = currentTime.diff(specificTime, "minutes")
    let diff = num + " phút trước"
    if (num > 60) {
      const num2 = currentTime.diff(specificTime, "hours")
      let diff2 = num2 + " giờ trước"
      if (num2 > 24) {
        diff2 = currentTime.diff(specificTime, "days") + " ngày trước"
      }
      return diff2
    }
    return diff
  },
};
