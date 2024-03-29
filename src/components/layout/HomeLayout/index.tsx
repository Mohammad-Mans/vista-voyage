import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
  Divider,
  Grid,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo/Vista-Voyage-Logo-White.svg";
import { BookingsProvider } from "../../../context/BookingsProvider";

function HomeLayout() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar component="header">
        <Grid
          container
          justifyContent="center"
          sx={{
            "& .css-hyum1k-MuiToolbar-root": {
              padding: 0,
            },
          }}
        >
          <Grid item xs={11} lg={9}>
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  flexGrow: 1,
                }}
              >
                <IconButton onClick={() => navigate("/")}>
                  <img src={Logo} height={45} width={45} alt="Logo" />
                </IconButton>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ ml: 1, display: ["none", "flex"] }}
                >
                  Vista Voyage
                </Typography>
              </Box>

              <Stack direction="row" spacing={2} sx={{ mr: 2 }}>
                <Button color="inherit" onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    navigate("/login");
                    localStorage.clear();
                  }}
                >
                  Logout
                </Button>
              </Stack>

              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ bgcolor: "secondary.main" }}
              />

              <IconButton
                color="secondary"
                size="large"
                aria-label="bookings"
                onClick={() => navigate("/checkout")}
                sx={{
                  padding: 1,
                }}
              >
                <LuggageIcon fontSize="large" />
              </IconButton>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>

      <Box component="main" pt={8}>
        <BookingsProvider>
          <Outlet />
        </BookingsProvider>
      </Box>
    </>
  );
}
export default HomeLayout;
