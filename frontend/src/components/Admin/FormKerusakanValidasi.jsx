import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import url from "../url";

const FormEditValidasi = () => {
    const [valid, setvalid] = useState("");
    const [ktr, setktr] = useState("");
    const [name, setusername] = useState("");
    const [judul, setjudul] = useState("");
    const [desc, setdesc] = useState("");
    const [alamat, setalamat] = useState("");
    const [nameScholl,  setNameScholl] = useState("");
    const [Npsn,  setNpsn] = useState("");
    const [pengelola,  setPengelolaan] = useState("");
    const [tingkatan, setTingkatan] = useState("");
    const [nohp,  setNohp] = useState("");
    const [kepsek,  setKepsek] = useState("");
    const [url_1, seturl1] = useState("");
    const [url_2, seturl2] = useState("");
    const [url_3, seturl3] = useState("");
    const [url_4,  seturl4] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getUserById = async () =>{
            try {
                const response = await axios.get(`${url}/validasi/${id}`);
                setvalid(response.data.validasi);
                setktr(response.data.keterangan);
                setusername(response.data.user.name);
                setjudul(response.data.judul);
                setdesc(response.data.desc);
                setNameScholl(response.data.user.datasekolahs[0].nameScholl);
                setNpsn(response.data.user.datasekolahs[0].npsn);
                setPengelolaan(response.data.user.datasekolahs[0].pengelolaan);
                setTingkatan(response.data.user.datasekolahs[0].tingkatan);
                setalamat(response.data.user.datasekolahs[0].alamat);
                setNohp(response.data.user.datasekolahs[0].noHp);
                setKepsek(response.data.user.datasekolahs[0].nameKs);
                seturl1(response.data.url_1);
                seturl2(response.data.url_2);
                seturl3(response.data.url_3);
                seturl4(response.data.url_4);
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
        formData.append("valid", valid);
        formData.append("ktr", ktr);
        try {
            await axios.patch(`${url}/validasi/${id}`,formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("laporan/kerusakan/reviewlaporan");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
       <h1 className="title">validasi Kerusakan</h1>
        <h2 className="subtitle">validasi</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <div className="field">
                        <label className="label">Penanggung jawab</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Judul Kerusakan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={judul}
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
                        <label className="label">Nama Sekolah</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nameScholl}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">NPSN</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={Npsn}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Pengelolaan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={pengelola}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Tingkatan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={tingkatan}
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
                        <label className="label">Nomor Hp</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={nohp}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Kepala Sekolah</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={kepsek}
                            />
                        </div>
                    </div>
                <div>
                    <h1 className="has-text-center">Gambar Kerusakan</h1>
                    <div className="columns">
                        <div className="column">
                                <img src={url_1} className=" image is-128x128 "
                                    alt="Image" 
                                    />
                        </div>
                        <div className="column">
                                    <img src={url_2} className=" image is-128x128 "
                                    alt="Image" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                                    <img src={url_3} className=" image is-128x128 "
                                    alt="Image" />
                        </div>
                        <div className="column">
                                <img src={url_4} className=" image is-128x128 "
                                alt="Image" />
                        </div>
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
                                <select value={valid} onChange={(e)=> setvalid(e.target.value)}>
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
                            value={ktr}
                            onChange={(e) => setktr(e.target.value)}
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

export default FormEditValidasi;
