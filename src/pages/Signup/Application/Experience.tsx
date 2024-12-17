import {
  Box,
  Button,
  Typography,
  Stack,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

function Experience() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box width={{ xs: "100%", md: "60%" }} height={"50%"}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Conclude your clinical experience/practice to boost your income
          potential. This section is completely optional.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            startIcon={<PlusIcon />}
            color="secondary"
            onClick={handleOpen}
          >
            Add experience
          </Button>
        </Stack>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Experience;
