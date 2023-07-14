import "./userList.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
  const [data, setData] = useState(userRows)
  
  const handleDelete = (id:number) => {
    setData(data.filter(item=>item.id !== id))
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (parmas) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={parmas.row.avatar} alt="" />
            {parmas.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      type: "string",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      type: "actions",
      width: 150,
      renderCell(params) {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 8, 10]}
        checkboxSelection
      />
    </div>
  );
}
