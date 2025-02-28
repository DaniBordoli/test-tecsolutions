import {useEffect, useState} from 'react';

interface PaymentStatusMessage {
  status: string;
  [key: string]: any;
}

export function usePaymentWebSocket(identifier: string) {
  const [message, setMessage] = useState<PaymentStatusMessage | null>(null);

  useEffect(() => {
    if (!identifier) {
      return;
    }

    const socket = new WebSocket(
      `wss://payments.pre-bnvo.com/ws/merchant/${identifier}`,
    );

    socket.onopen = () => {};

    socket.onmessage = event => {
      try {
        const data: PaymentStatusMessage = JSON.parse(event.data);
        setMessage(data);
      } catch (error) {
        console.error('Error parseando el mensaje', error);
      }
    };

    socket.onerror = error => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {};

    return () => {
      socket.close();
    };
  }, [identifier]);

  return message;
}
