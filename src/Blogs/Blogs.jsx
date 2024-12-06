import React from 'react'
import BlogCard from './BlogCard'
import Img2 from "../assets/blogs/1.jpg"
import Img3 from "../assets/blogs/2.jpg"
import Img4 from "../assets/blogs/3.jpg"

const BlogData =[
  
    {
        img:Img2,
        title:
        "No one has ever became poor from giving. The only way to do great",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, praesentium. Saepe illo autem quibusdam at? Ab dolorem assumenda ratione istel ",
        date:"Jan 22, 2024",
        writer:"Nym",
    },
    {
        img:Img3,
        title:
        "No one has ever became poor from giving.The only way to do great",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, praesentium. Saepe illo autem quibusdam at? Ab dolorem assumenda ratione istel",
        date:"Jan 22, 2024",
        writer:"Mous",
    },
    {
        img:Img4,
        title:
        "No one has ever became poor from giving.The only way to do great",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, praesentium. Saepe illo autem quibusdam at? Ab dolorem assumenda ratione istel ",
        date:"Jan 22, 2024",
        writer:"Ano",
    },
];

const Blogs = () => {
  return(
  <div className='dark:bg-gray-900 dark:text-white'>
    <div className="container py-8">
      <h1 className='mb-8 border-l-8 pl-2 text-center text-3xl font-bold '>Our Latest Blogs</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
      {BlogData.map((blog) => (
        <BlogCard
        key={blog.title}
        img={blog.img}
        title={blog.title}
        description={blog.description}
        date={blog.date}
        writer={blog.writer}
        />
      ))}
    </div>
  </div>
  </div>
  );
};

export default Blogs;
