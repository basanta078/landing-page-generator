import { Box } from "@mui/material";
import { HeroComponent } from "../../interfaces/sectionTypes";

type HeroProps = {

} & HeroComponent;

export function Hero({imageURI}: HeroProps){
  return (
    <Box sx={{
      py: 1,
      px:2,
    }}>
      <img
        src={imageURI}
        loading="lazy"
        height='200px'
      />
    </Box>
  )
}