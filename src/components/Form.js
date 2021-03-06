import React, {useState} from "react";
import {addCard} from '../utils/Array';
import Status from "../utils/Status";

const Form = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState(Status.TODO);

    const handleSubmit = (e) => {
        e.preventDefault();
        addCard(title, desc, status);
        alert("Card is added.");
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" name="title" value={title} className="form-control" id="exampleFormControlInput1"
                       placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" value={desc} id="exampleFormControlTextarea1" rows="3"
                          placeholder="Description" onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default Form