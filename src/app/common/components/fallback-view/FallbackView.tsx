import { FC } from "react";
import { Rings } from 'react-loader-spinner';
import { LoaderWrapper } from "./style";

/**
 * Loader
 * @returns 
 */

const Loader: FC = () => {
  return <LoaderWrapper>
    <Rings color="blue" width={100} height={100} />
  </LoaderWrapper>
}

export default Loader;