import {
  TextField,
  Box,
  Typography,
  Chip,
  ListItem,
  useTheme,
  ListItemButton,
  ListItemText,
  Grid2 as Grid,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { CheckCircle, CircleX } from "lucide-react";

type ChipData = {
  key: number;
  label: string;
};

const cities: ChipData[] = [
  { key: 1, label: "Los Angeles" },
  { key: 2, label: "Long Beach" },
  { key: 3, label: "Santa Clarita" },
  { key: 4, label: "Glendale" },
  { key: 5, label: "Lancaster" },
  { key: 6, label: "Palmdale" },
  { key: 7, label: "Pomona" },
  { key: 8, label: "Torrance" },
  { key: 9, label: "Pasadena" },
  { key: 10, label: "East Los Angeles CDP" },
  { key: 11, label: "Downey" },
  { key: 12, label: "West Covina" },
  { key: 13, label: "El Monte" },
  { key: 14, label: "Inglewood" },
  { key: 15, label: "Burbank" },
  { key: 16, label: "Norwalk" },
  { key: 17, label: "Compton" },
  { key: 18, label: "Carson" },
  { key: 19, label: "Santa Monica" },
  { key: 20, label: "South Gate" },
  { key: 21, label: "Hawthorne" },
  { key: 22, label: "Whittier" },
  { key: 23, label: "Alhambra" },
  { key: 24, label: "Lakewood" },
  { key: 25, label: "Bellflower" },
  { key: 26, label: "Baldwin Park" },
  { key: 27, label: "Redondo Beach" },
  { key: 28, label: "Lynwood" },
  { key: 29, label: "Montebello" },
  { key: 30, label: "Pico Rivera" },
  { key: 31, label: "Florence-Graham CDP" },
  { key: 32, label: "Monterey Park" },
  { key: 33, label: "Gardena" },
  { key: 34, label: "Arcadia" },
  { key: 35, label: "South Whittier CDP" },
  { key: 36, label: "Diamond Bar" },
  { key: 37, label: "Huntington Park" },
  { key: 38, label: "Hacienda Heights CDP" },
  { key: 39, label: "Paramount" },
  { key: 40, label: "Glendora" },
  { key: 41, label: "Covina" },
  { key: 42, label: "Rosemead" },
  { key: 43, label: "Azusa" },
  { key: 44, label: "Cerritos" },
  { key: 45, label: "Rowland Heights CDP" },
  { key: 46, label: "La Mirada" },
  { key: 47, label: "Altadena CDP" },
  { key: 48, label: "Rancho Palos Verdes" },
  { key: 49, label: "Culver City" },
  { key: 50, label: "San Gabriel" },
  { key: 51, label: "Bell Gardens" },
  { key: 52, label: "La Puente" },
  { key: 53, label: "Monrovia" },
  { key: 54, label: "Claremont" },
  { key: 55, label: "Temple City" },
  { key: 56, label: "West Hollywood" },
  { key: 57, label: "Manhattan Beach" },
  { key: 58, label: "San Dimas" },
  { key: 59, label: "Bell" },
  { key: 60, label: "Beverly Hills" },
  { key: 61, label: "Lawndale" },
  { key: 62, label: "La Verne" },
  { key: 63, label: "Walnut" },
  { key: 64, label: "South Pasadena" },
  { key: 65, label: "Maywood" },
  { key: 66, label: "San Fernando" },
  { key: 67, label: "Calabasas" },
  { key: 68, label: "Cudahy" },
  { key: 69, label: "Duarte" },
  { key: 70, label: "Lomita" },
  { key: 71, label: "La Cañada Flintridge" },
  { key: 72, label: "Agoura Hills" },
  { key: 73, label: "Hermosa Beach" },
  { key: 74, label: "South El Monte" },
  { key: 75, label: "Santa Fe Springs" },
  { key: 76, label: "El Segundo" },
  { key: 77, label: "Artesia" },
  { key: 78, label: "Hawaiian Gardens" },
  { key: 79, label: "Palos Verdes Estates" },
  { key: 80, label: "San Marino" },
  { key: 81, label: "Commerce" },
  { key: 82, label: "Signal Hill" },
  { key: 83, label: "Sierra Madre" },
  { key: 84, label: "Malibu" },
  { key: 85, label: "Rolling Hills Estates" },
  { key: 86, label: "Westlake Village" },
  { key: 87, label: "La Habra Heights" },
  { key: 88, label: "Avalon" },
  { key: 89, label: "Rolling Hills" },
  { key: 90, label: "Hidden Hills" },
  { key: 91, label: "Irwindale" },
  { key: 92, label: "Bradbury" },
  { key: 93, label: "Industry" },
  { key: 94, label: "Vernon" },
];

const Locations = () => {
  const theme = useTheme();
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(cities);
  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: 1, label: "Los Angeles" },
  ]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = cities.filter((city) =>
      city.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleSelect = (city: ChipData) => {
    setChipData((prev) => {
      return [...prev, city];
    });
  };

  return (
    <Box width={{ xs: "100%", md: "60%" }} margin="auto">
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Per diem work opportunities
      </Typography>
      <Typography variant="subtitle1" marginBottom={3}>
        In which areas would you like to work? Choose from the options below to
        secure per day opportunities. We've compiled a list of cities closest to
        you based on your zip code.
      </Typography>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", md: "center" }}
        mb={4}
      >
        <Grid size={{ xs: 12, md: 2 }}>
          <Typography variant="caption" gutterBottom noWrap>
            You've selected:
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
          <Box
            display="flex"
            py={{ xs: 0, md: 2 }}
            sx={{
              overscrollBehavior: "contain",
              overflowX: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {chipData
              .map((data, index) => {
                return (
                  <ListItem
                    key={data.key}
                    sx={{ padding: "0px 10px 0px 0px", width: "fit-content" }}
                  >
                    <Chip
                      variant="outlined"
                      label={data.label}
                      onDelete={index !== 0 ? handleDelete(data) : undefined}
                      disabled={index === 0}
                      deleteIcon={
                        <CircleX color={theme.palette.error.dark} size={15} />
                      }
                    />
                  </ListItem>
                );
              })
              .reverse()}
          </Box>
        </Grid>
      </Grid>
      <TextField
        id="city"
        label="City"
        variant="outlined"
        placeholder="Search for city"
        fullWidth
        onChange={handleInputChange}
        value={searchItem}
      />

      <Box
        height={400}
        minHeight={400}
        width="100%"
        bgcolor="background.paper"
        overflow="auto"
        paddingBottom={5}
        sx={{
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        {filteredUsers
          .sort((a, b) =>
            a.label > b.label ? 1 : a.label === b.label ? 0 : -1
          )
          .map((city) => {
            const disabled = !!chipData.filter(
              (data) => data.label === city.label
            ).length;
            return (
              <ListItem
                key={city.key}
                component="div"
                disablePadding
                secondaryAction={
                  disabled && <CheckCircle color={theme.palette.success.main} />
                }
              >
                <ListItemButton
                  onClick={() => handleSelect(city)}
                  disabled={disabled}
                >
                  <ListItemText primary={city.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </Box>
    </Box>
  );
};

export { Locations };
