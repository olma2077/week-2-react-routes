import React from 'react'
import { Link } from 'react-router-dom'

import Head from '../head'

const Dashboard = () => {
  return (
    <div id="title">
      Dashboard
      <Head title="Hello" />
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div>
            <Link to="/dashboard/profile/04a5b97e-6681-4a48-a3bb-229bb9e405c2">Go To Profile</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
