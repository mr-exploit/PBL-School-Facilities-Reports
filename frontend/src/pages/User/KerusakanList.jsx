import React, {useEffect} from 'react';
import Layout from '../Layout';
// import AddKerusakan from '../components/AddKerusakan';
import Kerusakanlist from '../../components/user/KerusakanList';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const KerusakanList = () => {
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
            <Kerusakanlist />
        </Layout>
    </div>
  )
}

export default KerusakanList;