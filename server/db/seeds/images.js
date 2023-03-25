/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { id: 1, description: 'Canada' },
    { id: 2, description: 'New Zealand' },
    { id: 3, description: 'Germany' },
  ])
}
