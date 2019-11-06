import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import SignModal from './SignModal'
import logout from '../store/actions/logout'
import { Button } from 'semantic-ui-react'
import '../css/Auth.css'

class Auth extends Component {
  render() {
    const { token } = this.props
    return (
      <div className='authButton'>
        {
          token ? <Button content='Logout' inverted onClick={() => {this.props.logout()}}/> :
          <Fragment>
            <SignModal type={{name: 'Register', classText: 'registerText'}}/>
            <SignModal type={{name: 'Login', classText: 'loginText'}}/>
          </Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.authReducer.token
})

const mapDispatchToProps = dispatch => ({
  logout : () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)