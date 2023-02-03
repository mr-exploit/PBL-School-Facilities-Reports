import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import url from "../url";
import { format } from 'date-fns';

const KerusakanList = () => {
    const [kerusakan, setKerusakan] = useState([]);

    useEffect(() => {
        getKerusakan();
    }, []);

    const { user } = useSelector((state) => state.auth);

    const getKerusakan = async() =>{
        const response = await axios.get(`${url}/kerusakan`);
        setKerusakan(response.data);
    }

    const deleteKerusakan = async(id) =>{
        try {
            await axios.delete(`${url}/kerusakan/${id}`);
            getKerusakan();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <h1 className="title">Review Laporan Kerusakan</h1>
        <h2 className="subtitle">List of laporan Kerusakan...</h2>
        {/* user */}
        {user && user.role === "user" && (
          
          <div>
            <Link to="/laporan/kerusakan/add" className="button is-success mb-5 ml-5">Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead> 
                    <tr >
                        <th>No</th>
                        <th>Date</th>
                        <th>Title Kerusakan</th>
                        <th>Description Kerusakan</th>
                        <th>responsible person</th>
                        <th>Image</th>
                        <th  >
                        <p className="ml-5">Action</p>
                          </th>
                    </tr>
                </thead>
                
                <tbody>
                  {kerusakan.map((Kerusakan, index) =>(
                    <tr key={Kerusakan.uuid}>

                        <td>{index + 1}</td>
                        <td>{format(new Date(Kerusakan.createdAt), 'yyyy-MM-dd')}</td>
                        <td>
                          <p>
                            <b>{Kerusakan.judul}</b>
                          </p>
                        </td>
                        <td>
                          <p >
                            {Kerusakan.desc}
                          </p>
                        </td>
                        <td>
                          <p>
                            {Kerusakan.user.name}
                          </p>
                        </td>
                        {/* <td>
                            {Kerusakan.user.datasekolahs[0].nameScholl}
                        </td>
                        <td>
                            {Kerusakan.user.datasekolahs[0].alamat}
                        </td> */}
                        <td >
                          <div className="columns">
                            <img src={Kerusakan.url_1} className=" image is-48x48 column"
                                alt="Image" 
                                />
                                <img src={Kerusakan.url_2} className=" image is-48x48 column"
                                alt="Image" 
                                /> 
                          </div>
                          <div className="columns">
                          <img src={Kerusakan.url_3} className=" image is-48x48 column"
                                alt="Image" 
                                />
                                <img src={Kerusakan.url_4} className=" image is-48x48 column"
                                alt="Image" 
                                />    
                          </div>
                        </td>
                        <td>
                          <Link to={`/laporan/kerusakan/edit/${Kerusakan.uuid}`} className="button is-small is-info mt-3 mr-3">Edit</Link>
                          <button onClick={()=> deleteKerusakan(Kerusakan.uuid) } className="button is-small mt-3 is-danger">Delete</button>
                        </td>   
                    </tr>
                  ))}
                </tbody>
            </table> 
          </div>
        )}

        {/* Admin */}
        {user && user.role === "admin" && (
          <div>
            <table className='table is-striped is-fullwidth'>
                <thead> 
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Title Kerusakan</th>
                        <th>Description Kerusakan</th>
                        <th>responsible person</th>
                        <th>Name School</th>
                        <th>Address School</th>
                        <th>Image</th>
                        <th >
                          <p className="ml-5">Action</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {kerusakan.map((Kerusakan, index) =>(
                    <tr key={Kerusakan.uuid}>
                        <td>{index + 1}</td>
                        <td>{format(new Date(Kerusakan.createdAt), 'yyyy-MM-dd')}</td>
                        <td>
                          <p>
                            <b>{Kerusakan.judul}</b>
                          </p>
                        </td>
                        <td>
                          <p >
                            {Kerusakan.desc}
                          </p>
                        </td>
                        
                        <td>
                          <p>
                            {Kerusakan.user.name}
                          </p>
                        </td>
                        <td>
                            {Kerusakan.user.datasekolahs[0].nameScholl}
                        </td>
                        <td>
                            {Kerusakan.user.datasekolahs[0].alamat}
                        </td>
                        <td > 
                          <div className="columns">
                            <img src={Kerusakan.url_1} className=" image is-48x48 column"
                                alt="Image" 
                                />
                                <img src={Kerusakan.url_2} className=" image is-48x48 column"
                                alt="Image" 
                                /> 
                          </div>
                          <div className="columns">
                          <img src={Kerusakan.url_3} className=" image is-48x48 column"
                                alt="Image" 
                                />
                                <img src={Kerusakan.url_4} className=" image is-48x48 column"
                                alt="Image" 
                                />    
                          </div>
                        </td>
                        <td>
                          <Link to={`/laporan/kerusakan/validasi/${Kerusakan.uuid}`} className="button is-small is-info mt-3 mr-3">Validasi Data</Link>
                          <button onClick={()=> deleteKerusakan(Kerusakan.uuid) } className="button is-small mt-3 is-danger">Delete</button>
                        </td>   
                    </tr>
                  ))}
                </tbody>
            </table> 
          </div>
        )}
  </div>
  )
}

export default KerusakanList;