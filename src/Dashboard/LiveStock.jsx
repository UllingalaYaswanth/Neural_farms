import {Routes, Route } from 'react-router-dom'
import Dashboard from '../LiveStock/Dashboard';
import Goats from '../LiveStock/Goats';
import Feeding from '../LiveStock/Feeding';
import Health from '../LiveStock/Health'
import Breeding from '../LiveStock/Breeding'
import Settings from '../LiveStock/Settings'
import Water from '../LiveStock/Water'
import Layout from '../components/Layout';

function LiveStock() {
  return (
        <Routes>
            <Route path="/" element={<Layout/>} >
            <Route index element={<Dashboard />} />
            <Route path="goats" element={<Goats />} />
            <Route path="feeding" element={<Feeding />} />
            <Route path="health" element={<Health />} />
            <Route path="water" element={<Water />} />
            <Route path="breeding" element={<Breeding />} />
            <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
  )
}

export default LiveStock