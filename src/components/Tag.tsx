import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface IChipProps {
  Tag: string;
}
export default function BasicChips({ Tag }: IChipProps) {
  return (
      <Chip label={`${Tag}`} variant="outlined" />
  );
}
