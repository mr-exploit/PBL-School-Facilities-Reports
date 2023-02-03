import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import url from "../url";

const EditKerusakan = () => {
    const [title, setTitle] = useState("");
    const [deskripsi, setDes] = useState("");
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const [file3, setFile3] = useState("");
    const [file4, setFile4] = useState("");
    const [preview1, setPreview1] = useState("");
    const [preview2, setPreview2] = useState("");
    const [preview3, setPreview3] = useState("");
    const [preview4, setPreview4] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductsById();
    },[]);

    const getProductsById = async () =>{
        const response = await axios.get(`${url}/kerusakan/${id}`);
        setTitle(response.data.judul);
        setDes(response.data.desc);
        
        // setfile
        setFile1(response.data.image_1);
        setFile2(response.data.image_2);
        setFile3(response.data.image_3);
        setFile4(response.data.image_4);

        setPreview1(response.data.url_1);
        setPreview2(response.data.url_2);
        setPreview3(response.data.url_3);
        setPreview4(response.data.url_4);
    }
    // loadimage
    const loadImage1 = (e) =>{
        const image = e.target.files[0];
        setFile1(image);
        setPreview1(URL.createObjectURL(image));
    };
    const loadImage2 = (e) =>{
        const image = e.target.files[0];
        setFile2(image);
        setPreview2(URL.createObjectURL(image));
    };
    const loadImage3 = (e) =>{
        const image = e.target.files[0];
        setFile3(image);
        setPreview3(URL.createObjectURL(image));
    };
    const loadImage4 = (e) =>{
        const image = e.target.files[0];
        setFile4(image);
        setPreview4(URL.createObjectURL(image));
    };

    const updateProduct = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file1", file1);
        formData.append("file2", file2);
        formData.append("file3", file3);
        formData.append("file4", file4);
        formData.append("title", title);
        formData.append("deskripsi", deskripsi);
        try {
            await axios.patch(`${url}/kerusakan/${id}`, formData,{
                headers:{
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/laporan/kerusakan");
        } catch (error) {
            console.log(error);
        }
    };

    
  return (
    
        <div className="columns is-centered mt-5">
            <div className="column is-half">
                <form onSubmit={updateProduct}>
                    <div className="field">
                        <label className="label">Judul Kerusakan</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Product Name" 
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Deskripsi Kerusakan</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={deskripsi} 
                                onChange={(e) => setDes(e.target.value)}
                                placeholder="Product Name" 
                            />
                        </div>
                    </div>
                    
                    <div className="columns">
                        {/* Gambar 1 */}
                        <div className="field column">
                            <label className="label">Image_1</label>
                            <div className="control">
                                <div className="file">
                                    <label className="file-label">
                                        <input 
                                            type="file" 
                                            className="file-input"
                                            onChange={loadImage1}
                                        />
                                        <span className="file-cta">
                                            <span className="file-label">Choose a file...</span>

                                        </span>
                                    </label>
                                </div>
                            </div>
                            {preview1 ?(
                                <figure className="image is-128x128 mt-5">
                                    <img src={preview1} alt="Preview Image" />
                                </figure>
                            ): (
                                ""
                            )}
                        </div>
                        {/* Gambar 2 */}
                        <div className="field column">
                                <label className="label ">Image_2</label>
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input 
                                                type="file" 
                                                className="file-input" 
                                                onChange={loadImage2}
                                            />
                                            <span className="file-cta">
                                                <span className="file-label">Choose a file...</span>

                                            </span>
                                        </label>
                                    </div>
                                    {preview2 ?(
                                    <figure className="image is-128x128 mt-5">
                                        <img src={preview2} alt="Preview Image" />
                                    </figure>
                                    ): (
                                        ""
                                    )}
                        </div>    
                    </div>

                            {/* Gambar 3 */}
                            <div className="field column">
                                <label className="label ">Image 3</label>
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input 
                                                type="file" 
                                                className="file-input" 
                                                onChange={loadImage3}
                                            />
                                            <span className="file-cta">
                                                <span className="file-label">Choose a file...</span>

                                            </span>
                                        </label>
                                    </div>
                                </div>
                                {preview3 ?(
                                    <figure className="image is-128x128 mt-5">
                                        <img src={preview3} alt="Preview Image" />
                                    </figure>
                                ): (
                                    ""
                                )}    
                            </div>
                            {/* Gambar 4 */}
                            <div className="field column">
                                <label className="label">Image 4</label>
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input 
                                                type="file" 
                                                className="file-input" 
                                                onChange={loadImage4}
                                            />
                                            <span className="file-cta">
                                                <span className="file-label">Choose a file...</span>

                                            </span>
                                        </label>
                                    </div>
                                </div>
                                {preview4 ?(
                                    <figure className="image is-128x128 mt-5">
                                        <img src={preview4} alt="Preview Image" />
                                    </figure>
                                ): (
                                    ""
                                )}
                            </div>
                        </div>
                    
                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-success mt-3">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    
  );
  
};


export default EditKerusakan;
