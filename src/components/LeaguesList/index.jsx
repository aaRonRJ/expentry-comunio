import React, { Component } from 'react'

import styles from './leagues-list.css'

class LeaguesList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openAddLeagueText: false
    }

    this.handleAddLeague = this.handleAddLeague.bind(this)
  }

  handleAddLeague () {
    console.log('Añadir liga')
  }

  render () {
    let leaguesRender = ''
    if (this.props.user.leagues.length > 0) {
      leaguesRender = 'Hay ligas!!'
    } else {
      leaguesRender = "No hay ligas :'("
    }

    return (
      <div>
        <header className={styles.root}>
          <h3>Ligas</h3>
          <button type='button' className={styles.button} onClick={this.handleAddLeague}>
            <span className={styles.addLeague}>+</span>
          </button>
        </header>
        {leaguesRender}
      </div>
    )
  }
}

export default LeaguesList
