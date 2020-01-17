import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savePersonalData as savePersonalDataAction } from '../../actions';
import PersonalDetails from './PersonalDetails';
import ChangePassword from './ChangePassword';

function AccountDetails({ savePersonalData }) {
  const firstNameRef = React.createRef();
  const lastNameRef = React.createRef();
  const emailRef = React.createRef();
  const phoneRef = React.createRef();
  const addressRef = React.createRef();
  const locationRef = React.createRef();
  const postalCodeRef = React.createRef();

  const handleOnSave = () => {
    const personalDetails = {
      firstName: getRefValue(firstNameRef),
      lastName: getRefValue(lastNameRef),
      email: getRefValue(emailRef),
      phone: getRefValue(phoneRef),
      address: getRefValue(addressRef),
      location: getRefValue(locationRef),
      postalCode: getRefValue(postalCodeRef),
    };

    savePersonalData(personalDetails);
  };

  return (
    <div>
      <PersonalDetails
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        phoneRef={phoneRef}
        addressRef={addressRef}
        locationRef={locationRef}
        postalCodeRef={postalCodeRef}
        />
      <ChangePassword />
      <Button className="m-t-lg m-b-lg" onClick={handleOnSave}>Guardar</Button>
    </div>
  );
}

const getRefValue = (ref) => ref.current.value;

const actionCreators = { savePersonalData: savePersonalDataAction };

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(AccountDetails);
