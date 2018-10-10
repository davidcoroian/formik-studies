import React from 'react';

import {
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

const Form = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12} md={6}>
          <FormGroup className={errors.firstName && touched.firstName ? 'has-error' : ''}>
            <ControlLabel htmlFor="firstName">First Name</ControlLabel>
            <FormControl
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="firstName"
              type="text"
            />
          </FormGroup>
          {errors.firstName &&
          touched.firstName &&
            <div className="text-danger">{ errors.firstName }</div>
          }
        </Col>
        <Col xs={12} md={6}>
          <FormGroup className={errors.lastName && touched.lastName ? 'has-error' : ''}>
            <ControlLabel htmlFor="lastName">Last Name</ControlLabel>
            <FormControl
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="lastName"
              type="text"
            />
            {errors.lastName &&
              touched.lastName &&
              <div className="text-danger">{errors.lastName}</div>
            }
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FormGroup className={errors.email && touched.email ? 'has-error' : ''}>
            <ControlLabel htmlFor="email">E-mail</ControlLabel>
            <FormControl
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              type="text"
            />
            {errors.email &&
              touched.email &&
              <div className="text-danger">{errors.email}</div>
            }
          </FormGroup>
        </Col>
      </Row>
      <div className="text-right">
        <Button
          disabled={!dirty || isSubmitting}
          type="submit"
          bsStyle="primary">
          Submit
        </Button>
      </div>
      <pre style={{marginTop: '35px', height: '400px'}}>{JSON.stringify(props, null, 2)}</pre>
    </form>
  );
};

export default Form;
