// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Avatar,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import logo from '../../assets/Img/aidora.png';
import adminBg from '../../assets/Img/bg.jpg';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  otp: Yup.string().when('showOtpInput', {
    is: true,
    then: Yup.string().required('OTP is required'),
  }),
});

export default function AdminLogin() {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      otp: '',
      showOtpInput: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!showOtpInput) {
        try {
          // First step: Validate email and password
          // eslint-disable-next-line no-unused-vars
          const response = await axios.post('http://localhost:5000/api/users/admin/login', { email: values.email, password: values.password });
          setShowOtpInput(true);
        } catch (err) {
          setError('Invalid credentials');
        }
      } else {
        try {
          // Second step: Verify OTP
          const response = await axios.post('http://localhost:5000/api/users/admin/verify-otp', { email: values.email, otp: values.otp });
          const { token } = response.data;
          localStorage.setItem('token', token);
          navigate('/adminPanel');
        } catch (err) {
          setError('Invalid OTP');
        }
      }
    },
  });

  return (
    <div
      style={{
        backgroundImage: `url(${adminBg})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="sm" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ECEEE8',
          }}
        >
          <Avatar alt="Aidora Logo" src={logo} sx={{ width: 100, height: 100 }} />
          <br />
          <ThemeProvider theme={theme}>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#25934C', fontSize: '26px' }}>
              Admin Login
            </Typography>
          </ThemeProvider>
          {error && <Typography color="error">{error}</Typography>}
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              style={{ backgroundColor: 'white' }}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            {!showOtpInput ? (
              <>
                <TextField
                  margin="normal"
                  style={{ backgroundColor: 'white' }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#43A273', fontWeight: 'bold', mt: 3, mb: 2 }}
                >
                  Log In
                </Button>
                <Grid container>
                  <Link href="#" variant="body2" sx={{ color: '#43A273' }}>
                    Forgot password?
                  </Link>
                </Grid>
              </>
            ) : (
              <>
                <TextField
                  margin="normal"
                  style={{ backgroundColor: 'white' }}
                  required
                  fullWidth
                  id="otp"
                  label="OTP"
                  name="otp"
                  autoComplete="one-time-code"
                  value={formik.values.otp}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.otp && Boolean(formik.errors.otp)}
                  helperText={formik.touched.otp && formik.errors.otp}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#43A273', fontWeight: 'bold', mt: 3, mb: 2 }}
                >
                  Verify OTP
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
