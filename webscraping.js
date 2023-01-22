const rp = require("request-promise");
const cheerio = require("cheerio");

const options = {
  uri: "https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2022",
  transform: function (body) {
    return cheerio.load(body);
  },
};

rp(options)
  .then(($) => {
    const teams = [];
    $("span.hidden-xs").each(function (i, element) {
      const team = $(element).text().trim();
      teams.push(team);
    });
    console.log(teams);
  })
  .catch((err) => {
    console.log(err);
  });
