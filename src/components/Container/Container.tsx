import { IContainerProps } from "../../interface/IContainerProps";
import './Container.css';

const Container: React.FC<IContainerProps> = ({children}) => {
  return(
    <div className='container'>{children}</div>
  );
};

export { Container };