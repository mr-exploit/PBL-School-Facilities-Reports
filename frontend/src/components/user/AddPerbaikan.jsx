import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from "../url";

const AddPerbaikan = () => {
    const [judul, setJudul] = useState("");
    const [deskripsi, setDes] = useState("");
    const navigate = useNavigate();


    const saveFasilitas = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("judul", judul);
        formData.append("desk", deskripsi);
        try {
            await axios.post(`${url}/perbaikan`, formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/laporan/fasilitas");
        } catch (error) {
            console.log(error);
        }
    };
    
  return (
    
        <div className="columns is-centered mt-5">
            <div className="column is-half">
                <form onSubmit={saveFasilitas}>
                    <div className="field">
                        <label className="label">Facilities Title</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={judul} 
                                onChange={(e) => setJudul(e.target.value)}
                                placeholder="Facilities Title" 
                            />
                        </div>
                    </div>

                    <div className="field mb-3">
                        <label className="label">Description Facilities</label>
                        <div className="control">
                        <textarea 
                       
                        type="text" 
                        className="input" 
                        value={deskripsi} 
                        onChange={(e) => setDes(e.target.value)}
                        placeholder="description  Facilities" 
                        >

                        </textarea>
                          
                        </div>
                    </div>
                
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    
  );
  
};


export default AddPerbaikan;
