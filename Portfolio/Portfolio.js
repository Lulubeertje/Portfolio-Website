import portfolio from "./data/data.json" assert { type: "json" };

let ProjectTitle;
let ProjectLink;
let Image1;
let Image2;
let Image3;
let DescriptionText;

for (let project in portfolio) {
  ProjectTitle = portfolio[project].ProjectTitle;
  ProjectLink = portfolio[project].ProjectLink;
  Image1 = portfolio[project].Image1;
  Image2 = portfolio[project].Image2;
  Image3 = portfolio[project].Image3;
  DescriptionText = portfolio[project].DescriptionText;

  /* Defines portlist */
  var portlist = document.getElementById("portlist");

  /* Defines a new list, appends it to portlist. */
  var NewProject = document.createElement("dl");
  NewProject.id = `Project #${Number(project) + 1}`;
  portlist.append(NewProject);

  /* defines the creation of new description title, gives it a class and appends it to newly created list. */
  var NewProject_Title = document.createElement("dt");
  NewProject_Title.classList.add("porttitle");
  NewProject.append(NewProject_Title);

  var NewProject_Title_link = document.createElement("a");
  NewProject_Title_link.href = ProjectLink;
  NewProject_Title.append(NewProject_Title_link);

  var NewProject_Title_Text = document.createElement("h2");
  /* innerText attribute should be made into variable!! */
  NewProject_Title_Text.innerText = ProjectTitle;
  NewProject_Title_link.append(NewProject_Title_Text);

  /* Defines the creation of a new descripton item for the newly created list. */
  var NewProject_Description = document.createElement("dd");
  NewProject_Description.classList.add("desc");
  NewProject.append(NewProject_Description);

  /* Defines creation, appending and source for three new pictures. */
  var NewProject_IMG1 = document.createElement("img");
  /* Source attributes should be made into variables!! */
  NewProject_IMG1.src = Image1;
  NewProject_IMG1.classList.add("pim", "pimnohide");
  NewProject_Description.append(NewProject_IMG1);

  var NewProject_IMG2 = document.createElement("img");
  /* Source attributes should be made into variables!! */
  NewProject_IMG2.src = Image2;
  NewProject_IMG2.classList.add("pim");
  NewProject_Description.append(NewProject_IMG2);

  var NewProject_IMG3 = document.createElement("img");
  /* Source attributes should be made into variables!! */
  NewProject_IMG3.src = Image3;
  NewProject_IMG3.classList.add("pim");
  NewProject_Description.append(NewProject_IMG3);

  var NewProject_Description_Text = document.createElement("p");
  /* innerText attribute should be made into variable!! */
  NewProject_Description_Text.innerText = DescriptionText;
  NewProject_Description.classList.add("desc");
  NewProject_Description.append(NewProject_Description_Text);
}
