import React from 'react';

// Complete Reusable Table Component - handles all styling internally
const Table = ({ 
  data = [], 
  columns = [], 
  theme = 'dark', // 'dark' | 'light'
  variant = 'default', // 'default' | 'gradient' | 'minimal'
  size = 'medium', // 'small' | 'medium' | 'large'
  striped = false,
  hoverable = true,
  bordered = false,
  className = '',
  emptyMessage = 'No data available'
}) => {
  // Theme configurations
  const themes = {
    dark: {
      container: 'bg-gray-900 text-gray-100',
      table: 'bg-gray-800',
      header: 'bg-gray-900 text-gray-300',
      body: 'bg-gray-800 divide-gray-700',
      row: 'hover:bg-gray-700',
      cell: 'text-gray-100',
      border: 'border-gray-600',
      empty: 'text-gray-400'
    },
    light: {
      container: 'bg-white text-gray-900',
      table: 'bg-white',
      header: 'bg-gray-50 text-gray-700',
      body: 'bg-white divide-gray-200',
      row: 'hover:bg-gray-50',
      cell: 'text-gray-900',
      border: 'border-gray-300',
      empty: 'text-gray-500'
    }
  };

  // Size configurations
  const sizes = {
    small: 'px-3 py-2 text-xs',
    medium: 'px-4 py-3 text-sm',
    large: 'px-6 py-4 text-base'
  };

  const currentTheme = themes[theme];
  const currentSize = sizes[size];

  // Variant styles
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return {
          container: 'bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl',
          header: 'bg-gradient-to-r from-gray-800 to-gray-700'
        };
      case 'minimal':
        return {
          container: 'bg-transparent',
          header: 'bg-transparent border-b-2 border-gray-300'
        };
      default:
        return {
          container: `${currentTheme.container} rounded-lg shadow-lg overflow-hidden`,
          header: currentTheme.header
        };
    }
  };

  const variantClasses = getVariantClasses();

  if (!data.length) {
    return (
      <div className={`flex items-center justify-center py-12 ${currentTheme.empty} ${variantClasses.container}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">📊</div>
          <p>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${variantClasses.container} ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <thead className={variantClasses.header}>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key || index}
                  className={`${currentSize} text-left font-semibold uppercase tracking-wider ${
                    column.headerClassName || ''
                  }`}
                  style={column.width ? { width: column.width } : {}}
                >
                  {column.header || column.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className={`${currentTheme.body} divide-y`}>
            {data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className={`
                  ${hoverable ? currentTheme.row : ''} 
                  ${striped && rowIndex % 2 === 1 ? 'bg-opacity-50' : ''}
                  transition-colors duration-200
                `}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={`${rowIndex}-${column.key || colIndex}`}
                    className={`${currentSize} ${currentTheme.cell} ${column.cellClassName || ''}`}
                  >
                    {column.render 
                      ? column.render(row[column.key], row, rowIndex)
                      : row[column.key] || '-'
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// Export the standalone component
export default Table;

