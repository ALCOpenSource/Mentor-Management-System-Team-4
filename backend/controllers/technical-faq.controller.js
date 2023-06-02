/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import httpStatus from 'http-status';
// import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import * as  TechnicalFaqServices  from '../services/technical-faq.service';

const getTechnicalFaq = catchAsync(async (req, res) => {
    const techFaq = await TechnicalFaqServices.getAllTechFaq();

    if (!techFaq) {
        res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'Technical Faq not found' });
      } else {
        res.status(httpStatus.OK).json({ success: true, data: techFaq });
      }

  });

  export default getTechnicalFaq;