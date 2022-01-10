import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";



const NoteState=(props)=>{
const host = "http://localhost:5000"

  const notesInitial =[]
const [notes,setNotes]=useState(notesInitial)

// Get notes
const getNotes = async (title,description,tag)=>{
  //api call
  const response= await fetch(`${host}/api/notes/fetchallnotes`,{
    method: 'GET',
    headers:{
      'Content-Type':'application/json',
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNTcwNjAzN2JkY2U3Njc4NmFlMjAzIn0sImlhdCI6MTY0MTM3ODE4MH0.gGHF53T4NFEdVuUYwanqU5E7DBvQLqRb_C--3yXOznY"
    }
  });
  const json = await response.json();
  console.log(json)
  setNotes(json)
  }
//Add
const addNote= async (title,description,tag)=>{
  //api call
  const response= await fetch(`${host}/api/notes/addnote`,{
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNTcwNjAzN2JkY2U3Njc4NmFlMjAzIn0sImlhdCI6MTY0MTM3ODE4MH0.gGHF53T4NFEdVuUYwanqU5E7DBvQLqRb_C--3yXOznY"
    },
    body: JSON.stringify({title,description,tag})
  });
  const note = await response.json();
  setNotes(notes.concat(note))

}
//Delete
const deleteNote= async (id)=>{
  const response= await fetch(`${host}/api/notes/deletenote/${id}`,{
    method: 'DELETE',
    headers:{
      'Content-Type':'application/json',
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNTcwNjAzN2JkY2U3Njc4NmFlMjAzIn0sImlhdCI6MTY0MTM3ODE4MH0.gGHF53T4NFEdVuUYwanqU5E7DBvQLqRb_C--3yXOznY"
    },
  });
  const json = response.json();
  //console.log(json)
  //api call
//console.log("Deleting"+id)
const newNotes= notes.filter((note)=>{ return note._id!==id})
setNotes(newNotes)
}
//Edit 

const editNote= async (id, title , description, tag)=>{
 // api call
const response= await fetch(`${host}/api/notes/updatenote/${id}`,{
  method: 'PUT',
  headers:{
    'Content-Type':'application/json',
    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkNTcwNjAzN2JkY2U3Njc4NmFlMjAzIn0sImlhdCI6MTY0MTM3ODE4MH0.gGHF53T4NFEdVuUYwanqU5E7DBvQLqRb_C--3yXOznY"
  },
  body: JSON.stringify({title,description,tag})
});
const json = await  response.json();

let newNotes = JSON.parse(JSON.stringify(notes))
  //logic to edit 
for (let index = 0; index < newNotes.length; index++) {
  const element = newNotes[index];
  if(element._id===id)
  {
    newNotes[index].title=title;
    newNotes[index].description=description;
    newNotes[index].tag=tag;
  
    break;
  }

}
setNotes(newNotes);

}


  return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;

