import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import url from "../url";

const FormAddSekolah = () => {
    const [namescholl, setName] = useState("");
    const [Npsn, setNpsn] = useState("");
    const [pengelola, setKelola] = useState("");
    const [tingkatan, setTingkatan] = useState("");
    const [alamat, setAlamat] = useState("");
    const [nohp, setNoHp] = useState("");
    const [kepsek, setKepsek] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveData = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${url}/datasekolah`, {
                namescholl: namescholl,
                Npsn: Npsn,
                pengelola: pengelola,
                tingkatan: tingkatan,
                alamat: alamat,
                nohp: nohp ,
                kepsek: kepsek
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
       <h1 className="title">School Data</h1>
        <h2 className="subtitle">Add New Data...</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={saveData}>
                        <p className="has-text-center">{msg}</p>
                    <div className="field">
                        <label className="label">School Name</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={namescholl}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='School Name (example : SDN 001 Batu Aji)' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">NPSN</label>
                        <div className="control">
                            <input 
                            type="text" 
                            className="input" 
                            value={Npsn}
                            onChange={(e) => setNpsn(e.target.value)}
                            placeholder='NPSN (example : 012345678910)' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">school manager</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={pengelola} onChange={(e)=> setKelola
                                    (e.target.value)}>
                                <option></option>
                                <option value="private">Swasta (private School) </option>
                                <option value="public">Negeri (public School)</option>
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
                        <label className="label">School Address </label>
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
                            onChange={(e) => setNoHp(e.target.value)}
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
                            <button type="submit" className="button is-success ">
                                Save
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

export default FormAddSekolah
