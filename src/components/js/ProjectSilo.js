import React from 'react';
import Silo from '../../pages/Silo'

const ProjectSilo = (props) => {
    return (
      <div>
        <ul>
          { props.currentUser ?
            <>
              <Silo />
            </>
            :
            <>
            <h4>Nothing to see here folks.</h4>
            </>
          }
        </ul>
      </div>
    );
}


export default ProjectSilo;
