import React from 'react'

import Table from 'react-bootstrap/Table'

const Horaire = ({horaires}) => {

  return (
    <Table striped bordered hover style={{background : "white"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Jours</th>
          <th>Interval temps</th>
        </tr>
      </thead>
      <tbody>
        {horaires.map(horaire => (
          <tr>
            <td>{horaire.id}</td>
            <td>{horaire.jour}</td>
            <td>{horaire.heure_debut} - {horaire.heure_fin}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Horaire
