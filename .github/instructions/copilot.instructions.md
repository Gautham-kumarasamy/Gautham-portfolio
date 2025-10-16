---
applyTo: '**'
---

# Project Instructions for AI Assistant

## Project Context
This is a Next.js e-commerce application with JavaScript and JSX, using SQL for database operations and Stripe for payments.

## File Naming Conventions

### Components (IMPORTANT - Always follow this)
- React component files: Use PascalCase - `ApplicationSettings.jsx`, `UserProfile.jsx`, `NavBar.jsx`
- Folders = lowercase/kebab-case (product-card/)
- **Always create components in PascalCase regardless of how the user types the request**
- **Always use .jsx extension for React components**

### Utilities and Helpers
- Utility files: Use camelCase - `dateUtils.js`, `apiHelpers.js`
- Utility folders: Use camelCase - `utils/`, `helpers/`

## Code Generation Guidelines

### API Integration
- **Always use Axios for API calls** - never use fetch or other HTTP libraries
- Create reusable API service functions
- Implement proper error handling for API calls
- Use interceptors for common functionality (auth headers, error handling)

### Variable and Function Naming
- Use descriptive, meaningful variable names - `userAuthToken` not `token`
- Function names should clearly describe their purpose - `calculateTotalPrice()` not `calc()`
- Boolean variables should be prefixed with `is`, `has`, `can` - `isLoggedIn`, `hasPermission`
- Constants should use UPPER_SNAKE_CASE - `API_BASE_URL`, `MAX_RETRY_ATTEMPTS`

### No Hardcoded Values
- **Never hardcode values directly in components**
- Use environment variables for API endpoints, keys, and configuration
- Create constants files for static values - `src/constants/`
- Use configuration objects for repeated values
- Extract magic numbers into named constants

### Component Reusability
- **Always check for existing reusable components before creating new ones**
- Adapt existing components with props when possible
- Create generic, flexible components that can handle multiple use cases
- Use composition over duplication
- Make components configurable through props and adaptable to the request prompt

## Coding Standards
- **Use JavaScript with JSX syntax - NO TypeScript**
- Prefer functional components over class components
- Use proper JSX syntax and conventions
- Follow ESLint and Prettier configurations
- Use PropTypes for component prop validation

## Architecture Patterns
- Follow clean architecture principles
- Separate business logic from UI components
- Use custom hooks for stateful logic
- Implement proper error boundaries

## Styling Guidelines
- **Always use Tailwind CSS for styling** - primary styling method
- Follow mobile-first responsive design
- Use CSS modules for component-specific styles only when Tailwind is insufficient
- Maintain consistent spacing using Tailwind scale
- Apply Tailwind utility classes consistently across all components

## Security Considerations
- Validate all user inputs
- Sanitize data before database operations
- Implement rate limiting for public endpoints

## Testing Approach
- Write unit tests for utility functions
- Use React Testing Library for component tests
- Mock external API calls in tests
- Maintain >80% code coverage

## AI Instructions for File Creation
When creating files:
- **React components: Always use .jsx extension** (ApplicationSettings.jsx, not .tsx)
- **Utility files: Always use .js extension** (dateUtils.js, not .ts)
- **NO TypeScript syntax or type annotations**
- Create components in appropriate folder structure
- Use JavaScript ES6+ features

## AI Instructions for Code Generation
When generating code, always follow these principles:

### 1. JavaScript/JSX Only
- **Generate JavaScript code with JSX syntax**
- **NO TypeScript type annotations**
- Use modern ES6+ JavaScript features
- Use PropTypes for component prop validation

### 2. API Calls - Use Axios Only
- Implement all HTTP requests using Axios
- Add proper error handling and try-catch blocks
- Use Axios interceptors for common functionality

### 3. No Hardcoded Values
- Extract all URLs, strings, numbers to constants or environment variables
kk- Store API endpoints in environment variables
- Create constants files for static data

### 4. Proper Variable Naming
- Use descriptive, self-documenting variable names
- Follow JavaScript naming conventions
- Use meaningful function names that describe their purpose
- Prefix boolean variables appropriately (is, has, can, should)

### 5. Tailwind CSS Styling
- Apply Tailwind utility classes for all styling needs
- Use responsive design classes (sm:, md:, lg:, xl:)
- Implement mobile-first approach
- Maintain consistent spacing and typography scales

### 6. Reusable Components
- Before creating new components, suggest existing reusable alternatives
- Make components flexible through props configuration
- Design components to be adaptable to different use cases
- Create composition-friendly component APIs
- Ensure components can be customized based on the request prompt requirements

### Example Patterns to Follow:

#### Component Pattern (JSX):
```javascript
// Good - JSX component with PropTypes
import React from 'react';
import PropTypes from 'prop-types';

const TableComponent = ({ data, columns, onRowClick }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr 
              key={row.id || index}
              onClick={() => onRowClick && onRowClick(row)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableComponent.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRowClick: PropTypes.func,
};

export default TableComponent;
```

#### API Service Pattern (JavaScript):
```javascript
// Good - using axios with proper error handling (JavaScript)
import axios from 'axios';

const userService = {
  async fetchUserProfile(userId) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user profile');
    }
  },
  
  async updateUserProfile(userId, userData) {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`, 
        userData
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to update user profile');
    }
  }
};

export default userService;
```

## CRITICAL REMINDERS:
- **Always generate JSX/JavaScript code - NEVER TypeScript**
- **Use .jsx extension for components and .js for utilities**
- **Use PropTypes instead of TypeScript interfaces**
- **No type annotations or TypeScript syntax**

## Layered Architecture (Current Project Structure)

Your project is organized using a strict layered architecture:

- **Data Layer:**
  - All API calls and data fetching are handled in `src/data/` (e.g., `projectRepository.js`).
  - Uses Axios and a single API base URL (`API_BASE_URL`).

- **Domain (Service) Layer:**
  - Business logic, data transformation, and use-cases are handled in `src/domain/` (e.g., `projectService.js`).
  - Keeps components and slices free of business logic.

- **Presentation Layer:**
  - UI components are organized in `src/components/`.
  - Components only handle rendering and receive data via props/hooks.

### Example Data Flow
1. Component (e.g., `Projects.jsx`) requests data via Redux.
2. Redux slice calls the repository in the data layer.
3. Repository fetches data from the API.
4. Service layer transforms or maps the data.
5. Component renders the processed data.

### Benefits
- Improved modularity and maintainability.
- Easier to test and extend business logic.
- Clean separation between data access, business rules, and UI.