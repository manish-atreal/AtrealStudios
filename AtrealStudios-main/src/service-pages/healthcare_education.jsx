import React, { useState, useEffect } from 'react';

export default function healthcare_education() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = ['Launching Soon...'];
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % messages.length;
      const fullText = messages[current];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, messages]);

  return (
    <div className="h-[398px] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
          Healthcare & Education Solutions
        </h1>
        <div className="text-2xl md:text-3xl text-gray-700">
          <span>{text}</span>
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
}
