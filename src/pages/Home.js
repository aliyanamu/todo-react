import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TodoGroup from '../components/TodoGroup'
import { Responsive, Grid, Card, Image } from 'semantic-ui-react'

class Home extends Component {
  render() {
    const { width } = this.props.size
    const { token } = this.props
    return (
      <Fragment>
        {
          token ? (
            <Responsive style={{
              'overflow': 'hidden',
              'height': '100%',
              'backgroundColor': '#271FD5'
            }}>
              <TodoGroup width={width}/>
            </Responsive>
          ) : (
            <Responsive style={{
              'overflow': 'hidden',
              'borderRadius': width < 1200 ? '' : '0 0 200px 0',
              'backgroundColor': '#271FD5'
            }}>
              <Grid style={{'margin': width < 1200 ? '150px auto' : '150px 10% -50px'}}>
                <Grid.Column mobile={16} tablet={16} computer={4}
                  style={{'fontSize': '5em', 'fontWeight': 'bold', 'color': 'white'}}>
                  <p style={{'marginTop': '50px'}}>It's time</p>
                  <p style={{'marginTop': '-50px'}}>TO-DO</p>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={12}>
                  <Card style={{
                    'width': width < 960 ? '100%' : '960px',
                    'borderRadius': '30px',
                    'overflow': 'hidden'
                  }}>
                    <Image src='https://media.istockphoto.com/vectors/planning-schedule-concept-vector-illustration-in-flat-style-vector-id1037375992?k=6&m=1037375992&s=612x612&w=0&h=p83Hg3b6fFeGKq3F_qzVwQaDBbUlG5JXDtFAoU60Gn4='
                      style={{'width': '800px', 'margin': '2%'}}/>
                  </Card>
                </Grid.Column>
              </Grid>
            </Responsive>
          )
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  token: state.authReducer.token
})

export default connect(mapStateToProps)(Home)