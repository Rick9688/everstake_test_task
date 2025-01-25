export const containerSx = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
  backgroundColor: '#27272A',
  borderRadius: '8px',
  boxShadow: 1,
};

export const btnSx = {
  color: '#B6B6B6',
  border: 'none',
  borderRadius: '40px',
  '&:hover': {
    backgroundColor: '#333',
  },
  '&:focus, &:active': {
    outline: 'none',
  },
};

export const btnContainerSx = {
  display: 'flex',
  gap: 2,
  backgroundColor: '#18181B',
  borderRadius: '50px',
  padding: '3px 4px',
};
