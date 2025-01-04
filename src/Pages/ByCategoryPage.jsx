import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';
import { postListByCategory } from '../APIrequest/ApiRequest.js';
import Loader from './../Components/Loader';
import BlogLIst from './../Components/BlogLIst';

const ByCategoryPage = () => {

    const [categoryList, setCategoryList] = useState(null);
    const {categoryId} = useParams();
 
    useEffect(() => {

        ( async() => {
            const res = await postListByCategory(categoryId);
            setCategoryList(res);
        })()

    }, [categoryId])

         
     
    return (
        <Layout>
            {
                categoryList === null ? <Loader/> : <BlogLIst data={categoryList}/>
            }
        </Layout>
    );
};

export default ByCategoryPage;