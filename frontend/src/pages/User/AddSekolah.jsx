import React, {useEffect} from 'react';
import Layout from '../Layout';
import FormAddSekolah from '../../components/user/FormAddSekolah';
import { useDispatch ,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const AddSekolah = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);

    useEffect(() =>{
      dispatch(getMe());
    }, [dispatch]);

    useEffect(() =>{
      if(isError){
        navigate("/");
      }
      if(user && user.role !=="user"){
        navigate("/datasekolah");
      }
    }, [isError, user, navigate]);

  return (
    <div>
        <Layout>
            <FormAddSekolah />
        </Layout>
    </div>
  )
}

export default AddSekolah;