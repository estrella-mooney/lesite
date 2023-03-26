/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('images').insert([
    { id: 1, countryName: 'Canada', description: 'Hello' },
    { id: 2, countryName: 'New Zealand', description: 'Hi' },
    { id: 3, countryName: 'Germany', description: 'Gday' },
  ])
}
