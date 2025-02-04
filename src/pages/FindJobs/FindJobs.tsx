import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import { MapPin, SlidersHorizontal } from "lucide-react";
import { useRef } from "react";

function FindJobs() {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Stack spacing={1} direction={{ xs: "column", md: "row" }} px={{ md: 3 }}>
        <Box
          height={{ sx: "10%", md: 500 }}
          width={{ sx: "100%", md: 400 }}
          px={{ xs: 2, md: 0 }}
          position={{ md: "sticky" }}
          top={containerRef.current?.getBoundingClientRect().top}
          display={{ xs: "none", md: "block" }}
        >
          <Card>
            <CardContent>
              <Typography fontWeight={600}>Locations</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box px={{ xs: 2, md: 3 }}>
          {Array(10)
            .fill(null)
            .map(() => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "fit-content",
                  maxHeight: 240,
                  marginBottom: 3,
                }}
              >
                <CardActionArea sx={{ paddingX: { md: 2 } }}>
                  <CardContent>
                    <Typography
                      align="right"
                      variant="subtitle2"
                      sx={{ color: "text.secondary" }}
                    >
                      Just now
                    </Typography>
                    <Typography component="div" variant="h5" fontWeight={700}>
                      Digital Marketing
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.5}
                      mb={2}
                    >
                      <MapPin size={15} />
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: "text.secondary" }}
                      >
                        Los Angeles
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      We are a team of founders operators, and angel investors
                      who have built, scaled and successfully exited startups.
                      We use our combined knowledge and experience to be a value
                      add to the founders we invest in.
                    </Typography>
                    <Chip
                      label="Full Time"
                      color="success"
                      variant="outlined"
                      sx={{ borderRadius: 0 }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </Box>
      </Stack>
      <IconButton
        size="large"
        onClick={() => {}}
        sx={{
          position: "fixed",
          zIndex: 9999,
          bottom: 20,
          right: 10,
          display: { xs: "inline-flex", md: "none" },
          background: theme.palette.background.default,
          border: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        <SlidersHorizontal size={35} />
      </IconButton>
    </>
  );
}

export { FindJobs };
