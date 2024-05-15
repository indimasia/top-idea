import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Tabs from './components/Tabs'
import IdeaList from './components/IdeaList'
import { getItemMostVoted, getItems } from '../../../utils/dbOperations'
import { useLocation } from 'react-router-dom'

function HomeScreen() {
  const [listIdea, setListIdea] = React.useState([])
  const hash = useLocation().hash;

  React.useEffect(() => {
      const fetchItems = async () => {
        // get current hash query
        switch (hash) {
          case "#hot":
          case "#top":
            await getItemMostVoted().then((res) => {
              setListIdea(res);
            });
            break;
          default:
            await getItems().then((res) => {
                setListIdea(res);
            });
          }
      }
      fetchItems()
  }, [hash])

  return (
    <>
        <Header/>
        <Hero/>
        <Tabs/>
        <IdeaList ideaList={listIdea}/>
    </>
  )
}

export default HomeScreen