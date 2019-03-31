import React from 'react';
import { Card, List , Label, Header, Icon , Button} from 'semantic-ui-react'
import './App.css';


const Projects = ({projects}) => {
    
       return (<div className='content'  >   
         <Header as='h2' inverted textAlign='left'>
       <Icon name='codepen' textAlign='center' />
       <Header.Content>
         Personal Projects
       </Header.Content>
     </Header>
     <Card.Group stackable   itemsPerRow={4}>
        {projects.map(project=>(<Card className='projects'>
              <Card.Content>
                <Card.Header>
                  {project.name}
                </Card.Header>
                <Card.Meta>
                    {project.tech}
                </Card.Meta>
                <Card.Description>
                  {project.details}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button href={project.demo} target='_blank' basic color='green'>Live Demo</Button>
                  <Button href={project.github} target='_blank' basic color='orange'> <Icon name='github' /> Github</Button>
                </div>
              </Card.Content>
            </Card>)
        )}
     </Card.Group> 
       </div>)
   
       
   }
   
   export default Projects
   