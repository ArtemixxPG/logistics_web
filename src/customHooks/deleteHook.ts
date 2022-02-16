import * as React from "react";
import {useEffect, useState} from "react";

 export function useRemoveElementWithId(locationUrl, listObjects, id){

     const [updatedListObject, setUpdatedList] = useState([])

     useEffect( () => {
         async function remove(){
             await fetch(`localhost:8080/`+locationUrl+`/${id}`, {
                 method: 'DELETE',
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                 }
             }).then(() => {
                 setUpdatedList([...listObjects].filter(i => i.id !== id))

             })
         }
         }

     )
     return [updatedListObject]
 }

