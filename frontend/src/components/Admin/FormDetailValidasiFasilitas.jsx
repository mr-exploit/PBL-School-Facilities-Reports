import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import url from "../url";

const DetailValFasilitas = () =>{
    const [topik, settopik] = useState("");
    const [desc, setdesc] = useState("");
    const [name, setname] = useState("");
    const [validasi, setvalid] = useState("");
    const [keterangan, setket] = useState("");
    const [msg, setMsg] = useState("");
    const {id} = useParams();

    useEffect(()=>{
        const getUserById = async () =>{
            try {
                const response = await axios.get(`${url}/perbaikan/${id}`);
                settopik(response.data.judulper);
                setdesc(response.data.descper);
                setname(response.data.user.name);
                setvalid(response.data.validasiper);
                setket(response.data.keteranganper);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg);
                }
            }
        }
        getUserById();
    }, [id]);

    return (
        <div>
            <h1 className="title">Detail Validasi Fasilitas</h1>
            <h2 className="subtitle">Review Validasi</h2>
            <h2 value={msg}></h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="field">
                        <label className="label">Topik Kerusakan</label>
                        <div className="control">
                            <input 
                                type="text"
                                className="input"
                                value={topik} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Deskripsi Kerusakan</label>
                        <div className="control">
                            <input 
                                type="text"
                                className="input"
                                value={desc} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Created By</label>
                        <div className="control">
                            <input 
                                type="text"
                                className="input"
                                value={name} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Status Validasi</label>
                        <div className="control">
                            <input 
                                type="text"
                                className="input"
                                value={validasi} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Keterangan Validasi</label>
                        <div className="control">
                            <input 
                                type="text"
                                className="input"
                                value={keterangan} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <Link to={`/laporan/fasilitas/reviewlaporan`} className="button is-small is-info mr-3">Kembali</Link>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailValFasilitas;