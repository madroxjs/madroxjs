// src/components/CodeSource.tsx
import React, { useEffect, useState } from 'react';
import { Source } from '@storybook/blocks'
import { SupportedLanguage } from 'storybook/internal/components';

interface CodeSourceProps {
  path: string;
  baseUrl: string;
}

export const CodeSource: React.FC<CodeSourceProps> = ({ path, baseUrl }) => {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    const fetchCode = async () => {
      try {
        // Construct the URL for the file based on the baseUrl and path
        const fileUrl = new URL(path, baseUrl).href;
        const response = await fetch(fileUrl);
        const text = await response.text();
        setCode(text);
      } catch (error) {
        console.error('Failed to fetch file:', error);
      }
    };

    fetchCode();
  }, [path, baseUrl]);

  return (
    <Source language={'js' as SupportedLanguage} code={code} />
  );
};
