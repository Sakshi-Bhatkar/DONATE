import React from 'react'

const VideoBanner = () => {
  return (
    <div className='bg-primary'>
     <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8">
        {/*Video Section*/}
        <div>
        <iframe  src="https://www.youtube.com/embed/bZQEiMAZn9Q?si=qMn4o5sUt5IDGfHg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='aspect-video w-full'></iframe>
        </div>
        {/*Text Section*/}
        <div className='space-y-4 text-center md:text-left text-white '>
            <h1 className='text-4xl font-bold'>Watch Our Video</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae mollitia iusto aliquam vel, perspiciatis vero esse quisquam at dignissimos suscipit molestiae accusamus quae doloribus nam rem minus eveniet repellat aperiam?
            </p>
            <button className='btn-primary !bg-white !text-black'>
                Get Started
            </button>
        </div>
        </div>
    </div>    
    </div>
  );
};

export default VideoBanner
