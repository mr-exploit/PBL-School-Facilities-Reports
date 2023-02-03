import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import url from "../url";

const EditPerbaikan = () => {
    const [titleper, setTitleper] = useState("");
    const [deskripsiper, setDesper] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getPerbaikanById();
    },[]);

    const getPerbaikanById = async () =>{
        const response = await axios.get(`${url}/perbaikan/${id}`);
        setTitleper(response.data.judulper);
        setDesper(response.data.descper);
    }

    const updatePerbaikan = async(e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append("judul", titleper);
        formData.append("desk", deskripsiper);
        try {
            await axios.patch(`${url}/perbaikan/${id}`, formData,{
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
                <form onSubmit={updatePerbaikan}>
                    <div className="field">
                        <label className="label">Judul Fasilitas</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={titleper} 
                                onChange={(e) => setTitleper(e.target.value)}
                                placeholder="Perbaikan Name" 
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Deskripsi Fasilitas</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={deskripsiper} 
                                onChange={(e) => setDesper(e.target.value)}
                                placeholder="Perbaikan Name" 
                            />
                        </div>
                    </div>
                    
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success mt-3">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    
  );
  
};


export default EditPerbaikan;
