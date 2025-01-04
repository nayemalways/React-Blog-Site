import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { postDetails } from '../APIrequest/ApiRequest.js';
import Loader from '../Components/Loader.jsx';
import BlogDetails from './../Components/BlogDetails';

const DetailsPage = () => {

    const {postId} = useParams();

      const [list, setList] = useState(null);
    
        // Request APi inside the useEffect( ) Hook
        useEffect(() => {

            (async () => {
                const res = await postDetails(postId);
                setList(res);
            })()

        }, [postId])
    

    return (
        <Layout>
             {
                list === null ? <Loader/>:<BlogDetails data={list}/>
             }
        </Layout>
    );
};

export default DetailsPage;