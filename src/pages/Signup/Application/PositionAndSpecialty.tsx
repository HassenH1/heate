import { Box, Typography } from "@mui/material";

function PositionAndSpecialty() {
  return (
    <Box
      width={{ xs: "100%", md: "60%" }}
      // height="100%"
      // mt={2}
    >
      <Typography variant="h5" fontWeight={700}>
        Position and Specialty
      </Typography>

      <Typography variant="body1">
        Gotta come up with better design here
      </Typography>
      <Typography>
        This one is tough cuz its going to be different results based on
        position selected
      </Typography>
    </Box>
  );
}

export default PositionAndSpecialty;

// @todo
// IMAGING SERVICES!
// Radiologic Technologist (X-ray Technician)
// MRI Technologist (Magnetic Resonance Imaging Technologist)
// CT Technologist (Computed Tomography Technologist)
// Ultrasound Technologist (Sonographer)
// Nuclear Medicine Technologist
// Mammography Technologist
// Interventional Radiologic Technologist
// Fluoroscopy Technologist
