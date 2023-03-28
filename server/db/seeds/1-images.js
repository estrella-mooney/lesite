/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('images').insert([
    {
      id: 1,
      countryName: 'Canada',
      description: 'Hello',
      path: '/images/image1.jpg',
    },
    {
      id: 2,
      countryName: 'New Zealand',
      description: 'Hi',
      path: '/images/image2.jpg',
    },
    { id: 3, countryName: 'Germany', description: 'Gday' },
  ])
}
