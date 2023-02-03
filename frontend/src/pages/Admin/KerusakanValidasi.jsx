import React, {useEffect} from 'react';
import Layout from '../Layout';
import FormKerusakanValidasi from '../../components/Admin/FormKerusakanValidasi';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const KerusakanValidasi = () => {
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
            <FormKerusakanValidasi  />
        </Layout>
    </div>
  )
}

export default KerusakanValidasi;