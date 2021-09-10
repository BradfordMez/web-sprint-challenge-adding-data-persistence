// build your `Resource` model here
const db = require("../../data/dbConfig");

function get() {
  return db("resources");
}
function getById(resource_id) {
  return db("resources").where("resource_id", resource_id).first();
}
function add(resource) {
  return db("resources")
    .insert(resource)
    .then((id) => {
      return getById(id[0]);
    });
}

module.exports = {
  get,
  getById,
  add,
};
