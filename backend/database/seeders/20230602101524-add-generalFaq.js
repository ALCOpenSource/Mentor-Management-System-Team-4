/* eslint-disable prettier/prettier */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('general_faq', [
      {
        question: 'first general faq',
        answer: 'answer to first general question',
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      question: 'second general faq',
      answer: 'answer to second general question',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    question: 'third general faq',
    answer: 'answer to third general question',
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 {
  question: 'fourth general faq',
  answer: 'answer to fourth general question',
  createdAt: new Date(),
  updatedAt: new Date(),
},

    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('general_faq', null);
  }
};
