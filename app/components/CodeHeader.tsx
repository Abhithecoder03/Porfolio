'use client';
import { File, X, Minus, Maximize2 } from 'lucide-react';

interface CodeHeaderProps {
  filename: string;
  icon?: React.ReactNode;
}

export default function CodeHeader({ filename, icon = <File /> }: CodeHeaderProps) {
  return (
    <div className="flex justify-between items-center border-b border-[#3c3c3c] bg-[#252526] px-4 py-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[#d4d4d4] text-sm">{filename}</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="hover:bg-[#3c3c3c] p-1 rounded">
          <Minus className="w-4 h-4 text-[#d4d4d4]" />
        </button>
        <button className="hover:bg-[#3c3c3c] p-1 rounded">
          <Maximize2 className="w-4 h-4 text-[#d4d4d4]" />
        </button>
        <button className="hover:bg-[#3c3c3c] p-1 rounded">
          <X className="w-4 h-4 text-[#d4d4d4]" />
        </button>
      </div>
    </div>
  );
} 