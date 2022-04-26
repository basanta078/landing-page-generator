import { TextField } from "@mui/material"
import { useState } from "react";
import { useEditorContext } from "../../context/EditorContext";


type EditorProps = {
}


export function Editor({}: EditorProps){
  const {data, updateData}= useEditorContext();
  return (
    <TextField
      multiline
      sx={{
        width: '100%',
      }}
      value={data}
      onChange={e => {
        e.preventDefault();
        const value = e.target.value;
         updateData(value)
      }}
    />
  )
}