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
          return <span key={i} style={getStyleForShape(item)} className={`shape ${item.shape}`}>{item.id}</span>
        })
      }
    </div>
  );
}

export default Shapes;
