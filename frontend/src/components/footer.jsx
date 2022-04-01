import React from 'react'
import {Container ,Row , Col} from 'react-bootstrap'
const footer = ()=>{
    return(
        <>
        <footer>
          <Container>
              <Row>
                  <Col className="text-center">
                    <span>
                        copyright &copy; Tushar pal
                    </span>
                  </Col>
              </Row>
          </Container>
        </footer>
        </>
    )
}

export default footer