import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
// import { UpdateValidasi } from '../../../../backend/controllers/ValidasiControl';
import url from "../url";

const FormEditUser = () => {
    const [valid, setvalid] = useState("");
    const [ktr, setktr] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getUserById = async () =>{
            try {
                const response = await axios.get(`${url}/validasi/${id}`);
                setvalid(response.data.validasi);
                setktr(response.data.keterangan);
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
        try {
            await axios.patch(`${url}/validasi/${id}`, {
                validasi: valid,
                keterangan: ktr
            });
            navigate("/laporan/reviewlaporan");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
       <h1 className="title">validasi</h1>
        <h2 className="subtitle">validasi</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={UpdateValidasi}>
                <p className="has-text-center">{msg}</p>
                    <div className="field">
                        <label className="label">validasi</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={valid} onChange={(e)=> setvalid(e.target.value)}>
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
                            value={ktr}
                            onChange={(e) => setktr(e.target.value)}
                            placeholder='Name' />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success ">
                                Update
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

export default FormEditUser;
