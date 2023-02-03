import React, {useEffect} from 'react';
import Layout from '../Layout';
import FormAddKerusakan from '../components/user/FormAddKerusakan';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const KerusakanUser = () => {
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
            <FormAddKerusakan />
        </Layout>
    </div>
  )
}

export default KerusakanUser;