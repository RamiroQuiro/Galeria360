import { useState, useEffect } from "react";

export default function useItems(data) {
  const [items, setItems] = useState([]);

  useEffect(() => {
  //  if(Array.isArray(data)) {
  //    if(data.type=='delete'){
  //      setItems(items.map(element=>{
  //        if (data.src==element.src) {
  //          null
  //        }else{
  //          return element
  //        }
  //      }));
  //    }
  //    if(data.type=='add'){
  //      setItems([...items,data])
  //    }
  //   };

  if(Array.isArray(data)){
    setItems(data)
  }
  }, [data]);

  return [items];
}
