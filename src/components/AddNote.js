import React,{useState,useContext} from 'react'
import noteContext from '../context/notes/noteContext'
const AddNote = ({setLoggedIn}) => {
    const context = useContext(noteContext);
    const {addNote}= context;
    const [note,setNote] = useState({title: "", description:"",tag:""})

  
    const handleClick=(e)=>{
        e.preventDefault();
addNote(note.title,note.description,note.tag);
setNote({title: "", description:"",tag:""})
    }

    const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
    }

    return (
        <div className='container my-3'>
            <h1> Disaster-Tracker </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">NAME OF OF THE PLACE</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title}
                     onChange={onChange} />
                   </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">DESCRIPTION</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">DISASTER TYPE</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <button disabled={note.title.length < 5 || note.description.length <5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
