export interface PaymentState {
  loading: boolean;
  error?: string;
  paymentData?: {
    identifier: string;
    web_url: string;
    payment_uri: string;
    address: string;
    tag_memo: string;
    input_currency: string;
    expected_input_amount: number;
    rate: number;
    notes: string;
    fiat: string;
    language: string;
  };
}

export interface PaymentStatusMessage {
  address: string;
  balance_based: string;
  confirmed_amount: number;
  created_at: string;
  crypto_amount: number;
  currency_id: string;
  edited_at: string;
  expired_time: string;
  fiat: string;
  fiat_amount: number;
  good_fee: boolean;
  identifier: string;
  internal_data: any;
  language: string;
  merchant_device: string;
  merchant_device_id: number;
  notes: string | null;
  percentage: number;
  rbf: boolean;
  received_amount: number;
  reference: string;
  safe: boolean;
  status: string;
  tag_memo: string;
  transactions: any[];
  unconfirmed_amount: number;
  url_ko: string | null;
  url_ok: string | null;
  url_standby: string | null;
}
