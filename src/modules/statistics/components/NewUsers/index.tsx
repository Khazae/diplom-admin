import ChartLine from "../../../../common/components/ChartLine";
import { labels } from "../../../../entities/labels";
import styles from "./styles.module.css";

interface Props {
  newUsers: string[];
}

const NewUsers = ({ newUsers }: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Новые пользователи",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Новых пользователей",
        data: newUsers.map((number) => number),
        borderColor: "#0075ff",
        backgroundColor: "#0075ff",
      },
    ],
  };

  return <ChartLine data={data} options={options} />;
};

export default NewUsers;
