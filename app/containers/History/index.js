/**
 *
 * History
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHistory from './selectors';
import reducer from './reducer';
import saga from './saga';

import { loadRepos } from './actions';

export function History({ repos }) {
  useInjectReducer({ key: 'history', reducer });
  useInjectSaga({ key: 'history', saga });

  useEffect(() => {
    // code to run on component mount
    repos();
  }, []);
  return (
    <div>
      <div>
        <Helmet>
          <title>History</title>
          <meta name="description" content="Description of History" />
        </Helmet>
      </div>
    </div>
  );
}

History.propTypes = {
  repos: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  history: makeSelectHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    repos: () => {
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(History);
