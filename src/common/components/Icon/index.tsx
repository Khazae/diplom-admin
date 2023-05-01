import classNames from "classnames";

interface Props {
  icon: string;
  className?: string;
}

const Icon = ({ icon, className }: Props) => {
  return <i className={classNames(`bx ${icon}`, className)}></i>;
};

export default Icon;
