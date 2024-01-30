const { Short_link } = require("../models/index");
const QRCode = require("qrcode");
const { generateRandomString, handleDate } = require("../utils/short_link");
module.exports = {
  index: async (req, res) => {
    const err = req.flash("err");
    const errEx = req.flash("errEx");
    const short_link_intances = await Short_link.findAll({
      order: [["id", "desc"]],
    });
    return res.render("short_link/index", {
      layout: "short_link/layout",
      short_link_intances,
      handleDate,
      err,
      errEx,
    });
  },
  handleShortLink: async (req, res) => {
    let { url, password, safe, id_custom } = req.body;
    const urlRegex = /^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+([^\s]*)$/i;

    const isURL = urlRegex.test(url);
    if (!isURL) {
      req.flash("err", "url không hợp lệ!!!");
      return res.redirect("/shorten-urls");
    }
    if (!id_custom) {
      id_custom = generateRandomString(6);
    }
    const urlExist = await Short_link.findOne({
      where: { id_custom: id_custom },
    });
    if (urlExist) {
      req.flash("errEx", "ShortLink đã tồn tại!");
      return res.redirect("/shorten-urls");
    }
    await Short_link.create({
      link_detail: url,
      link_short: `https://day61-rust.vercel.app/shorten-urls/${id_custom}`,
      password: password ? password : null,
      access_times: 0,
      id_custom: id_custom,
      safe_link: +safe === 1 ? true : false,
    });
    res.redirect("/shorten-urls");
  },
  handleCheckPass: async (req, res, next) => {
    const { id } = req.params;
    const { password } = req.body;
    const urlExist = await Short_link.findOne({ where: { id_custom: id } });
    if (!urlExist) {
      return next(new Error("Url không tồn tại!"));
    }
    if (urlExist.password !== password) {
      res.redirect(`/shorten-urls/${id}`);
    }
    if (urlExist.password === password) {
      await Short_link.update(
        { access_times: urlExist.access_times + 1 },
        { where: { id_custom: id } }
      );
      const urlQr = await QRCode.toDataURL(urlExist.link_detail);
      res.render("short_link/optionsUrl", {
        layout: "short_link/layout",
        url: urlExist.link_detail,
        urlQr,
      });
    }
    // res.json({ body });
    // const { id } = req.params;
    // console.log(id);
    res.render("short_link/checkPass");
  },
  handleOptionUrl: async (req, res, next) => {
    const { id } = req.params;
    const urlExist = await Short_link.findOne({ where: { id_custom: id } });
    if (!urlExist) {
      return next(new Error("Url không tồn tại!"));
    }
    if (urlExist.safe_link === false) {
      await Short_link.update(
        { access_times: urlExist.access_times + 1 },
        { where: { id_custom: id } }
      );
      return res.redirect(urlExist.link_detail);
    }
    if (urlExist.password === null) {
      await Short_link.update(
        { access_times: urlExist.access_times + 1 },
        { where: { id_custom: id } }
      );
      const urlQr = await QRCode.toDataURL(urlExist.link_detail);
      return res.render("short_link/optionsUrl", {
        layout: "short_link/layout",
        url: urlExist.link_detail,
        urlQr,
      });
    }
    res.render("short_link/checkPass", {
      layout: "short_link/layout",
    });
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await Short_link.destroy({ where: { id_custom: id } });
    return res.redirect("/shorten-urls");
  },
};
