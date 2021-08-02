import axios from 'axios';
import { Dispatch } from 'redux';
import { Review } from '../../types';
import { ReviewAction, ReviewActionTypes } from '../../types/reviewsTypes';

/**
 *@Action creator, will dispatch action to save new customer review in DB, also will dispatch error action if async operation fails
 *@function uploadNewCustomerReview
 *@param {object} review - review to be saved in DB
 *@returns {function} - Redux thunk function
 */
export const uploadNewCustomerReview = (review: Review) => {
  return async (dispatch: Dispatch<ReviewAction>): Promise<void> => {
    dispatch({ type: ReviewActionTypes.UPLOAD_PRODUCT_REVIEW });
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.post(`/api/reviews`, review, config);
      dispatch({
        type: ReviewActionTypes.PRODUCT_REVIEW_WAS_UPLOADED,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: ReviewActionTypes.PRODUCT_REVIEW_UPLOAD_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};
