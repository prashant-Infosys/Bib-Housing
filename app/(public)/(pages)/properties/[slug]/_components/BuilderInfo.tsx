"use client";

import React from "react";

export default function BuilderInfo({ builder }: any) {
  if (!builder || !builder.name) return null;

  const brandColor = builder.color || "#FF4466"; 

  return (
    <div className="w-full bg-transparent">
      {builder.logo && (
        <div className="w-full h-32 flex items-center justify-center overflow-hidden mb-4">
          <img
            src={builder.logo}
            alt={`${builder.name} Logo`}
            className="h-20 w-auto object-contain block"
          />
        </div>

        
      )}

      <div className="flex flex-col">
        <h4 className="text-xl font-bold text-slate-900 mb-2">
          About{" "}
          <span 
            style={{ color: brandColor }} 
            className="inline-block"
          >
            {builder.name}
          </span>
        </h4>

        {builder.description && (
          <div className="relative">
            {/* We use line-clamp-3 to keep the card small, clicking anywhere now redirects */}
            <p className="text-xs text-muted-foreground leading-relaxed mb-1 line-clamp-3">
              {builder.description}
            </p>
            
            {/* Changed from <button> to <span> so it is no longer clickable independently */}
            <span 
              style={{ color: brandColor }}
              className="text-xs font-semibold"
            >
              Read more
            </span>
          </div>
        )}
      </div>
    </div>
  );
}