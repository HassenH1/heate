import {
  Grid2 as Grid,
  Container,
  Box,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router";
import { Users, Hospital } from "lucide-react";
import Logo from "../../components/logo/Logo";

function Signup() {
  const navigation = useNavigate();
  return (
    <Container>
      <Grid container height="100vh">
        <Grid
          size={{ xs: 12, md: 6 }}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box flexGrow={1} display="flex" flexDirection="column">
            <Container maxWidth="xl" sx={{ marginTop: 2 }}>
              <Logo />
            </Container>

            <Stack
              spacing={3}
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight="600">
                Sign up with Heate as...
              </Typography>
              <Card
                sx={{
                  minWidth: 275,
                  maxWidth: 375,
                  height: 160,
                  margin: "0 auto",
                }}
                raised
              >
                <CardActionArea
                  sx={{ height: "100%" }}
                  onClick={() =>
                    navigation("/signup/healthcare-wellness-specialists")
                  }
                >
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="p">
                      Healthcare & wellness specialists{" "}
                      <Users style={{ verticalAlign: "middle" }} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      I am a healthcare or allied health specialist.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Typography variant="h5" fontWeight="600">
                or
              </Typography>
              <Card sx={{ minWidth: 275, maxWidth: 375, height: 160 }} raised>
                <CardActionArea
                  sx={{ height: "100%" }}
                  onClick={() => navigation("/signup/medical-facility")}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="p">
                      Medical facility{" "}
                      <Hospital style={{ verticalAlign: "middle" }} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      I represent a healthcare facility seeking staffing
                      solutions.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Stack>
          </Box>
        </Grid>
        <Grid
          size={6}
          display={{ xs: "none", md: "flex" }}
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://images.unsplash.com/photo-1587500154541-1cafd74f0efc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="455px"
            style={{
              filter: "sepia(40%)",
              borderRadius: "8px",
              maxWidth: "500px",
            }}
            alt="heatehealth"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export { Signup };
