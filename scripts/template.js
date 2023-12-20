document.addEventListener("DOMContentLoaded", function () {
  let creatorsUrl = "../scripts/creators-data.json";
  fetch(creatorsUrl)
    .then((response) => response.json())
    .then((data) => buildCreatorContent(data));
  function buildCreatorContent(data) {
    let mysource = document.getElementById("creator-template").innerHTML;
    let mytemplate = Handlebars.compile(mysource);
    myresult = mytemplate(data);
    document.getElementById("container").innerHTML = myresult;
  }
});
