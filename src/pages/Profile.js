// import { Link as RouterLink } from 'react-router-dom';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Card, Link, Container, Typography } from '@mui/material';
// // hooks
// import useResponsive from '../hooks/useResponsive';
// // components
// import Page from '../components/Page';
// import Logo from '../components/Logo';
// // sections
// import { RegisterForm } from '../sections/auth/register';
// import AuthSocial from '../sections/auth/AuthSocial';

// // ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//   },
// }));

// // ----------------------------------------------------------------------

// export default function Register() {

//   return (
//     <Page title="Profile">
//         <Container>
//             <Typography variant="h4" gutterBottom>
//               Profile Settings
//             </Typography>

//             <Typography sx={{ color: 'text.secondary', mb: 5 }}>Free forever. No credit card needed.</Typography>

//             <AuthSocial />

//             <RegisterForm />

//             <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
//               By registering, I agree to ITrade&nbsp;
//               <Link underline="always" color="text.primary" href="#">
//                 Terms of Service
//               </Link>
//               {''}and{''}
//               <Link underline="always" color="text.primary" href="#">
//                 Privacy Policy
//               </Link>
//               .
//             </Typography>
//         </Container>
//     </Page>
//   );
// }

import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Container,
  Typography,
  Grid,
  Card,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../components/Iconify';
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Profile() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [broker, setBroker] = useState('');

  const handleChange = (event) => {
    setBroker(event.target.value);
  };

  const brokerDetails = (brokerName) => {
    switch (brokerName) {
      case 'AliceBlue':
        return (
          <>
            <TextField
              fullWidth
              label="API Key"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Broker UserName"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="Broker Password"
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
          </>
        );
      case 'Groww':
        return(
          <>
          <TextField
              fullWidth
              label="API Key"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
          </>
        )

      default:
        return <></>;
    }
  };

  // <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
  //               <TextField
  //                 fullWidth
  //                 label="First name"
  //                 {...getFieldProps('firstName')}
  //                 error={Boolean(touched.firstName && errors.firstName)}
  //                 helperText={touched.firstName && errors.firstName}
  //               />

  //               <TextField
  //                 fullWidth
  //                 label="Last name"
  //                 {...getFieldProps('lastName')}
  //                 error={Boolean(touched.lastName && errors.lastName)}
  //                 helperText={touched.lastName && errors.lastName}
  //               />
  //             </Stack>

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Page title="Profile">
      <Container>
        <Typography variant="h4" gutterBottom>
          Profile Settings
        </Typography>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="First name"
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                <TextField
                  fullWidth
                  label="Last name"
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Stack>

              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />

              <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                Save User Details
              </LoadingButton>
            </Stack>
          </Form>
        </FormikProvider>

        <Card sx={{ p: 2, mt: 2 }}>
          <Typography variant="h4" gutterBottom>
            Broker Details
          </Typography>

          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Broker Details</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={broker}
                    onChange={handleChange}
                    fullWidth
                    label="Broker Details"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'AliceBlue'}>Alice Blue</MenuItem>
                    <MenuItem value={'Groww'}>Groww</MenuItem>
                  </Select>
                </FormControl>

                {brokerDetails(broker)}

                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
                  Save Broker Details
                </LoadingButton>
              </Stack>
            </Form>
          </FormikProvider>
        </Card>
      </Container>
    </Page>
  );
}
