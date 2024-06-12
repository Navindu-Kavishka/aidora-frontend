import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      setShowOtpInput(true);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleOtpSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/verify-otp', { email, otp });
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid OTP');
    }
  };

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
          <Avatar alt="Remy Sharp" src={logo} sx={{ width: 100, height: 100 }} />
          <br />
          <ThemeProvider theme={theme}>
            <Typography component="h1" variant="h5" style={{ fontWeight: 'bolder', color: '#25934C', fontSize: '26px' }}>
              Admin Login
            </Typography>
          </ThemeProvider>
          {error && <Typography color="error">{error}</Typography>}
          {!showOtpInput ? (
            <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#43A273', fontWeight: 'bolder' }}
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Link href="#" variant="body2" style={{ color: '#43A273' }}>
                  Forgot password?
                </Link>
              </Grid>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleOtpSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                style={{ backgroundColor: 'white' }}
                required
                fullWidth
                id="otp"
                label="OTP"
                name="otp"
                autoComplete="one-time-code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#43A273', fontWeight: 'bolder' }}
                sx={{ mt: 3, mb: 2 }}
              >
                Verify OTP
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
}
