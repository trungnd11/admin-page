import styled from "styled-components";

export const TableStyle = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 0.5px solid black;

    thead {
      td {
        font-weight: 600;
      }
    }

    tbody {
      th {
        font-weight: 400 !important;
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.5px solid black;
      border-right: 0.5px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .page-container {
    display: flex;
    justify-content: end;

    .pagination {
      --bs-pagination-active-bg: green;
    }
  }
`;
