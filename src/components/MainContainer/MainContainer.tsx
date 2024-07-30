import React, { ReactNode } from 'react';
import './MainContainer.css';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default MainContainer;
