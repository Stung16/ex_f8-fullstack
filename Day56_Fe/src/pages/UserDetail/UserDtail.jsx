import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const UserDtail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/users/${id}`);
      const data = await response.json();
      setData(data?.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading && <Loading />}
      <h2>Thông tin chi tiết</h2>
      <ul>
        <li>name: {data?.name}</li>
        <li>email: {data?.email}</li>
        <li>phone: {data?.phone}</li>
        <li>website: {data?.website}</li>
        <li>address: {data?.address?.street}</li>
        <li>company: {data?.company?.name}</li>
        <li>
          <Link className="btn" to={"/"}>Go back</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDtail;
