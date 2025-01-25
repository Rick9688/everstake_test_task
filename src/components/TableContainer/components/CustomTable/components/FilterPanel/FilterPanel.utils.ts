export const getButtonStyles = (filter: string, value: string) => {
  const isActive = filter === value;
  return {
    backgroundColor: isActive ? '#27272A' : 'transparent',
    color: isActive ? '#FFFFFF' : '#494949',
  };
};

export const filters = [
  { label: 'Monthly', value: 'apr_30days' },
  { label: 'Annual', value: 'apr_365days' },
  { label: 'All', value: 'apr' },
];
