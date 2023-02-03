import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import url from "../url";

const FormEditSekolah = () => {
    const [nameScholl,  setNameScholl] = useState("");
    const [Npsn, setNpsn] = useState("");
    const [pengelola, setpengelolaan] = useState("");
    const [tingkatan, setTingkatan] = useState("");
    const [alamat, setAlamat] = useState("");
    const [nohp,  setNohp] = useState("");
    const [kepsek,  setKepsek] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    
    useEffect(()=>{
        const getUserById = async () =>{
            try {
                const response = await axios.get(`${url}/datasekolah/${id}`);
                setNameScholl(response.data.nameScholl);
                setNpsn(response.data.npsn);
                setpengelolaan(response.data.pengelolaan);
                setTingkatan(response.data.tingkatan);
                setAlamat(response.data.alamat);
                setNohp(response.data.noHp);
                setKepsek(response.data.nameKs);

 
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
        formData.append("namescholl", nameScholl);
        formData.append("Npsn", Npsn);
        formData.append("pengelola", pengelola);
        formData.append("tingkatan", tingkatan);
        formData.append("alamat", alamat);
        formData.append("nohp", nohp);
        formData.append("kepsek", kepsek);
        try {
            await axios.patch(`${url}/datasekolah/${id}`,formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/datasekolah");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
       <h1 className="title mt-5">Edit School Data</h1>

        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={UpdateValidasi}>
                <p className="has-text-center">{msg}</p>
                    <div className="field">
                        <label className="label">School Name</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={nameScholl} 
                            onChange={(e)=> setNameScholl(e.target.value)}
                            placeholder='NameSchool Name (example : SDN 001 Batu Aji)' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">NPSN</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={Npsn} 
                            onChange={(e)=> setNpsn(e.target.value)}
                            placeholder='NPSN (example : 012345678910)' />
                        </div>
                    </div>
                    {/* <div className="field">
                        <label className="label">Nama Sekolah</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={nameScholl} 
                            onChange={(e)=> setNameScholl(e.target.value)}
                            placeholder='Name' />
                        </div>
                    </div> */}
                    <div className="field">
                        <label className="label">school manager</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={pengelola} onChange={(e)=> setpengelolaan(e.target.value)}>
                                <option></option>
                                <option value="private">Private</option>
                                <option value="country">Country</option>
                                </select>
                            </div> 
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Level School</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={tingkatan} onChange={(e)=> setTingkatan
                                    (e.target.value)}>
                                <option></option>
                                <option value="TK">TK</option>
                                <option value="SD">SD</option>
                                <option value="SMP">SMP</option>
                                </select>
                            </div> 
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">School Address</label>
                        <div className="control">
                            <input 
                            type="text" 
                            
                            className="input"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)} 
                            placeholder='School Address (example : perumahan Bumi indah batu aji, indah)' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">school number</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={nohp}
                            onChange={(e) => setNohp(e.target.value)}
                            placeholder='school number (example : 08126122231)' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">principal</label>
                        <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            value={kepsek}
                            onChange={(e) => setKepsek(e.target.value)}
                            placeholder='principal ( example : bapak wahyudi ) ' />
                            
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success mt-3">
                                Update School Data
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

export default FormEditSekolah;
