import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: 'Lâmpada', image: "lampadas.svg" },
    { title: 'Pilhas e baterias', image: "baterias.svg" },
    { title: 'Papéis e Papelão', image: "papeis-papelao.svg" },
    { title: 'Resíduo  Eletrônicos', image: "eletrônicos.svg" },
    { title: 'Resíduo  Orgânico', image: "eletrônicos.svg" },
    { title: 'Óleo de Cozinha', image: "oleo.svg" },

  ]);
}