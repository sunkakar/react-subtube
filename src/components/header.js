import React from "react";
import { Header, Segment } from 'semantic-ui-react';

const onClickSubtube = (e) => {alert("Alert Test");}

class HeaderComp extends React.Component{
    render(){
        return (
            <Segment clearing>
                <Header as='h5' floated='right' textAlign="center">
                    Youtube Clone for only subscribtions
                </Header>
                <Header onClick={onClickSubtube} as='h2' floated='left'>
                    SubTUBE
                </Header>
            </Segment>
        );
    }
}

export default HeaderComp;