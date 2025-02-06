import {
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  Chip,
  Stack,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  Button,
  Divider,
  Slider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { MapPin, SlidersHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Filters = () => {
  const [sliderVal, setSliderVal] = useState(10);
  return (
    <CardContent>
      <Typography fontWeight={600} gutterBottom>
        Distance {`(${sliderVal} mi)`}
      </Typography>
      <Slider
        size="small"
        defaultValue={10}
        valueLabelDisplay="auto"
        value={sliderVal}
        onChange={(_, value) => setSliderVal(value as number)}
        step={5}
        min={5}
        max={100}
        sx={{ color: "inherit" }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
      <Typography fontWeight={600} gutterBottom>
        Job category
      </Typography>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    </CardContent>
  );
};

function FindJobs() {
  const theme = useTheme();
  const [top, setTop] = useState(0);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    if (containerRef.current)
      setTop(containerRef.current.getBoundingClientRect().top);
  }, [containerRef]);

  return (
    <>
      <Stack spacing={1} direction={{ xs: "column", md: "row" }} px={{ md: 3 }}>
        <Box
          ref={containerRef}
          height={500}
          width={400}
          px={{ xs: 2, md: 0 }}
          position="sticky"
          top={top}
          display={{ xs: "none", md: "block" }}
        >
          <Card sx={{ height: "100%" }}>
            <Filters />
          </Card>
        </Box>
        <Box px={{ xs: 2, md: 3 }}>
          {Array(10)
            .fill(null)
            .map((_, idx) => (
              <Card
                key={idx}
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
        size="small"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          zIndex: 99,
          bottom: 20,
          right: 10,
          display: { xs: "inline-flex", md: "none" },
          background: theme.palette.background.default,
          border: `3px solid ${theme.palette.primary.main}`,
        }}
      >
        <SlidersHorizontal size={30} />
      </IconButton>
      {isMobile && (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ zIndex: 100 }}
        >
          <Card>
            <Filters />
            <CardActions>
              <Button
                size="small"
                fullWidth
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Clear all
              </Button>
              <Button
                size="small"
                fullWidth
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Apply
              </Button>
            </CardActions>
          </Card>
        </Drawer>
      )}
    </>
  );
}

export { FindJobs };
