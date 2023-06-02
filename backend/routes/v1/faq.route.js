/* eslint-disable prettier/prettier */
import express from 'express';

import * as GeneralFaqController from '../../controllers/general-faq.controller';
import * as TechnicalFaqController from '../../controllers/technical-faq.controller';

const router = express.Router();

router
  .route('/')
  .get(GeneralFaqController.default)
  .put(TechnicalFaqController.default);