import React from 'react';
import PropTypes from 'prop-types';

import ApplicationContext from './ApplicationContext';

const ContextType = {
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object,
};

class App extends React.PureComponent {
  static propTypes = {
    // Enables critical path CSS rendering
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { context } = this.props;

    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return (
      <ApplicationContext.Provider value={{ context }}>
        {React.Children.only(this.props.children)}
      </ApplicationContext.Provider>
    );
  }
}

export default App;
