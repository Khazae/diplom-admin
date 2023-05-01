import Table from "../../../../../common/components/Table";
import Tag from "../../../../../common/components/Tag";

interface Props {
  firstName: string | null;
  lastName: string | null;
}

const FullNameColumn = ({ firstName, lastName }: Props) => {
  const getFullName = () => {
    return `${firstName || ""} ${lastName || ""}`;
  };

  return (
    <Table.Cell>
      {firstName || lastName ? (
        getFullName()
      ) : (
        <Tag type="warning">Не указано</Tag>
      )}
    </Table.Cell>
  );
};

export default FullNameColumn;
