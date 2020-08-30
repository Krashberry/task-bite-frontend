import React from 'react';
import Silo from '../../pages/Silo'

const ProjectSilo = (props) => {
    return (
      <div>
        <ul>
          { props.currentuser ?
            <>
              <Silo />
            </>
            :
            <>
            </>
          }
        </ul>
      </div>
    );
}


export default ProjectSilo;
