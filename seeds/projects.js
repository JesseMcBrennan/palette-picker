let projectsData = [{
  name: 'MovieTracker',
  palettes: [
  {
    name: 'Fancy',
    color_1: '#E5E5E5',
    color_2: '#2A31D7',
    color_3: '#D72AC6',
    color_4: '#38D72A',
    color_5: '#D7C62A'
  },
  {
    name: 'Lighter',
    color_1: '#E5E5E5',
    color_2: '#2A31D7',
    color_3: '#D72AC6',
    color_4: '#38D72A',
    color_5: '#D7C62A'
  },
  {
    name: 'Darker',
    color_1: '#E5E5E5',
    color_2: '#2A31D7',
    color_3: '#D72AC6',
    color_4: '#38D72A',
    color_5: '#D7C62A'
  }
  ]
}]

const createProject = (knex, project) => {
  return knex('projects').insert({
    name: project.name
  }, 'id')
  .then(projectId => {
    let palettePromises = []

    project.palettes.forEach(palette => {
      palettePromises.push(createPalette(knex, {
          ...palette, 
          project_id: projectId[0]
      })
      )
    });

    return Promise.all(palettePromises)
  })
};

const createPalette = (knex, palette) => {
  return knex('palettes').insert(palette);
};

exports.seed = function(knex, Promise) {
  return knex('palettes').del()
    .then(() => knex('projects').del())
    .then(() => {
      let projectPromises = [];

      projectsData.forEach(project => {
        projectPromises.push(createProject(knex, project));
      });

      return Promise.all(projectPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
