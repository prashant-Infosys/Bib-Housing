"use client"; // This is required for useState

import React, { useState } from 'react';

interface Props {
  text?: string;
}

export default function ExpandableDescription({ text }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  // If text is short, just show it normally
  const isLongText = text.length > 200;

  return (
    <div className="mt-2 mb-1">
      <p className={`text-muted-foreground leading-relaxed ${!isExpanded && isLongText ? 'line-clamp-3' : ''}`}>
        {text}
      </p>
      
      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-semibold text-[#FF4466] mt-1 hover:underline"
        >
          {isExpanded ? "Show less" : "See more"}
        </button>
      )}
    </div>
  );
}