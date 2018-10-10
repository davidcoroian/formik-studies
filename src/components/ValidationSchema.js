import { object, string } from 'yup';

const validationSchema = () =>
  object().shape({
    firstName: string().required('First name is required!'),
    lastName: string().required('Last name is required!'),
    email: string()
      .email('Please provide a valid e-mail address')
      .required('E-mail is required!')
  });

export default validationSchema;
