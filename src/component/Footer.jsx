import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-end">
        <div className="box-content w-1/2 p-0 border-b border-gray-700 ml-74">
          <div className="text-center">
            <p className="text-md font-bold mb-1">© 2024 Devanshu Dhyani</p>
            <p className="text-sm">Major: Computer Science Engineering</p>
          </div>
          <div className="flex justify-center mt-1">
            <p className="text-sm mr-2">
              Email: <a href="mailto:devanshu.dhyani55@gmail.com" className="hover:text-blue-500">devanshu.dhyani55@gmail.com</a>
            </p>
            <p className="text-sm mr-2">
              LinkedIn: <a href="https://www.linkedin.com/in/devanshu-dhyani-929202221/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">linkedin.com/in/devanshu-dhyani</a>
            </p>
            <p className="text-sm">
              GitHub: <a href="https://github.com/Garullous" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">github.com/Garullous</a>
            </p>
          </div>
        </div>
        <div className="box-content w-1/2 p-0">
          <nav className="text-end">
            <a href="#" className="font-semibold hover:text-blue-500 text-sm">Home</a> |
            <a href="#" className="font-semibold hover:text-blue-500 text-sm">Projects</a> |
            <a href="#" className="font-semibold hover:text-blue-500 text-sm">Resume</a> |
            <a href="#" className="font-semibold hover:text-blue-500 text-sm">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




























// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// function 
// Footer() {
//   return (
//     <footer className=' bg-cyan-200 text-white rounded-lg'> 
//         <div class="foot-panel1">Back to top</div>

//         <div class="foot-panel3">
//             <div class="logo">
//             <Button variant="contained" disableElevation>
//             Contact Me
//             </Button>
//             </div>
//         </div>

//         <div class="foot-panel4 ">
//             <div class="pages">
//                 <a href="">Conditions of use</a>
//                 <a href="">Privacy Notice</a>
//                 <a href="">Your Ads Privacy Choices</a>
//             </div>
//             <div class="copyright">
//                 Conditions of Use & Sale
//                 Privacy Notice
//                 Interest-Based Ads
//                 © 1996-2023, Amazon.com, Inc. or its affiliates 
//             </div>
//         </div>
//     </footer>

//   )
// }

// export default Footer