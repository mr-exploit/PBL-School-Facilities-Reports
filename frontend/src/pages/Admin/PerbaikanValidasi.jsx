import React, {useEffect} from 'react';
import Layout from '../Layout';
import FormPerbaikanValidasi from '../../components/Admin/FormPerbaikanValidasi';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const PerbaikanValidasi = () => {
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
      if(user && user.role !=="admin"){
        navigate("/dashboard");
      }
    }, [isError, user, navigate]);

  return (
    <div>
        <Layout>
            <FormPerbaikanValidasi  />
        </Layout>
    </div>
  )
}

export default PerbaikanValidasi;