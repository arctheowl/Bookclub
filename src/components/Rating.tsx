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
    <div className="flex-col flex justify-center items-center text-center">
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
}
