// Mock data generators
export const createMockUser = (overrides = {}) => ({
  id: 'user-1',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides,
});

// CSS Module testing utilities
export const hasModuleClass = (element: HTMLElement, className: string) => {
  return Array.from(element.classList).some(cls => cls.includes(className));
};

export const getModuleClasses = (element: HTMLElement, prefix: string = '') => {
  return Array.from(element.classList).filter(cls => (prefix ? cls.includes(prefix) : true));
};
