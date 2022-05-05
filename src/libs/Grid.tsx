import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

function Grid(props: GridProps) {
  const { children } = props;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      {children}
    </div>
  );
}

export default Grid;
