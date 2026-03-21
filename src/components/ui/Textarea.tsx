'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, name, ...props }, ref) => {
    // Use name or a fallback if provided, otherwise let it be undefined
    const textareaId = id || (name ? `textarea-${name}` : undefined);

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={textareaId}
            className="block text-sm font-medium text-forest-green"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          name={name}
          className={cn(
            'flex min-h-[120px] w-full rounded-md border border-stone-gray bg-white px-4 py-3 text-base',
            'placeholder:text-stone-gray-light focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-forest-green focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
            error && 'border-red-500 focus-visible:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-stone-gray">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };