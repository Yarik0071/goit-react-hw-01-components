import React from "react"
import PropTypes from 'prop-types';

function Statistic( { title, stats } ) {   
  return (
  <section className="statistics">

  {
    title && <h2 className="title">Upload stats</h2>
  }
  
  <ul className="stat-list"> 
     {
       stats.map((item) => (
        <li className="stat-item" key={item.id}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>))
     } 
  </ul> 
  </section>)   
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object),
}

export default Statistic