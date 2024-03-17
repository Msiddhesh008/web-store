import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Owner name is required'),
  password: Yup.string().required('Password is required'),
});
