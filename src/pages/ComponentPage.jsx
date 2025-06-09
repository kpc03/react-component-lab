import React from 'react';
import { useParams } from 'react-router-dom';
import * as Components from '../components';
import { useNavigate } from 'react-router-dom';

const ComponentPage = () => {
    const { componentName } = useParams();
    const navigate = useNavigate();
    const ComponentToRender = Components[componentName];

  
    if (!ComponentToRender) {
      return (
        <section>
            <div className="flexWrapper itemCenter">
                <h2>Component "{componentName}" not found. It's coming soon...</h2>
            </div>
        </section>
      );
    }
  
    return (
      <section>   
        <button onClick={() => navigate(-1)} className='backBtn'> ← Back </button>  
        <ComponentToRender />
      </section>
    );
  };
  
  export default ComponentPage;