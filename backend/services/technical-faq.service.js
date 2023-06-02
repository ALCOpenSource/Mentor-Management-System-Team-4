/* eslint-disable prettier/prettier */

import models from '../database/models';

const { TechnicalFaq } = models;

const getAllTechnicalFaq = async () => {
  return TechnicalFaq.findAll();
};

export default { getAllTechnicalFaq };
