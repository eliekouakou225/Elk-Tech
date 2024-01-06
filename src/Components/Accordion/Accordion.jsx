// import React, { useState } from 'react';

// const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <div onClick={() => setIsOpen(!isOpen)}>
//         <h2>{title}</h2>
//       </div>
//       {isOpen && <div>{content}</div>}
//     </div>
//   );
// };

// const Accordion = () => {
//   return (
//     <div>
//       <AccordionItem
//         title="Infographie/Montage-video"
//         content={
//           <div>
//             {/* Nested Accordion */}
//             <AccordionItem title="Infographie" />
//             <AccordionItem title="Montage-video" />
//           </div>
//         }
//       />
//       <AccordionItem title="Item 2" content={<p>Content for Item 2</p>} />
//     </div>
//   );
// };

// export default Accordion

import React, { useState } from 'react';

const AccordionItem = ({ title, content, imgSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className='row'>
      <div className="col">
      <div onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
      </div>
      </div>
      <div className="col">
      
      {isOpen && (
        <div className='accordion__img'>
          {imgSrc && <img src={imgSrc} alt="Opened Accordion" />} {/* Image when accordion is open */}
          <p>{content}</p>
        </div>
      )}
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div>
      <AccordionItem
        title="Item 1"
        content="Content for Item 1"
        imgSrc="https://cdn.pixabay.com/photo/2014/01/16/08/06/skyscrapers-246224_1280.jpg" // Replace with your image URL
      >
        {/* Nested Accordion */}
        <AccordionItem title="Sub Item 1" content="Content for Sub Item 1" imgSrc="https://cdn.pixabay.com/photo/2020/03/14/21/59/lighthouse-4931925_1280.jpg" />
        <AccordionItem title="Sub Item 2" content="Content for Sub Item 2" imgSrc="https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg" />
      </AccordionItem>
      <AccordionItem title="Item 2" content="Content for Item 2" imgSrc="https://cdn.pixabay.com/photo/2013/04/16/14/22/brooklyn-bridge-105079_1280.jpg" />
    </div>
  );
};

export default Accordion;

// import React, { useState } from 'react';
// import accordionData from './data.json'; // Charger les données depuis le fichier JSON

// const AccordionItem = ({ item }) => {
//   const { title, content, imgSrc, subItems } = item;
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='container' >
//     <div className="row">
//         <div className="col-6">
//             <div onClick={() => setIsOpen(!isOpen)}>
//                 <h4>{title}</h4>
//             </div>
//       {isOpen && (
//         <div>
//           <p>{content}</p>
//           {/* {imgSrc && <img src={imgSrc} alt="Opened Accordion" />} Image when accordion is open */}
//           {subItems && 
//             subItems.map((subItem, index) => (
//               <AccordionItem key={index} item={subItem} />
//             ))}
//         </div>
//       )}
//         </div>
//         <div className="col-6">
//       {isOpen && (
//         <div>
//           <p>{content}</p>
//           {imgSrc && <img src={imgSrc} alt="Opened Accordion" />} {/* Image when accordion is open */}
//           {/* {subItems && 
//             subItems.map((subItem, index) => (
//               <AccordionItem key={index} item={subItem} />
//             ))} */}
//         </div>
//       )}

//         </div>
//     </div>
//     {/* -------------------------------- */}
//     </div>
//   );
// };

// const Accordion = () => {
//   return (
//     <div>
//       {accordionData.map((item, index) => (
//         <AccordionItem key={index} item={item} />
//       ))}
//     </div>
//   );
// };

// export default Accordion;
