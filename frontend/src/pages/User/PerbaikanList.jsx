import React, {useEffect} from 'react';
import Layout from '../Layout';
import Perbaikanlist from '../../components/user/ListPerbaikan';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const PerbaikanList = () => {
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
            <Perbaikanlist />
        </Layout>
    </div>
  )
}

export default PerbaikanList;