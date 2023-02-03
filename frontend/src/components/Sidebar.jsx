import React,{ useState } from "react";
import {useNavigate} from "react-router-dom";
import { Button, Menu} from 'antd';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.min.css';
import { HomeOutlined, 
  UserAddOutlined, 
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SnippetsOutlined,
  ContactsOutlined
} from '@ant-design/icons';


const Sidebar = () => {
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  return (
    <div>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
       
       
      <Menu
      onClick={({key}) =>{
            
        if(key === "signout"){
            // Todo, sign out feature
        } else{
            navigate(key);
        }
        }}
        style={{
          marginBottom: 16,
          
        }}
      mode="inline"
      defaultOpenKeys={["/"]}
      
      inlineCollapsed={collapsed}
        items={[
          
          {label: "Dashboard", icon: <HomeOutlined />, key: "/dashboard"},
          
          {label: "Report", icon:<SnippetsOutlined/>,  children : [
            {label: "Kerusakan", key: "/laporan/kerusakan"},
            // user && user.role === "user" && 
            {label: "Review Kerusakan", key: "/laporan/kerusakan/reviewlaporan"},
            // user && user.role === "admin" && 
            {label: "facilities", key: "/laporan/fasilitas"},
            // {label: "Perbaikan", key: "/laporan/perbaikan"},
            {label: "Review facilities", key: "/laporan/fasilitas/reviewlaporan"},
            
          ],
        },
        user && user.role === "user" &&
        {label: "school data", icon:<ContactsOutlined />, key: "/datasekolah" },
        user && user.role === "admin" &&
        {label: "school data", icon:<ContactsOutlined />, key: "/datasekolah" },
        user && user.role === "admin" &&
        {label: "Users",icon:<UserAddOutlined />, key: "/users"},

        ]}
      ></Menu>
      
    
    </div>
  );
};

export default Sidebar;