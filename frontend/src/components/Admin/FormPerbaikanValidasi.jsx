import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import url from "../url";


const FormPerbaikanValidasi = () => {
    const [validper, setvalidper] = useState("");
    const [ktrper, setktrper] = useState("");
    const [name, setusername] = useState("");
    const [judul, setjudulper] = useState("");
    const [desk, setdeskper] = useState("");
    const [alamat, setalamat] = useState("");
    const [nameSchool,  setNameSchool] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    
    useEffect(()=>{
        const getUserById = async () =>{
            try {
                const response = await axios.get(`${url}/perbaikan/${id}`);
                setvalidper(response.data.validasiper);
                setktrper(response.data.keteranganper);
                setusername(response.data.user.name);
                setjudulper(response.data.judulper);
                setdeskper(response.data.descper);
                setalamat(response.data.user.datasekolahs[0].alamat);
                setNameSchool(response.data.user.datasekolahs[0].nameScholl);

            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg);
                }
            }
        }
        getUserById();
    }, [id]);

    const UpdateValidasi = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("validper", validper);
        formData.append("ktrper", ktrper);
        try {
            await axios.patch(`${url}/perbaikan/validasi/${id}`,formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/laporan/fasilitas/reviewlaporan");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
       <h1 className="title">validasi Perbaikan</h1>
        <h2 className="subtitle">validasi</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <div className="field">
                        <label className="label">Penanggung Jawab</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Judul Perbaikan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={judul}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Deskripsi Perbaikan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={desk}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Alamat</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={alamat}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama Sekolah</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nameSchool}
                            />
                        </div>
                    </div>
                </div>
                <div className="content">
                <form onSubmit={UpdateValidasi}>
                <p className="has-text-center">{msg}</p>
                
                    <div className="field">
                        <label className="label">validasi</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={validper} onChange={(e)=> setvalidper(e.target.value)}>
                                    <option></option>
                                    <option value="diterima">diterima</option>
                                    <option value="ditolak">ditolak</option>
                                </select>
                            </div>  
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">keterangan</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={ktrper}
                            onChange={(e) => setktrper(e.target.value)}
                            placeholder='Name' />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success ">
                                Validasi
                            </button>    
                        </div>
                    </div>
                </form> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormPerbaikanValidasi;
