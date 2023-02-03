import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import url from "../url";
import { format } from 'date-fns';

const PerbaikanList = () => {
    const [perbaikan, setPerbaikan] = useState([]);

    useEffect(() => {
        getPerbaikan();
    }, []);

    const { user } = useSelector((state) => state.auth);

    const getPerbaikan = async() =>{
        const response = await axios.get(`${url}/perbaikan`);
        setPerbaikan(response.data);
    }

    const deletePerbaikan = async(id) =>{
        try {
            await axios.delete(`${url}/perbaikan/${id}`);
            getPerbaikan();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <h1 className="title">Report Reviews Facilities</h1>
        <h2 className="subtitle">List of report Facilities...</h2>
        {/* user */}
        {user && user.role === "user" && (
          
          <div>
            <Link to="/laporan/fasilitas/add" className="button is-success mb-5 ml-5">Add New</Link>
            <table className='table is-striped is-fullwidth'>
                <thead> 
                    <tr >
                        <th>No</th>
                        <th>Date</th>
                        <th>Facilities Title</th>
                        <th>Description Facilities</th>
                        <th>responsible person</th>

                        <th >
                        <p className="ml-5">Action</p>
                          </th>
                    </tr>
                </thead>
                
                <tbody>
                  {perbaikan.map((Perbaikan, index) =>(
                    <tr key={Perbaikan.uuid}>

                        <td>{index + 1}</td>
                        <td>{format(new Date(Perbaikan.createdAt), 'yyyy-MM-dd')}</td>
                        <td>
                          <p><b>
                            {Perbaikan.judulper}
                          </b></p>
                        </td>
                        <td>
                          <p >
                            {Perbaikan.descper}
                          </p>
                        </td>
                        <td>
                          <p>
                            {Perbaikan.user.name}
                          </p>
                        </td>
                        {/* <td>
                            {Perbaikan.user.datasekolahs[0].nameScholl}
                        </td>
                        <td>
                            {Kerusakan.user.datasekolahs[0].alamat}
                        </td> */}
                        <td>
                          <Link to={`/laporan/fasilitas/edit/${Perbaikan.uuid}`} className="button is-small is-info mt-3 mr-3">Edit</Link>
                          <button onClick={()=> deletePerbaikan(Perbaikan.uuid) } className="button is-small mt-3 is-danger">Delete</button>
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
                        <th>Facilities Title</th>
                        <th>Description Facilities</th>
                        <th>responsible person</th>
                        <th>School Name</th>
                        <th>School Address</th>
                        <th >
                          <p className="ml-5">Action</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {perbaikan.map((Perbaikan, index) =>(
                    <tr key={Perbaikan.uuid}>
                        <td>{index + 1}</td>
                        <td>{format(new Date(Perbaikan.createdAt), 'yyyy-MM-dd')}</td>
                        <td>
                          <p><b>
                            {Perbaikan.judulper}
                          </b></p>
                        </td>
                        <td>
                          <p >
                            {Perbaikan.descper}
                          </p>
                        </td>
                        
                        <td>
                          <p>
                            {Perbaikan.user.name}
                          </p>
                        </td>
                        <td>
                            {Perbaikan.user.datasekolahs[0].nameScholl}
                        </td>
                        <td>
                            {Perbaikan.user.datasekolahs[0].alamat}
                        </td>
                        
                        <td>
                          <Link to={`/laporan/perbaikan/validasi/${Perbaikan.uuid}`} className="button is-small is-info mt-3 mr-3">Validasi Data</Link>
                          <button onClick={()=> deletePerbaikan(Perbaikan.uuid) } className="button is-small mt-3 is-danger">Delete</button>
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

export default PerbaikanList;