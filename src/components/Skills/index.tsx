import React, { useState, useEffect } from 'react';
import { IStore } from 'store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router';
import { Skills } from './Skills';
import { db } from '../../firebase';

type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps

const SkillsContainer: React.FC<Props> = (props) => {
  const [skills, setSkills] = useState([]);

  const getSkills = () => {
    db.ref('/skills').once('value').then((snapshot) => {
      setSkills(snapshot.val());
    });
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      { (props.activePage === 'skills' || props.lastPage === 'skills')
      && <Skills activePage={ props.activePage } skills={ skills } /> }
    </>
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    activePage: store.structure.activePage,
    lastPage: store.structure.lastPage,
  };
};


const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default compose<Props, {}>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SkillsContainer);
