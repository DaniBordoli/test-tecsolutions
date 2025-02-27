import {useEffect, useState} from 'react';

interface PaymentStatusMessage {
  status: string; // Por ejemplo, 'pending', 'completed', 'failed', etc.
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

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = event => {
      try {
        const data: PaymentStatusMessage = JSON.parse(event.data);
        console.log('Mensaje recibido', data);
        // Por ejemplo, si data.status === 'completed' actualizamos el estado
        setMessage(data);
      } catch (error) {
        console.error('Error parseando el mensaje', error);
      }
    };

    socket.onerror = error => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, [identifier]);

  return message;
}
