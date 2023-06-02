/* eslint-disable prettier/prettier */

import models from '../database/models';

const { GeneralFaq } = models;

const getAllGeneralFaq = async () => {
  return GeneralFaq.findAll();
};

export default { getAllGeneralFaq };
