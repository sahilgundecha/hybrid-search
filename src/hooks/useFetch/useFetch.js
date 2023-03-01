import { useState } from "react";

export const useFetch=(url,query)=>{
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  if(url){
    if(Object.keys(query).length!=0){
        
    }
  }
}