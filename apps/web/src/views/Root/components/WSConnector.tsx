import { useEffect } from 'react';
import { connect } from 'react-redux';

import { socketsConnect, socketsDisconnect } from '../../../core/store/sockets';
import { useAuth } from '../../../core/context';

function WSConnectorView({ delay = 0, connect, disconnect }: IProps) {
  const { token } = useAuth();

  useEffect(() => {
    const id = setTimeout(() => {
      if (token) {
        connect(token);
      }
    }, delay);

    return () => {
      clearTimeout(id);
      disconnect();
    };
  }, [token]);

  return null;
}

const mapDispatch = {
  connect: socketsConnect,
  disconnect: socketsDisconnect,
};

export const WSConnector = connect(null, mapDispatch)(WSConnectorView);

interface IProps {
  delay?: number;
  connect: (token: string) => void;
  disconnect: () => void;
}
