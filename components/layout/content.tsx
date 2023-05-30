import { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-lg px-2 mx-auto w-full flex flex-col lg:my-6 my-2">
      {children}
    </div>
  );
};

export default Content;
