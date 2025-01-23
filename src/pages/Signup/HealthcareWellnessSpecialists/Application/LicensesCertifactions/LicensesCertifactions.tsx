import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { CloudUploadIcon } from "lucide-react";
import ApplicationButtons from "../components/ApplicationButtons";
import { states } from "./data";

function LicensesCertifactions() {
  return (
    <>
      <Box width={{ xs: "100%", md: "50%" }} margin="0 auto" pt={4} px={2}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Licenses and Certifaction
        </Typography>
        <TextField
          id="Licensenumber"
          label="License Number"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          select
          label="State"
          defaultValue="CA"
          fullWidth
          required
          sx={{ mb: 4 }}
        >
          {states.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="date"
          label="MM/DD/YYYY"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 4 }}
        />

        <Typography gutterBottom>
          Upload a photo of your licenses/certifaction
        </Typography>
        <Button
          component="label"
          variant="contained"
          size="large"
          tabIndex={-1}
          startIcon={<CloudUploadIcon color="white" />}
        >
          Choose file
          <input
            style={{
              clip: "rect(0 0 0 0)",
              clipPath: "inset(50%)",
              height: 1,
              overflow: "hidden",
              position: "absolute",
              bottom: 0,
              left: 0,
              whiteSpace: "nowrap",
              width: 1,
            }}
            type="file"
            onChange={(event) => console.log(event.target.files)}
          />
        </Button>
        <ApplicationButtons />
      </Box>
    </>
  );
}

export default LicensesCertifactions;
