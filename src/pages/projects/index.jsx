import React, { useEffect, useState } from 'react'
import { Container, 
          Content, 
          Ul, 
          Li, 
          TitleProject, 
          Url, 
          Created_at } from './style'

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])
  const [itemsApiFiltered, setItemsApiFiltered] = useState([])
  const [filterName, setFilterName] = useState('')
  
  const inputFilter = (e)=>{
    setFilterName(e.target.value)
  }

  const handleFilter = ()=>{
    setItemsApiFiltered(
      filterName !== "" ? 
      itemsApi.filter((item)=>(item.name.toLowerCase() == 
      filterName.toLowerCase())): itemsApi
    )
  }


  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/AmandaLuiza/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        var data = await res.json()
        setItemsApi(data)
        setItemsApiFiltered(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <Container>
     <Content>
       <Ul>
        <div style={{display: 'flex'}}>
          <textarea value={filterName} onChange={inputFilter}/>
          <div>
          <button style = {{height: '35px', marginTop: 2}} onClick={handleFilter}>Filter</button>
          </div>
        </div>
        {itemsApiFiltered.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: {item.url}</Url>
            <Created_at>Creation Date: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}