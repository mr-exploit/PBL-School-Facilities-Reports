import {BrowserRouter, Routes, Route} from "react-router-dom";
// global
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import FormSekolah from "./pages/Admin/Sekolah";

// admin
import AddUser from "./pages/Admin/AddUser";
import EditUser from "./pages/Admin/EditUser";
import KerusakanValidasi from "./pages/Admin/KerusakanValidasi";
import PerbaikanValidasi from "./pages/Admin/PerbaikanValidasi";

// user
import AddSekolah from "./pages/User/AddSekolah";
import EditSekolah from "./pages/User/EditSekolah";


// Kerusakan
import KerusakanAdd from "./pages/User/AddKerusakan";
import EditKerusakan from "./pages/User/EditKerusakan";
import KerusakanList from "./pages/User/KerusakanList";


// perbaikan
import PerbaikanList from "./pages/User/PerbaikanList";
import EditPerbaikan from "./pages/User/EditPerbaikan";
import PerbaikanAdd from "./pages/User/AddPerbaikan";


// review Laporan
import ReviewLaporanKerusakan from "./pages/User/ReviewLaporanKerusakan";
import ReviewLaporanPerbaikan from "./pages/User/ReviewLaporanPerbaikan";
import ValidDetail from "./pages/Admin/ValidKerusakan"
import ValidDetil from "./pages/Admin/ValidFasilitas";



import 'antd/dist/antd.min.css';


function App() {
    return ( 
       <div>
        <BrowserRouter>
            <Routes>
                {/* Global */}
                <Route path="/" element={<Login/>} />
                <Route path="*" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />

                {/* Admin */}
                <Route path="/users/add" element={<AddUser />} />
                <Route path="/users/edit/:id" element={<EditUser />} />
                <Route path="/datasekolah" element={<FormSekolah/>} />
                <Route path="/laporan/kerusakan/validasi/:id" element={<KerusakanValidasi/>} />
                <Route path="/laporan/perbaikan/validasi/:id" element={<PerbaikanValidasi/>} />
                
                {/* User */}
                <Route path="/datasekolah/add" element={<AddSekolah/>} />
                <Route path="/datasekolah/edit/:id" element={<EditSekolah/>} />

                {/* KERUSAKAN */}
                <Route path="/laporan/kerusakan" element={<KerusakanList />} />
                <Route path="/laporan/kerusakan/add" element={<KerusakanAdd />} />
                <Route path="/laporan/kerusakan/edit/:id" element={<EditKerusakan />} />

                {/* REVIEW KERUSAKAN */}
                <Route path="/laporan/kerusakan/reviewlaporan" element={<ReviewLaporanKerusakan/>} />
                <Route path="/laporan/kerusakan/reviewlaporan/details/:id" element={<ValidDetail/>} />

                {/* FASILITAS */}
                <Route path="/laporan/fasilitas" element={<PerbaikanList />} />
                <Route path="/laporan/fasilitas/add" element={<PerbaikanAdd />} />
                <Route path="/laporan/fasilitas/edit/:id" element={<EditPerbaikan />} />

                {/* REVIEW FASILITAS */}
                <Route path="/laporan/fasilitas/reviewlaporan" element={<ReviewLaporanPerbaikan/>} />
                <Route path="/laporan/fasilitas/reviewlaporan/details/:id" element={<ValidDetil/>}/>
             
            </Routes>
        </BrowserRouter>
       </div>
    );
}

export default App;