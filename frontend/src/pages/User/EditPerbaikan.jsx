import React, {useEffect} from 'react';
import Layout from '../Layout';
// import AddKerusakan from '../components/AddKerusakan';
import Editperbaikan from '../../components/user/FormEditPerbaikan';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const EditPerbaikan = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() =>{
      dispatch(getMe());
    }, [dispatch]);

    useEffect(() =>{
      if(isError){
        navigate("/");
      }
    }, [isError, navigate]);

  return (
    <div>
        <Layout>
            <Editperbaikan/>
        </Layout>
    </div>
  )
}

export default EditPerbaikan;