import Table from "../../../../../common/components/Table";
import Tag from "../../../../../common/components/Tag";

interface Props {
  emailConfirmedAt: boolean | null;
}

const EmailConfirmedAtColumn = ({ emailConfirmedAt }: Props) => {
  return (
    <Table.Cell>
      <Tag type={emailConfirmedAt ? "success" : "error"}>
        {emailConfirmedAt ? "Подтвержден" : "Не подтвержден"}
      </Tag>
    </Table.Cell>
  );
};

export default EmailConfirmedAtColumn;
