/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import httpStatus from 'http-status';
// import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import * as  GeneralFaqServices  from '../services/general-faq.service';

const getGeneralFaq = catchAsync(async (req, res) => {
    const generalFaq = await GeneralFaqServices.getAllGeneralFaq();

    if (!generalFaq) {
        res.status(httpStatus.NOT_FOUND).json({ success: false, message: 'General Faq not found' });
      } else {
        res.status(httpStatus.OK).json({ success: true, data: generalFaq });
      }

  });

  export default {getGeneralFaq};