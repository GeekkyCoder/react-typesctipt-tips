import './App.css'
import ChildrenPropExample from './children_props/children_props'
import ImageUploader from './forward-ref/forward-ref'
import Memo from './memo/memo'
import AdminPanel from './read-only/read_only'
import ToArrayExample from './to_array/to_array'
import MainArtificialIntelligence from './use-previous/use_previous'
import Page from './use_imperative_handle/page'

function App() {

  return (
    <>
    {/* <AdminPanel data='faraz' metrics={["hello", "hi", "how are you"]}/> */}
    {/* <ToArrayExample data={["one", "two","three"]}/> */}
    {/* <Memo/> */}
    {/* <ChildrenPropExample/> */}
    {/* <ImageUploader/> */}
    {/* <Page/> */}
    <MainArtificialIntelligence/>
      </>
  )
}

export default App
