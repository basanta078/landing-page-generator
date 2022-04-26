import { useState } from "react";
import { SectionComponents } from "../interfaces/sectionTypes";

type EditorProps = {
  data: string,
}

export type EditorData = {
  data: string,
  setData: React.Dispatch<React.SetStateAction<string>>
  components: SectionComponents[],
  isValid: boolean,
}
export function useEditor({data}: EditorProps): EditorData{
  const [state, setState] = useState(data);
  const components = getComponents(state);
  
  return {
    data: state,
    setData: setState,
    components,
    isValid: components.length > 0,
  };
}

function getComponents(data: string){
  try{
    const parsed = JSON.parse(data);
    
    let validComponents = [];
    for(let data of parsed){
      let component = getComponent(data);
        if (component){
          validComponents.push(component)
        }
      
    }
    return validComponents;
  }
  catch {}
  return [];
}

function getComponent(json: any){
  const data = json as SectionComponents;
  if (!data.type){
    return;
  }
  if (!data.type){
    return;
  }
  switch (data.type){
    case 'data':
      return validUrl(data.url)? data: undefined;
    case 'hero': 
      return validUrl(data.imageURI)? data: undefined;
    case 'image-text': {
      if (!data.text) return;
      if (!validUrl(data.imageUri)) return;
      return {
        ...data,
        leftToRight: data.leftToRight || true,
      }
    }
    default:
      return;
  }
}


function validUrl(url: string){
  //todo validate url
  return true;
}