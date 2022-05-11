import { ReactNode } from "react";
import style from "./header.module.scss";

interface HeaderProps {
  children?: ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  return <div className={style.header}>{children}</div>;
};

export default Header;
