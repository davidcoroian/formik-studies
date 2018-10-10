import FormMarkup from './FormMarkup';
import { withFormik } from 'formik';
import validationSchema from './ValidationSchema';

const mapPropsToValues = props => ({
  firstName: props.user.firstName,
  lastName: props.user.lastName,
  email: props.user.email,
  id: 1
});

const handleSubmit = (values, { setSubmitting, props }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    props.setUser(values);
    setSubmitting(false);
  }, 1000);
};

const formikConfig = {
  mapPropsToValues,
  validationSchema,
  handleSubmit
};

// NEXT: modificar o state do App a partir do handleSubmit
export default withFormik(formikConfig)(FormMarkup);
