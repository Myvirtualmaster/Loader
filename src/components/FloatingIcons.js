'use client';

import { BookOpen, Laptop, PenLine, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [BookOpen, Laptop, PenLine, GraduationCap];

export default function FloatingIcons() {
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const generatedIcons = [];

    for (let i = 0; i < 10; i++) {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      const top = Math.random() * 90; // % from top
      const left = Math.random() * 90; // % from left
      const size = Math.random() * 2 + 1; // 1rem to 3rem
      const duration = Math.random() * 10 + 5; // 5s to 15s
      const delay = Math.random() * 5; // delay in seconds

      generatedIcons.push(
        <div
          key={i}
          className="absolute text-white opacity-20 z-[-1]"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
            fontSize: `${size}rem`,
          }}
        >
          <Icon size={size * 16} />
        </div>
      );
    }

    setFloatingIcons(generatedIcons);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden">{floatingIcons}</div>
    </>
  );
}

