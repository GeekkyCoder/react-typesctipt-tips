import './App.css'
import ChildrenPropExample from './children_props/children_props'
import Memo from './memo/memo'
import AdminPanel from './read-only/read_only'
import ToArrayExample from './to_array/to_array'

function App() {

  return (
    <>
    {/* <AdminPanel data='faraz' metrics={["hello", "hi", "how are you"]}/> */}
    {/* <ToArrayExample data={["one", "two","three"]}/> */}
    {/* <Memo/> */}
    <ChildrenPropExample/>
    </>
  )
}

export default App
