
import { Box } from "@mui/material";
import { ImageText } from "../../interfaces/sectionTypes";

type ImageTextProps = {

} & ImageText;

export function ImageTextComponent({text, imageUri, title, leftToRight}: ImageTextProps){
  return (
    <Box sx={{
      py: 1,
      px:2,
    }}>
      <Box>
        <img
          src={imageUri}
          loading="lazy"
        />
      </Box>
      <Box>
        {title}
        {text}
      </Box>
      
    </Box>
  )
}