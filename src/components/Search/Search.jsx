import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchField } from "../../actions/actionCreators";

const Search = () => {
  const { items, loading, error, search } = useSelector((state) => state.skills);     //приходят объекты, а надо переменные
  const dispatch = useDispatch();

  const chnageHandler = e => {
    dispatch(changeSearchField(e.target.value));
  }

  console.log(items)
  const hasQuery = search !== "";

  return (
    <div className='searchCont'>
      <div className='searchFieldCont'>
        <input className='searchField' type='search' onChange={chnageHandler} value={search} />
      </div>
      {hasQuery &&  loading && <div className='loadingBlock'>Searching? please wait...</div>
      }
      {error ? 
        <div className='errorMessageBox'></div> :
        <ul className='skillsList'>
          { items.map( e => <li key={e.id} className='skillsItem'>{e.name}</li>) }
        </ul> 
      }
    </div>
  )
}

export default Search
