import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

interface IRatingProps {
  value: number | undefined;
}
export default function BasicRating({ value }: IRatingProps) {
  if (value === undefined) {
    return <></>;
  }
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
