import { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { axiosInstance } from '../../../../api/axios.ts';
import { cellSx, paginationContainerSx } from './CustomTable.style.ts';
import { tableHeaders } from './CustomTable.utils.ts';
import { FilterPanel } from './components/FilterPanel/FilterPanel.component.tsx';
import { ValidatorType } from './CustomTable.types.ts';
import { CustomTableRow } from './components/CustomTableRow/CustomTableRow.component.tsx';

export const CustomTable = () => {
  const [validators, setValidators] = useState<ValidatorType[]>([]);
  const [ethPrice, setEthPrice] = useState(0);
  const [sort_by, setSort_by] = useState('apr');
  const [page, setPage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rowsPerPage, _setRowsPerPage] = useState(7);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const ethPriceResponse = await axiosInstance.get('/historical/info');
        setEthPrice(ethPriceResponse.data.eth_price.current);
        const validatorsResponse = await axiosInstance.get('/entities/stats', {
          params: { sort_by },
        });
        setValidators(validatorsResponse.data.items);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [sort_by]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleFilterChange = (param: string) => {
    setSort_by(param);
  };

  return (
    <Box>
      <FilterPanel filter={sort_by} onFilterChange={handleFilterChange} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((label, index) => (
                <TableCell key={index} sx={cellSx}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {isLoading ? (
            <Box
              width="100vw"
              height="400px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress sx={{ color: '#FFFFFF' }} />
            </Box>
          ) : (
            <TableBody>
              {validators
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((validator, index) => (
                  <CustomTableRow
                    key={index}
                    validator={validator}
                    index={index}
                    ethPrice={ethPrice}
                  />
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <Box sx={paginationContainerSx}>
        <TablePagination
          sx={{ color: '#FFFFFF' }}
          component="div"
          count={validators.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[7]}
        />
      </Box>
    </Box>
  );
};
