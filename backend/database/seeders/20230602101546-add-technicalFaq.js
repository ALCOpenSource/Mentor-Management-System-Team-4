/* eslint-disable prettier/prettier */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('technical_faq', [
      {
        question: 'first technical faq',
        answer: 'answer to first technical question',
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      question: 'second technical faq',
      answer: 'answer to second technical question',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    question: 'third technical faq',
    answer: 'answer to third technical question',
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 {
  question: 'fourth technical faq',
  answer: 'answer to fourth technical question',
  createdAt: new Date(),
  updatedAt: new Date(),
},

    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('technical_faq', null);
  }
};
