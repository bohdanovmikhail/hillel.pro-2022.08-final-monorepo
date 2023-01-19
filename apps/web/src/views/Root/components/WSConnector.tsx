import { useEffect } from 'react';
import { connect } from 'react-redux';

import { socketsConnect, socketsDisconnect } from '../../../core/store/sockets';

function WSConnectorView({ delay = 0, connect, disconnect }: IProps) {
  useEffect(() => {
    const id = setTimeout(() => {
      connect();
    }, delay);

    return () => {
      clearTimeout(id);
      disconnect();
    };
  }, []);

  return null;
}

const mapDispatch = {
  connect: socketsConnect,
  disconnect: socketsDisconnect,
};

export const WSConnector = connect(null, mapDispatch)(WSConnectorView);

interface IProps {
  delay?: number;
  connect: () => void;
  disconnect: () => void;
}
