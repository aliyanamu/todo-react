import React, { useState } from 'react'
import { connect } from 'react-redux'
import getTodo from '../store/actions/getTodo'
import editTodo from '../store/actions/editTodo'
import createTodo from '../store/actions/createTodo'
import { Button, Modal, Form, Radio } from 'semantic-ui-react'
import '../css/Todo.css'

const SignModal = props => {
  const { type, error, loading } = props
  const [singleItem, setSingleItem] = useState(type.singleItem)

  const handleCreate = (title, priority, note) => {
    props.createTodo(title, priority, note)
  }

  const handleEdit = (id, title, priority, note) => {
    props.editTodo(id, title, priority, note)
  }

  const onInputChange = (e) => {
    const { name, value } = e.target

    setSingleItem({ ...singleItem, [name]: value })
  }

  return (
    <Modal trigger={ type.name === 'Create' ?
      <Button circular icon='add' size='huge' className={type.classText}></Button> :
      <Button circular icon='pencil' className={type.classText} size='large'></Button>  }>
      <Modal.Header>{type.name}</Modal.Header>
      <Modal.Content>
        <Form loading={loading}>
          {
            error.length > 0 && <p className='errorNotif'>{ error }</p>  
          }
          <Form.Field>
            <label>Title</label>
            <input placeholder='Title' 
              onChange={onInputChange}
              value={singleItem.title}
              name='title'
            />
          </Form.Field>
          {/* <Form.Field>
            <label>Priority</label>
            <input placeholder='Priority'
              onChange={onInputChange}
              value={singleItem.priority}
              name='priority'
            />
          </Form.Field> */}
          <Form.Field>
            <Radio
              label='Low'
              name='radioGroup'
              value={1}
              checked={singleItem.priority === 1}
              onChange={onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Medium'
              name='radioGroup'
              value={2}
              onChange={onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='High'
              name='radioGroup'
              value={3}
              onChange={onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Note</label>
            <input placeholder='Note'
              onChange={onInputChange}
              value={singleItem.note}
              name='note'
            />
          </Form.Field>
          {
            type.name === 'Create' ? (
              <Button className='createModalBtn' size='large' onClick={() => handleCreate(singleItem.title, singleItem.priority, singleItem.note)}>{type.name}</Button>
            ) : (
              <Button className='editModalBtn' size='large' onClick={() => handleEdit(singleItem.id, singleItem.title, singleItem.priority, singleItem.note)}>{type.name}</Button>
            )
          }
        </Form>
      </Modal.Content>
    </Modal>
  )
}

const mapStateToProps = state => ({
  item: state.todoReducer.item,
  error: state.todoReducer.error,
  loading: state.todoReducer.loading
})

const mapDispatchToProps = dispatch => ({
  getTodo : (id) => dispatch(getTodo(id)),
  editTodo : (id, title, priority, note) => dispatch(editTodo(id, title, priority, note)),
  createTodo : (title, priority, note) => dispatch(createTodo(title, priority, note))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignModal)