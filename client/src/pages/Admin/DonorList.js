import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";
import { toast } from "react-toastify";

const DonorList = () => {
  const [data, setData] = useState([]);
  //find donor records
  const getDonors = async () => {
    try {
      const { data } = await API.get("/admin/donor-list");
      //   console.log(data);
      if (data?.success) {
        setData(data?.donorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  //DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      let answer = window.prompt(
        "Are you sure you want to delete this donor?",
        "Sure"
      );
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-donor/${id}`);
      toast.warning(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.name || record.organizationName + " (ORG)"}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(record._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default DonorList;
