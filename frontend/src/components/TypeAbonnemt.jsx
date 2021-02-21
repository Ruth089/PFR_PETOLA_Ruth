import React, {useState} from 'react'
import { Segment} from 'semantic-ui-react'
import Table from 'react-bootstrap/Table'


const TypeAbonnemt = ({abonnements}) => {

  return (

    <Table striped bordered hover style={{background : "white"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Tarif</th>
        </tr>
      </thead>
      <tbody>
        {abonnements.map(abonnement =>(
          <tr>
            <td>{abonnement.id}</td>
            <td>{abonnement.type_de_collecte}</td>
            <td>{abonnement.prix}</td>
          
          </tr>
        ))}
      </tbody>
    </Table>

    // <Segment.Group>
    //   <Segment>Abonnement</Segment>
    //   <Segment.Group horizontal>
    //     <Segment>Type</Segment>
    //     <Segment>Tarif</Segment>
    //   </Segment.Group>
    //   {abonnements.map(abonnement =>(
    //   <Segment.Group horizontal>
    //     <Segment> {abonnement.type_de_collecte} </Segment>
    //     <Segment>{abonnement.prix}</Segment>
    //   </Segment.Group>
    //   ))}
    // </Segment.Group>

  )

} 


export default TypeAbonnemt;