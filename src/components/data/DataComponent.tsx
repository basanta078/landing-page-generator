
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Data } from "../../interfaces/sectionTypes";

type DataProps = {

} & Data;

export function DataComponent({url}: DataProps){
  const [data, setData] = useState<string>();
  useEffect(()=> {
    async function fetchData(){
      try{
        const response = await fetch(url);
        if (response && response.ok){
          const result = await response.json();
          setData(JSON.stringify(result));
        }

      }
      catch {}
    }
    fetchData();
  }, [url])
  return (
    <Box sx={{
      py: 1,
      px:2,
    }}>
      <Button>Refresh</Button>
        <Box>
        {data}
        </Box>
    </Box>
  )
}