import { Box } from "@mui/material";
import { useEditorContext } from "../../context/EditorContext";
import DataComponent from "../data";
import Hero from "../hero";
import ImageTextComponent from "../imageText";

type LandinPageProps = {

};
export function LandingPage({}: LandinPageProps){

  const {isValid, components} = useEditorContext();

  if (!isValid){
    return <div>Invalid Data</div>
  }
  
  return (
    <Box>
      {components.map( (component, i) => {
      switch (component.type){
        case 'hero': 
          return <Hero {...component} key={i}/>
        case 'data':
          return <DataComponent {...component} key={i}/>
        case 'image-text':
          return <ImageTextComponent {...component} key={i}/>
      }  
    })}
    </Box>
  );
}