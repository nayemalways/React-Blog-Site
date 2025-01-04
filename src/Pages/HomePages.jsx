import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import BlogLIst from '../Components/BlogLIst';
import { postNewest } from '../APIrequest/ApiRequest.js';

const HomePages = () => {

    const [newestPost, setNewestPost] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await postNewest();
            setNewestPost(res);
        })()
    }, [])



    return (
        <Layout>
             <BlogLIst data={newestPost} />
        </Layout>
    );
};

export default HomePages;