import React from 'react';

const BlogDetails = ({data:{postComments, postDetails:{id, img, title, list_id, content}}}) => {
console.log(content);
    return (
       
             <div className="container mx-auto my-16 p-9">
                <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                    <div className="card w-100 glass">
                        <figure><img src={img} alt={'dd'} /></figure>
                        <div className="card-body">
                            <h2 className='card-title'>{title}</h2>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
             </div>
       
    );
};

export default BlogDetails;