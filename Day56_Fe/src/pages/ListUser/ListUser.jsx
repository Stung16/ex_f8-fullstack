import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Loading from "../../Components/Loading/Loading";

const ListUser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(`http://localhost:3000/users`);
      const data = await response.json();
      setData(data?.data);
      setLoading(false)
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>List Users</h1>
      {data?.map((user, index) => (
        <div key={index}>
          <Link to={`/user/${user.id}`}>{user?.name}</Link>
        </div>
      ))}
      {loading && <Loading />}
    </div>
  );
};

export default ListUser;
