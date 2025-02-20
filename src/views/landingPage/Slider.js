// import React, { useState } from 'react';
// // import slidebg from "../../assets/img/slidebg.png";
// import { FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Mahesh Reddy",
//     role: "Student at GHS",
//     feedback: "After completing my 10th, I was like uhhhhh what now? But then the team of SCOLAGE app introduced me to their free online college guidance app. I like the concept and efforts made by the team of SCOLAGE.",
//     rating: 5,
//   },
//   {
//     name: "Shreevidya",
//     role: "Working Professional",
//     feedback: "No doubt that this app is going to be useful for every student out there. Students can easily do the college research, compare colleges and even submit the applications online directly without waiting in the queues.",
//     rating: 5,
//   },
//   {
//     name: "Vishal Sharma",
//     role: "Parent's,",
//     feedback: "Being a working parent most of the time, I didn't get a chance to engage with my kid. He just passed 10th, and I was tense about his future. But then I attended a demo session presented by the team of SCOLAGE app.",
//     rating: 5,
//   },
//   {
//     name: "Afsha Shareef",
//     role: "Senior Teacher,",
//     feedback: "Finding the right college is quite tricky without detailed information. And the struggle is real because we were sometimes not able to attend every student personally. But I am delighted with the service offered by the team of SCOLAGE app.",
//     rating: 5,
//   },
//   {
//     name: "Rahul Jain",
//     role: "Enterpreneur and Motivational Speaker,",
//     feedback: "SCOLAGE is a free and very relevant college search and admission platform. The idea behind this is well thought through and well constructed. It made the college research and admission process quite easier.",
//     rating: 5,
//   },
//   {
//     name: "Mr. Danial",
//     role: "Businessman and Social Worker,",
//     feedback: "Not even students but this application is amazing for parents as well. They can find peace of mind while knowing that their kids have full support and guidance from SCOLAGE app.",
//     rating: 5,
//   },
// ];

// function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 3;
//   const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

//   const nextSlide = () => {
//     if (currentIndex + itemsPerPage < testimonials.length) {
//       setCurrentIndex((prevIndex) => prevIndex + 1 < 0 ? testimonials.length + 1 : prevIndex + 1);
//     }
//   };
//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1);
//     }
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index * itemsPerPage);
//   };

//   return (
//  <div className="flex flex-col items-center justify-center h-screen min-h-screen w-full text-center bg-[linear-gradient(to_bottom_right,#B8A9D5,#DFE8F2,#C9AECA,#D7BBC1,#FBEEDC)] bg-cover bg-center"> 
//       {/* <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#B8A9D5] to-[#DFE8F2] to-[#C9AECA] to-[#D7BBC1] to-[#FBEEDC] min-h-screen w-full bg-cover bg-center text-center"
//         style={{ backgroundImage: `url(${slidebg})` }}
//      >  */}
//       <h2 className="text-white text-3xl lg:text-5xl 2xl:text-[70px] font-bold leading-[1.2] text-center">"See what Parents and students have to say"</h2>
//       <div className='flex space-x-2 mt-16'>
//          <button onClick={prevSlide} className="text-white text-7xl hover:cursor-pointer">
//           &#10094;
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
//         {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((data) => (
//             <div className="w-full max-w-md h-[34rem] bg-white rounded-[2rem] shadow-lg pt-14 pb-9 px-9">
//               <div className="text-center">
//                 <div className="flex justify-center mb-4 space-x-2">
//                   {[...Array(data.rating)].map((_, index) => (
//                     <span key={index} className="text-[#ffd500] text-3xl"><FaStar/></span>
//                   ))}
//                 </div>
//                 <p className="text-2xl h-[18.7rem] font-normal">"{data.feedback}"</p>
//                 <hr className='text-[#6e11b0] mb-3'></hr>
//                 <div className='flex space-x-7'>
//                   <div className='w-20 h-20 bg-[#d6bdef] rounded-full border border-[#707070]'></div>
//                   <div className='text-start'>
//                     <p className="mt-4 text-xl font-normal text-[#1e3b39]">{data.name}</p>
//                     <p className="text-[#1e3b39]">{data.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={nextSlide} className="text-white text-7xl hover:cursor-pointer">
//           &#10095;
//         </button>
//       </div>

//       <div className="flex justify-center mt-12 space-x-2">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-4 h-4 rounded-full ${currentIndex / itemsPerPage === index ? 'bg-[#6e11b0]' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Slider;


import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import slidebg from "../../assets/img/slidebg.png"

const testimonials = [
  {
    name: "Mahesh Reddy",
    role: "Student at GHS",
    feedback: "After completing my 10th, I was like uhhhhh what now? But then the team of SCOLAGE app introduced me to their free online college guidance app. I like the concept and efforts made by the team of SCOLAGE.",
    rating: 5
  },
  {
    name: "Shreevidya",
    role: "Working Professional",
    feedback: "No doubt that this app is going to be useful for every student out there. Students can easily do the college research, compare colleges and even submit the applications online directly without waiting in the queues.",
    rating: 5
  },
  {
    name: "Vishal Sharma",
    role: "Parent",
    feedback: "Being a working parent most of the time, I didn't get a chance to engage with my kid. He just passed 10th, and I was tense about his future. But then I attended a demo session presented by the team of SCOLAGE app.",
    rating: 5
  },
  {
    name: "Afsha Shareef",
    role: "Senior Teacher",
    feedback: "Finding the right college is quite tricky without detailed information. And the struggle is real because we were sometimes not able to attend every student personally. But I am delighted with the service offered by the team of SCOLAGE app.",
    rating: 5
  },
  {
    name: "Rahul Jain",
    role: "Entrepreneur",
    feedback: "SCOLAGE is a free and very relevant college search and admission platform. The idea behind this is well thought through and well constructed. It made the college research and admission process quite easier.",
    rating: 5
  },
  {
    name: "Mr. Danial",
    role: "Businessman",
    feedback: "Not even students but this application is amazing for parents as well. They can find peace of mind while knowing that their kids have full support and guidance from SCOLAGE app.",
    rating: 5
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center p-5"
      style={{ backgroundImage: `url(${slidebg})` }}>
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
        "See what Parents and Students have to say"
      </h2>
      <div className='flex items-center w-full max-w-[86rem] justify-between'>
        <button onClick={prevSlide} className="text-white text-4xl md:text-6xl p-2 hover:cursor-pointer">
          &#10094;
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 ">
          {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((data, i) => (
            <div key={i} className="bg-white py-6 px-10 rounded-4xl shadow-md flex flex-col justify-between h-[30rem]">
              <div>
                <div className="flex justify-center mt-6 mb-4">
                  {[...Array(data.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500 text-2xl" />
                  ))}
                </div>
                <p className="lg:text-lg md:text-l xl:text-lg mb-4">"{data.feedback}"</p>
              </div>
              <div>
                <hr className='border-purple-500 mb-5'></hr>
                <div className='flex space-x-7'>
                  <div className='w-20 h-20 bg-[#d6bdef] rounded-full border border-[#707070]'></div>
                  <div className='text-start'>
                    <p className="mt-4 text-xl font-normal text-[#1e3b39]">{data.name}</p>
                    <p className="text-[#1e3b39]">{data.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="text-white text-4xl md:text-6xl p-2 hover:cursor-pointer">
          &#10095;
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`w-4 h-4 rounded-full ${currentIndex / itemsPerPage === index ? 'bg-purple-700' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
