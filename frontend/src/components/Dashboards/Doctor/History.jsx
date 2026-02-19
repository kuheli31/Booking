import React from 'react'

function History(props) {

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '220px',
    height: '120px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    margin: '10px',
    cursor: 'pointer',
    transition: '0.3s'
  }

  return (
    <div style={boxStyle}>
        <h2 style={{margin: 0}}>{props.num}</h2>
        <h3 style={{margin: 0, fontSize: '16px', color: '#555'}}>
          {props.name}
        </h3>
    </div>
  )
}

export default History
