import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from '../../assets/Img/aidora.png'
import { Avatar, ThemeProvider } from "@mui/material";
import adminBg from "../../assets/Img/bg.jpg";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function AdminLogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (

    <div
      style={{
        backgroundImage: `url(${adminBg})`,
        backgroundSize: "cover",
        minHeight: "100vh", // Set the minimum height to cover the entire viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="sm" sx={{ display: "flex", alignItems: "center" }} >
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ECEEE8",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={logo}
            sx={{ width: 100, height: 100 }}
          />

          <br />

          <ThemeProvider theme={theme}>
            <Typography component="h1" variant="h5" style={{ fontWeight: "bolder", color: "#25934C", fontSize: "26px" }}>
              Admin Login
            </Typography>
          </ThemeProvider>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              style={{ backgroundColor: "white", }}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          
            <TextField
              margin="normal"
              style={{ backgroundColor: "white", }}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#43A273", fontWeight: "bolder" }}
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>

              <Link href="#" variant="body2" style={{ color: "#43A273" }}>
                Forgot password?
              </Link>


            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
