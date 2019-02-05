import React from "react";
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

// Google oauth button

// async function handleGoogleAuth() {
//     const client = await auth.getClient({
//       scopes: 'https://www.googleapis.com/auth/cloud-platform'
//     });
//     const projectId = await auth.getProjectId();
//     const url = `https://www.googleapis.com/dns/v1/projects/${projectId}`;
//     const res = await client.request({ url });
//     console.log(res.data);
//   }

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                        value: 'NO Value'
                    };
    }

    handleGoogleAuth = () => {
        this.setState({value: this.state.value + 'Found'})
    }

    render(){
        return (
            <Container className="video-container" textAlign="center">
                <p>{this.state.value}</p>
                <Button.Group>
                    <Button color="youtube" onClick={this.handleGoogleAuth.bind(this)}>Connect to Google</Button>
                        <Button.Or />
                    <Button>No, Thank You</Button>
                </Button.Group>
            </Container>
        );
    }
}

export default Content;