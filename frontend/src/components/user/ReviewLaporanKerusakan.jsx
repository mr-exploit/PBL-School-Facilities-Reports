import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import url from "../url";
import { format } from 'date-fns';

const ReviewLaporan = () => {
  const [review, setReview] = useState([]);

  useEffect(()=>{
    getReview();
  },[]);

  const { user } = useSelector((state) => state.auth);

  const getReview = async() =>{
    const response = await axios.get(`${url}/kerusakan`);
    setReview(response.data);
}

  return (
    <div>
      <h1 className="title">Review Laporan Kerusakan</h1>
        <h2 className="subtitle">List of laporan...</h2>
        {user && user.role === "user" && (
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Topik Kerusakan</th>
                    <th>Deskripsi Kerusakan</th>
                    <th>Created By</th>
                    <th>validation state</th>
                    <th>Validation Description</th>
                    <th>Action</th>
                </tr>
          </thead>
            <tbody>
              {review.map((Kerusakan, index) =>(
                <tr key={Kerusakan.uuid}>
                    <td>{index + 1}</td>
                    <td>{format(new Date(Kerusakan.createdAt), 'yyyy-MM-dd')}</td>
                    <td><b>{Kerusakan.judul}</b></td>
                    <td>{Kerusakan.desc}</td>
                    <td>{Kerusakan.user.name}</td>
                    <td>{Kerusakan.validasi}</td>
                    <td>{Kerusakan.keterangan}</td>
                    <td>
                    {user && Kerusakan.validasi === "ditolak" &&
                    <Link to={`/laporan/kerusakan/edit/${Kerusakan.uuid}`} className="button is-small is-info mr-3">Edit Kerusakan</Link>
                    }
                    
                      <Link to={`/laporan/kerusakan/reviewlaporan/details/${Kerusakan.uuid}`} className="button is-small has-background-success is-info ">Details Validasi</Link>
                    </td>
                </tr>
              ))}
            </tbody>
        </table> 
        )}


        {user && user.role === "admin" &&(
          <table className='table is-striped is-fullwidth'>
          <thead>
              <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>Topik Kerusakan</th>
                  <th>Deskripsi Kerusakan</th>
                  <th>Created By</th>
                  <th>validation state</th>
                  <th>Validation Description</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
            {review.map((Kerusakan, index) =>(
              <tr key={Kerusakan.uuid}>
                <td>{index + 1}</td>
                <td>{format(new Date(Kerusakan.createdAt), 'yyyy-MM-dd')}</td>
                <td><b>{Kerusakan.judul}</b></td>
                <td>{Kerusakan.desc}</td>
                <td>{Kerusakan.user.name}</td>
                <td>{Kerusakan.validasi}</td>
                <td>{Kerusakan.keterangan}</td>
                <td>
                    <Link to={`/laporan/kerusakan/reviewlaporan/details/${Kerusakan.uuid}`} className="button is-small is-info mr-3">Details Validasi</Link>
       
                </td> 
              </tr>
            ))}
          </tbody>
      </table>
        )}
    </div>
  )
}

export default ReviewLaporan;