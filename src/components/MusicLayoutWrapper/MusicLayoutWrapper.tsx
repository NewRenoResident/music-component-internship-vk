import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

function MusicLayoutWrapper({ children, className }: IProps) {
  if (className) {
    return <div className={className}>{children}</div>;
  }

  return <>{children}</>;
}

export default MusicLayoutWrapper;
