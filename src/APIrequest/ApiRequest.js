 import axios from "axios";
 




 // This is my Base URL
const BaseURL = `https://basic-blog.teamrabbil.com/api`;




// Call Api for getting Blog Categories List
export const getPostCategories = async () => {
   
    try {
        const res = await axios.get(`${BaseURL}/post-categories`);
        const data = await res.data;

        if(res.status === 200) {
            return data;
        }else{
            return [];
        }

    }catch(e) {
        console.log(e);
    }
     
}



// Call Api for getting Newest Blog post
export const postNewest = async () => {
   
    try {
        const res = await axios.get(`${BaseURL}/post-newest`);
        const data = await res.data;

        if(res.status === 200) {
            return data;
        }else{
            return [];
        }

    }catch(e) {
        console.log(e);
    }
     
}



// Call Api for getting  post by Category
export const postListByCategory = async (categoryId) => {
     
    try {
       
        const res = await axios.get(`${BaseURL}/post-list/${categoryId}`);
        
        if(res.status === 200){
            return res.data;
        }else{
            return [];
        }
        
    }catch(e) {
        console.log(e);
    }
     
}




// Call Api for getting  post details
export const postDetails= async (postId) => {
     
    try {
       
        const res = await axios.get(`${BaseURL}/post-details/${postId}`);
        
        if(res.status === 200){
            return res.data;
        }else{
            return [];
        }
        
    }catch(e) {
        console.log(e);
    }
     
}


 