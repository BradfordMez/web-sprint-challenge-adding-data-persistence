
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_id: 1, project_name: 'First Project', project_description: "Project Description lorem ipsum for Project 1" },
        {project_id: 2, project_name: 'Second Project', project_description: "Project Description lorem ipsum for Project 2" },
        {project_id: 3, project_name: 'Third Project', project_description: "Project Description lorem ipsum for Project 3" }
      ]);
    });
};
