import { useState } from "react";
import { ISectionProps } from "../../interface/ISectionProps";

import './Section.css';

const Section: React.FC<ISectionProps> = ({heading, paragraphs}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openSection = () => {
    if(isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <section className='section'>
      <h3 className='section__title' onClick={openSection}>{ heading }</h3>
      {
        isOpen && 
        paragraphs.map((paragraph: string) => {
          return <p>{ paragraph }</p>
        })
      }
    </section>
  );
}

export { Section };