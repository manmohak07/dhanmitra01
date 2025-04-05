import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
  bordered = true
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm overflow-hidden';
  const hoverClasses = hoverable ? 'transition-transform duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer' : '';
  const borderClasses = bordered ? 'border border-gray-200' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${borderClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  className = ''
}) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      <div className="flex justify-between items-center">
        <div>
          {title && (
            typeof title === 'string' 
              ? <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              : title
          )}
          {subtitle && (
            typeof subtitle === 'string'
              ? <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
              : subtitle
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
};

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'normal' | 'large';
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  padding = 'normal'
}) => {
  const paddingClasses = {
    none: '',
    small: 'p-3',
    normal: 'p-6',
    large: 'p-8'
  };
  
  return (
    <div className={`${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  bordered = true
}) => {
  const borderClasses = bordered ? 'border-t border-gray-200' : '';
  
  return (
    <div className={`px-6 py-4 ${borderClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card; 