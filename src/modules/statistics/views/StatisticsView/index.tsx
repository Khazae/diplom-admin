import { useEffect, useState } from "react";
import DashboardStatistic from "../../components";

const StatisticsView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fakeData = async (url: string): Promise<any> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      data: [
        "5",
        "10",
        "5",
        "15",
        "50",
        "60",
        "70",
        "80",
        "90",
        "150",
        "300",
        "500",
      ],
    };
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    fakeData("fakeUrl")
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <DashboardStatistic newUsers={data} loading={loading} errors={error} />
  );
};

export default StatisticsView;
