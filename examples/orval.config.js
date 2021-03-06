const faker = require('faker');
/**
 * Example config for `yarn example:advanced`
 */

module.exports = {
  'petstore-file': {
    file: 'examples/petstore.yaml',
    output: 'examples/petstoreFromFileSpecWithConfig.ts'
  },
  'petstore-file-transfomer': {
    file: 'examples/petstore.yaml',
    output: 'examples/petstoreFromFileSpecWithTransformer.ts',
    types: 'examples/model',
    transformer: 'examples/transformer-add-version.js',
    mock: {
      properties: {
        id: faker.random.number({min: 1, max: 9999})
      },
      responses: {
        listPets: {
          properties: () => {
            return {
              id: () => faker.random.number({min: 1, max: 9}),
              '/tag|name/': 'jon'
            };
          }
        },
        showPetById: {
          data: () => ({
            id: faker.random.number({min: 1, max: 99}),
            name: faker.name.firstName(),
            tag: faker.helpers.randomize([faker.random.word(), undefined])
          })
        }
      }
    }
  }
};
