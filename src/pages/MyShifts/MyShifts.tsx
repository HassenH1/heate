import { Box, styled, Tab, Tabs, Typography, useTheme } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const CircleBox = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.main,
}));

function MyShifts() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box flexGrow={1} display="flex" flexDirection="column">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab
            label={
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={0.5}
              >
                <Typography display="flex">Upcoming</Typography>
                <CircleBox>9</CircleBox>
              </Box>
            }
          />
          <Tab
            label={
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={0.5}
              >
                <Typography>Pending</Typography>
                <CircleBox>2</CircleBox>
              </Box>
            }
          />
          <Tab label="Past" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box>
          <Typography>You have no upcoming shifts!</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Box>
          <Typography>You have no pending shifts!</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Box>
          <Typography>You have no past shifts!</Typography>
        </Box>
      </TabPanel>
    </Box>
  );
}

export { MyShifts };
