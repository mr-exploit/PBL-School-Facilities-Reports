import React, {useEffect} from 'react';
import Layout from '../Layout';
import AddKerusakan from '../components/AddKerusakan';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const Kerusakan = () => {
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
            <AddKerusakan />
        </Layout>
    </div>
  )
}

export default Kerusakan;