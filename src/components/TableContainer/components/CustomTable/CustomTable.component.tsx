import React, { useEffect, useState } from 'react';
import { Box, Table, TableContainer, TablePagination } from '@mui/material';
import { FilterPanel } from './components/FilterPanel/FilterPanel.component.tsx';
import { CustomTableHead } from './components/CustomTableHead/CustomTableHead.component';
import { TableDataType } from './CustomTable.types';
import { Loader } from '../../../Loader/Loader.component';
import { CustomTableBody } from './components/CustomTableBody/CustomTableBody.component';
import { getEthPrice, getStats } from '../../../../api/apiTable';

export const CustomTable: React.FC = () => {
  const [tableData, setTableData] = useState<TableDataType[]>([]);
  const [ethPrice, setEthPrice] = useState(0);
  const [currentFilter, setCurrentFilter] = useState('apr');
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const rowsPerPage = 7;
  const processedTableData = tableData;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedEthPrice = await getEthPrice();
        setEthPrice(fetchedEthPrice);
        const fetchedStats = await getStats(currentFilter, page, rowsPerPage);
        setTableData(fetchedStats.items);
        setCount(fetchedStats.totalCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentFilter, page]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleFilterChange = (param: string) => {
    setCurrentFilter(param);
  };

  return (
    <Box>
      <FilterPanel filter={currentFilter} onFilterChange={handleFilterChange} />
      <TableContainer>
        <Table>
          <CustomTableHead />
          {isLoading ? (
            <Loader />
          ) : (
            <CustomTableBody
              tableData={processedTableData}
              ethPrice={ethPrice}
            />
          )}
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ color: '#FFFFFF' }}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[7]}
      />
    </Box>
  );
};
