import React from "react";
import { Link } from '../../components/Link';

const Err: React.FC = () => {

  return(
    <div>
      <Link url='http://localhost:3000/' texto='Home'/>
      <h1>Error 404 !!!</h1>
    </div>
  );
}

export default Err;