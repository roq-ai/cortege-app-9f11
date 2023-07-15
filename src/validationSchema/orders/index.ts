import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  car_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
