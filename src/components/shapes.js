import React from 'react';

const Shapes = (props) => {

  const data = props.data || [];

  const getStyleForShape = (item) => {
    let borderBottom = item.shape === "triangle" ?  `70px solid ${item.color}` : '';
    return {
      backgroundColor: item.color,
      borderBottom
    };
  };

  return (
    <div className="shapes">
      {
        data.map( (item,i) => {
          return (
            <div className='shapeBox'>
              <span key={i} style={getStyleForShape(item)} className={`shape ${item.shape}`}></span>
              <span>{item.id}</span>
            </div>
          );
        })
      }
    </div>
  );
}

export default Shapes;
