import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../header'

const Main = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <div>
            <Link to="/dashboard/profile/04a5b97e-6681-4a48-a3bb-229bb9e405c2">Go To Profile</Link>
          </div>
          <div>
            <Link to="/dashboard">Go To Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
