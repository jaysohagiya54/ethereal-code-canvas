
import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text]);
  
  return (
    <span className={`${className} inline-block`}>
      {displayedText}
      {index < text.length && (
        <span className="border-r-2 border-primary animate-blink">&nbsp;</span>
      )}
    </span>
  );
};

export default AnimatedText;
