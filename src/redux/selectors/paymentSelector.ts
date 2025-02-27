import {RootState} from '@redux/store/store';

export const selectPaymentLoading = (state: RootState) => state.payment.loading;
export const selectPaymentData = (state: RootState) =>
  state.payment.paymentData;
export const selectPaymentError = (state: RootState) => state.payment.error;
