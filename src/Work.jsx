import React from 'react'
import { Card, List , Label, Header, Icon } from 'semantic-ui-react'
import './App.css';

const WorkCard =({company, details, appreciations, duration, role})=>{
let description= details.map((list, index) =>(
        <List.Item key={`description${index}`}>
        <List.Icon name='code' />
        <List.Content>{list}</List.Content>
      </List.Item>));

    if(appreciations&&appreciations.length>0){
    description.push(
        <List.Item key={'appreciations'}>
        <List.Icon name='thumbs up' />
        <List.Content>{appreciations}</List.Content>
      </List.Item>)
    }

    return (<Card fluid >
      <Card.Content>
      <Label  ribbon='right' color='orange'>{duration}</Label>
        <Card.Header className='company'>{company}</Card.Header>
        <Card.Meta className='role'>{role}</Card.Meta>
        <Card.Description className='description'>
        <List>
        {description}
        </List>
        </Card.Description>
      </Card.Content>
    </Card>)}


const Work = ({work}) => {
 
    return (<div className='content'  >   
      <Header as='h2' inverted textAlign='left'>
    <Icon name='code' textAlign='center' />
    <Header.Content>
      Work Experience
    </Header.Content>
  </Header>
    <Card.Group stackable centered  itemsPerRow={2}> 
    {work.map((workCard, index)=> <WorkCard key={`workCards${index}`} {...workCard}/>)}
    </Card.Group>
    </div>)

    
}

export default Work
