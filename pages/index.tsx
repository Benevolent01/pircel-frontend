import { useEffect, useState } from "react";
import axios from "axios";
import HouseContainer from "../components/HouseContainer";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 9;

const IndexPage: React.FC = () => {
  const [houses, setHouses] = useState([]);
  const [nowHouses, setNowHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://wizard-world-api.herokuapp.com/houses");
        const len = result.data.length;
        setHouses(result.data);
        setTotalPages(Math.ceil(len / PAGE_SIZE));
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, houses.length);
    setNowHouses(houses.slice(startIndex, endIndex));
  }, [houses, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? (
        <img
          src="/images/spinner.gif"
          alt="Loading Spinner"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />
      ) : houses.length === 0 ? (
        <div>No houses found</div>
      ) : (
        <>
          <HouseContainer houses={nowHouses} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default IndexPage;
