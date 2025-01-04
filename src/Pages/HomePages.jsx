import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import BlogLIst from '../Components/BlogLIst';
import { postNewest } from '../APIrequest/ApiRequest.js';
import Loader from '../Components/Loader.jsx';

const HomePages = () => {


    const [newestPost, setNewestPost] = useState(null);

    // Request APi inside the useEffect( ) Hook
    useEffect(() => {
        (async () => {
            const res = await postNewest();
            setNewestPost(res);
        })()
    }, [])



    return (
        <Layout>
            {
                newestPost === null ? <Loader />: <BlogLIst data={newestPost} />
            }
             
        </Layout>
    );
};

export default HomePages;