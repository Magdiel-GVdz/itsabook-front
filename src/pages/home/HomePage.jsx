import { BusinessTwoTone } from "@mui/icons-material";
import { Avatar, Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define el tema personalizado
const theme = createTheme({
  palette: {
    text: {
      primary: "#000000", // Texto negro
    },
  },
});

export default function HomePage() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    
                >
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
                    />

                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography
                            variant="h1"
                            component="h1"
                            gutterBottom
                            style={{ fontSize: "120px", fontFamily: "Allura, cursive", color: "#ffffff" }} // Color blanco
                        >
                            It's a book!
                        </Typography>
                    </Link>

                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <BusinessTwoTone />
                        </Avatar>

                        <Button
                            component={Link}
                            to="/login"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2, bgcolor: '#ffffff', color: '#000000', '&:hover': { bgcolor: '#f5f5f5' }}} // Fondo blanco, texto negro, hover gris claro
                        >
                            Sign in
                        </Button>
                        <Button
                            component={Link}
                            to="/register"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2, bgcolor: '#ffffff', color: '#000000', '&:hover': { bgcolor: '#f5f5f5' }}} // Fondo blanco, texto negro, hover gris claro
                        >
                            Crear Cuenta
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
