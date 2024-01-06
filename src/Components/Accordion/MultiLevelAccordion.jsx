import React, { useState } from 'react';

const MultiLevelAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      title: 'Section 1',
      content: 'Content for section 1',
      image: 'image1.jpg',
      subSections: [
        {
          subtitle: 'Subsection 1.1',
          subContent: 'Content for subsection 1.1',
          subImage: 'https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg'
        },
        {
          subtitle: 'Subsection 1.2',
          subContent: 'Content for subsection 1.2',
          subImage: 'https://cdn.pixabay.com/photo/2020/03/14/21/59/lighthouse-4931925_1280.jpg'
        }
      ]
    },
    {
      title: 'Section 2',
      content: 'Content for section 2',
      image: 'https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_1280.jpg',
      subSections: [
        {
          subtitle: 'Subsection 2.1',
          subContent: 'Content for subsection 2.1',
          subImage: 'https://cdn.pixabay.com/photo/2020/03/14/21/59/lighthouse-4931925_1280.jpg'
        }
      ]
    },
    // Add more sections as needed
  ];

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div>
      {accordionData.map((section, index) => (
        <div key={index}>
          <div
            onClick={() => handleAccordionClick(index)}
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            {section.title}
          </div>
          {activeAccordion === index && (
            <div style={{ paddingLeft: '20px' }}>
              <p>{section.content}</p>
              <img src={section.image} alt={`Image for ${section.title}`} />
              {section.subSections.map((subSection, subIndex) => (
                <div key={subIndex}>
                  <div
                    onClick={() => handleAccordionClick(subIndex)}
                    style={{ cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    {subSection.subtitle}
                  </div>
                  {activeAccordion === subIndex && (
                    <div style={{ paddingLeft: '20px' }}>
                      <p>{subSection.subContent}</p>
                      <img src={subSection.subImage} alt={`Image for ${subSection.subtitle}`}/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiLevelAccordion;
