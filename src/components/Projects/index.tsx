import React from 'react';
import { IStore } from 'store';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router';
import { Projects } from './Projects';


type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps

const ProjectsContainer: React.FC<Props> = (props) => {

  return (
    <>
      {(props.activePage === 'projects' || props.lastPage === 'projects')
      && <Projects activePage={ props.activePage } />}
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    activePage: store.structure.activePage,
    lastPage: store.structure.lastPage,
  };
};

export default compose<Props, {}>(
  connect(mapStateToProps),
  withRouter,
)(ProjectsContainer);
