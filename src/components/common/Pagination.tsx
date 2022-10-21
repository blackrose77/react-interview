import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

interface PaginationProps {
  nbElement: number;
  page: number;
  rowsPerPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination(props: PaginationProps) {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.setRowsPerPage(parseInt(event.target.value, 10));
    props.setPage(0);
  };
  return (
    <TablePagination
      component="div"
      count={props.nbElement}
      page={props.page}
      onPageChange={handleChangePage}
      rowsPerPage={props.rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[4, 8, 12]}
    />
  );
}

export default Pagination;
