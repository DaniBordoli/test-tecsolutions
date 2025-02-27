// src/redux/slices/paymentSlice.ts
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {PaymentState} from '../../types';
import axios from 'axios';
import {API_ENDPOINT, DEVICE_ID} from '@config/api';

const initialState: PaymentState = {
  loading: false,
};

export const createPayment = createAsyncThunk(
  'payment/createPayment',
  async (
    paymentPayload: {
      amount: string;
      description: string;
      currency: {code: string; symbol: string};
    },
    thunkAPI,
  ) => {
    try {
      const numericAmount = parseFloat(
        paymentPayload.amount.replace(/[^0-9,]/g, '').replace(',', '.'),
      );
      const response = await axios.post(
        API_ENDPOINT,
        {
          expected_output_amount: numericAmount,
          fiat: paymentPayload.currency.symbol,
          reference: paymentPayload.description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Device-Id': DEVICE_ID,
          },
        },
      );
      console.log('ORDEN CREADA', response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Error en la creación del pago',
      );
    }
  },
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createPayment.pending, state => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentData = action.payload;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default paymentSlice.reducer;
