import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import url from "../url";
import { format } from 'date-fns'

const FormSekolah = () => {
    const [list_sekolah, setDatasekolah] = useState([]);

  useEffect(()=>{
    getDataSekolah();
  },[]);
  
  const { user } = useSelector((state) => state.auth);

  const getDataSekolah = async () =>{
      const response = await axios.get(`${url}/datasekolah`);
      setDatasekolah(response.data);
  };

  const deleteUser = async (id) =>{ //userId
      await axios.delete(`${url}/datasekolah/${id}`);//{userId}
      getDataSekolah();
  };
//   const date = console.log(format({DataSekolah.createdAt}), 'dd/mm/yyyy')
  return (
    <div>
        {/* User */}
        {user && user.role === "user" && (
        <div >
            <h1 className="title">School Data </h1>
            <h2 className="subtitle">List of schools...</h2>
            <h2 className="subtitle has-text-danger">School data is only added once</h2>

            <Link to="/datasekolah/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Name School</th>
                        <th>NPSN</th>
                        <th>Responsible Person</th>
                        <th>IT School</th>
                        <th>Level School</th>
                        <th>School Address</th>
                        <th>School Number</th>
                        <th>Principal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list_sekolah.map((DataSekolah, index) => (
                    <tr key={DataSekolah.uuid}>
                        <td>{index+1}</td>
                        <td>{format(new Date(DataSekolah.createdAt), 'yyyy-MM-dd')}</td>
                        <td>{DataSekolah.nameScholl}</td>
                        <td>{DataSekolah.npsn}</td>
                        <td>{DataSekolah.user.name}</td>
                        <td>{DataSekolah.pengelolaan}</td>
                        <td>{DataSekolah.tingkatan}</td>
                        <td>{DataSekolah.alamat}</td>
                        <td>{DataSekolah.noHp}</td>
                        <td>{DataSekolah.nameKs}</td>
                        <td>
                        <Link to={`/datasekolah/edit/${DataSekolah.uuid}`} className="button is-small is-info mr-3">Edit</Link>
                        <button onClick={()=> deleteUser(DataSekolah.uuid) } className="button is-small is-danger">Delete</button>
                        </td>   
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
            
        )}

        {/* Admin */}
        {user && user.role === "admin" && (
        <div className="mt-3">
             <h1 className="title">School Data </h1>
            <h2 className="subtitle">List of schools...</h2>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                    <th>No</th>
                        <th>date</th>
                        <th>Name School</th>
                        <th>NPSN</th>
                        <th>Responsible Person</th>
                        <th>IT School</th>
                        <th>Level School</th>
                        <th>School Address</th>
                        <th>School Number</th>
                        <th>Principal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list_sekolah.map((DataSekolah, index) => (
                    <tr key={DataSekolah.uuid}>
                        <td>{index+1}</td>
                        <td>{format(new Date(DataSekolah.createdAt), 'yyyy-MM-dd')}</td>
                        <td>{DataSekolah.nameScholl}</td>
                        <td>{DataSekolah.npsn}</td>
                        <td>{DataSekolah.user.name}</td>
                        <td>{DataSekolah.pengelolaan}</td>
                        <td>{DataSekolah.tingkatan}</td>
                        <td>{DataSekolah.alamat}</td>
                        <td>{DataSekolah.noHp}</td>
                        <td>{DataSekolah.nameKs}</td>
                        <td>
                        {/* <Link to={`/datasekolah/edit/${DataSekolah.uuid}`} className="button is-small is-info mr-3">Edit</Link> */}
                        <button onClick={()=> deleteUser(DataSekolah.uuid) } className="button is-small is-danger">Delete</button>
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

export default FormSekolah;