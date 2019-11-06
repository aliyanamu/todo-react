import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import getTodos from '../store/actions/getTodos'
import editTodo from '../store/actions/editTodo'
import removeTodo from '../store/actions/removeTodo'
import TodoModal from './TodoModal'
import { CardGroup, Card, Button, Message, Icon } from 'semantic-ui-react'
import '../css/Todo.css'

class TodoGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: {
        id: '',
        title: '',
        priority: '',
        note: '',
        isDone: false
      },
      text: '',
      filter: 'all'
    }
  }

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { items, width } = this.props
    const { init } = this.state
    return (
      <Fragment>
        <TodoModal type={{name: 'Create', classText: 'createBtn', singleItem: init}}/>
        <Card style={{
          'backgroundColor': 'white',
          'overflow': 'scroll',
          'margin': '150px 0 0',
          'padding': width < 1200 ? '30px' : '3%',
          'width': '100%', 'height': '100%',
          'borderRadius': '50px 50px 0 0',
        }}>
          <CardGroup>
          {
            items.length > 0 ? items.map((item, index) => (
              <Card key={index}>
                <Card.Content>
                  <Card.Header align='left'>{item.title}</Card.Header>
                  <span>
                  <div style={{'width': '80px',
                    'backgroundColor':
                    (item.priority === 3 ? '#F01F1F' :
                    (item.priority === 2 ? '#FC8E09' :
                    (item.priority === 1 ? '#0A9FC0' :
                    '#EFF1F3'))),
                    'marginTop': '10px',
                    'color': 'white',
                    'fontWeight': '600'
                  }}>
                    <p>{(item.priority === 3 ? 'HIGH' : (item.priority === 2 ? 'MEDIUM' : 'LOW'))}</p>
                  </div>
                  </span>
                  <Card.Description style={{'marginTop': '20px'}} align='left'>{item.note}</Card.Description>
                </Card.Content>
                <Card.Content extra align='right'>
                  <TodoModal type={{name: 'Edit', classText: 'editBtn', singleItem: item}}/>
                  {
                    item.isDone ? <Button circular icon='check' color='green' size='large'></Button> :
                    <Button circular icon='check' color='green' inverted size='large' onClick={() => {this.props.doneTodo(item)}}></Button>
                  }
                  <Button circular icon='trash' color='red' size='large' onClick={() => {this.props.removeTodo(item.id)}}></Button>
                </Card.Content>
              </Card>
            )) : (
              <Message icon style={{
                'maxWidth': '300px',
                'color': '#271fd5',
                'backgroundColor': 'transparent',
                'boxShadow': 'none',
                'margin': 'auto'
              }}>
                <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  We are fetching that content for you.
                </Message.Content>
              </Message>
            )
          }
          </CardGroup>
        </Card>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  items: state.todoReducer.items
})

const mapDispatchToProps = dispatch => ({
  getTodos : () => dispatch(getTodos()),
  doneTodo : (item) => dispatch(editTodo(item.id, item.title, item.priority, item.note, true)),
  removeTodo : (id) => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoGroup)