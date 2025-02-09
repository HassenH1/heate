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
} from "@mui/material";
import { MapPin, SlidersHorizontal, CalendarDays, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Filters from "./components/Filters";

const JobDetailsCard = ({
  toggleDetailModal,
  idx,
}: {
  toggleDetailModal: () => void;
  idx: number;
}) => (
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
    <CardActionArea sx={{ paddingX: { md: 2 } }} onClick={toggleDetailModal}>
      <CardContent>
        <Typography
          align="right"
          variant="subtitle2"
          color="success"
          fontWeight={750}
        >
          $203
        </Typography>
        <Typography component="div" variant="h5" fontWeight={700}>
          Certified Nurse Assistant {idx}
        </Typography>
        <Stack mb={2}>
          <Box display="flex" alignItems="center" columnGap={1}>
            <MapPin size={15} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Los Angeles 90018
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" columnGap={1}>
            <CalendarDays size={15} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              Saturday, 11/30/25
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" columnGap={1}>
            <Clock size={15} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              9:00am - 5:00pm (8 hrs)
            </Typography>
          </Box>
        </Stack>
        <Typography variant="body2" color="text.secondary" mb={2}>
          We are a team of founders operators, and angel investors who have
          built, scaled and successfully exited startups. We use our combined
          knowledge and experience to be a value add to the founders we invest
          in.
        </Typography>
        <Chip
          label={idx % 3 === 0 ? "Per diem" : "Assignment"}
          color="success"
          variant="outlined"
          sx={{ borderRadius: 0 }}
        />
      </CardContent>
    </CardActionArea>
  </Card>
);

function FindJobs() {
  const theme = useTheme();
  const [top, setTop] = useState(0);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const toggleDetailModal = () => setOpenDetailModal((prev) => !prev);

  useEffect(() => {
    if (containerRef.current)
      setTop(containerRef.current.getBoundingClientRect().top);
  }, [containerRef]);

  return (
    <>
      <Stack spacing={1} direction={{ xs: "column", md: "row" }} px={{ md: 3 }}>
        <Box
          ref={containerRef}
          height="fit-content"
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
              <JobDetailsCard idx={idx} toggleDetailModal={toggleDetailModal} />
            ))}
        </Box>
      </Stack>
      <IconButton
        size="small"
        onClick={() => setOpenFilterModal(true)}
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
          open={openFilterModal}
          onClose={() => setOpenFilterModal(false)}
          sx={{ zIndex: 100 }}
        >
          <Card sx={{ paddingBottom: 1 }}>
            <Filters />
            <CardActions>
              <Button
                size="small"
                fullWidth
                variant="contained"
                onClick={() => setOpenFilterModal(false)}
              >
                Reset
              </Button>
              <Button
                size="small"
                fullWidth
                variant="contained"
                onClick={() => setOpenFilterModal(false)}
              >
                Apply
              </Button>
            </CardActions>
          </Card>
        </Drawer>
      )}
      <Drawer
        anchor={isMobile ? "left" : "right"}
        open={openDetailModal}
        onClose={() => setOpenDetailModal(false)}
        sx={{ zIndex: 3000 }}
        PaperProps={{ sx: { width: { xs: "80%", md: "50%" } } }}
      >
        Job details go here
      </Drawer>
    </>
  );
}

export { FindJobs };
