import React from "react"
import {Card, Button} from "semantic-ui-react"


const cardApproval = (props) => {

    return (
        <Card.Group>
            <Card>
                <Card.Content extra>
                    <div className={"content"}>
                        {props.children}
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>

    );
}

export default cardApproval;


