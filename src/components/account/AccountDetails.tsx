import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { savePersonalData as savePersonalDataAction } from '../../actions';
import PersonalDetails from './PersonalDetails';

const AccountDetails = () => {
  const handleOnSave = (e: any) => {
    e.preventDefault();
    const values = [...e.target.elements].map((el:any) => ({ [el.name]: el.value }));
    console.log(values);
  };

  return (
    <div>
      <Form onSubmit={handleOnSave}>
        <PersonalDetails />
        <Button type='submit' className="m-t-lg m-b-lg">Guardar</Button>
      </Form>
    </div>
  );
};

const actionCreators = { savePersonalData: savePersonalDataAction };

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(AccountDetails);
