import React, { useEffect, useState } from 'react';
import './Story.css';

const Story = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blogs = await response.json();
        console.log(blogs);
        setData(blogs);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-[size:20px_20px] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]" >
    <div className="story-container bg-[size:20px_20px] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">
      {data.map((blog, index) => (
        <div key={index} className="story">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="summary">{blog.summary}</p>
          <p className="blog-story">{blog.story}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Story;
//<div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] "></div>
//