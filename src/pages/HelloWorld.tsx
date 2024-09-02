import { FormattedMessage } from 'react-intl';
import React from 'react';

const HelloWorld: React.FC = () => {
  return (
    <div>
      <p className="sentence-case">
        <FormattedMessage id="hello-world" />
      </p>
    </div>
  );
};

export { HelloWorld };
