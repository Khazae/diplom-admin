import Table from "../../../../../common/components/Table";
import Tag from "../../../../../common/components/Tag";

interface Props {
  blockedAt: string | null;
}

const BlockedAtColumn = ({ blockedAt }: Props) => {
  return (
    <Table.Cell>
      <Tag type={blockedAt ? "error" : "success"}>
        {blockedAt ? "Заблокирован" : "Не заблокирован"}
      </Tag>
    </Table.Cell>
  );
};

export default BlockedAtColumn;
