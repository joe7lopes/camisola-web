import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { savePersonalData as savePersonalDataAction } from '../../actions';
import PersonalDetails from './PersonalDetails';
import ChangePassword from './ChangePassword';

const AccountDetails = () => {

  const handleOnSave = () => {

  };

  return (
    <div>
      <Form>
        <PersonalDetails />
        <ChangePassword />
        <Button type='submit' className="m-t-lg m-b-lg" onClick={handleOnSave}>Guardar</Button>
      </Form>
    </div>
  );
}

const actionCreators = { savePersonalData: savePersonalDataAction };

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(AccountDetails);
