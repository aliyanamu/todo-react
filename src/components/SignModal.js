import React, { Component } from 'react'
import { connect } from 'react-redux'
import login from '../store/actions/login'
import register from '../store/actions/register'
import { Button, Modal, Form, Loader } from 'semantic-ui-react'
import '../css/Auth.css'

class SignModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleRegister(name, email, password) {
    this.props.register(name, email, password)
  }

  handleLogin(email, password) {
    this.props.login(email, password)
  }

  onInputChange = (e) => this.setState({[e.target.name]: e.target.value})

  render() {
    const { type, error, loading } = this.props
    const { name, email, password } = this.state
    return (
      <Modal trigger={ <Button className={type.classText} size='large' inverted>{type.name}</Button> }>
        <Modal.Header>{type.name}</Modal.Header>
        <Modal.Content>
          <Form>
            {
              error.length > 0 && <p className='errorNotif'>{ error }</p>  
            }
            {
              type.name === 'Register' &&
              <Form.Field>
                <label>Name</label>
                <input placeholder='Name' 
                  onChange={this.onInputChange}
                  value={name}
                  name='name'
                />
              </Form.Field>
            }
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' 
                onChange={this.onInputChange}
                value={email}
                name='email'
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password'
                onChange={this.onInputChange}
                value={password}
                type='password'
                name='password'
              />
            </Form.Field>
            {
              loading ? <Button className='authModalBtn' size='large'><Loader active inline='centered' size='tiny'/></Button> : (type.name === 'Login' ?
                (
                  <Button className='authModalBtn' size='large' onClick={() => this.handleLogin(email, password)}>{type.name}</Button>
                ) : (
                  <Button className='authModalBtn' size='large' onClick={() => this.handleRegister(name, email, password)}>{type.name}</Button>
                )
              )
            }
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  error: state.authReducer.error,
  loading: state.authReducer.loading
})

const mapDispatchToProps = dispatch => ({
  login : (email, password) => dispatch(login(email, password)),
  register : (name, email, password) => dispatch(register(name, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignModal)