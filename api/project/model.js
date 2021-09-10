// build your `Project` model here
const db = require("../../data/dbConfig");

function get() {
  return db("projects");
}
function getById(project_id) {
  return db("projects").where("project_id", project_id).first();
}
function add(project) {
  return db("projects")
    .insert(project)
    .then((id) => {
      return getById(id[0]);
    });
}

module.exports = {
  get,
  getById,
  add,
};