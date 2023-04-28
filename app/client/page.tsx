'use client'
import React from 'react'
import useSWR from 'swr'

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url:string) => fetch(url).then((res) => res.json());

function ClientPage() {
const {data,error,isLoading} = useSWR(url, fetcher);
if(error) return  <div>Error</div>
if(isLoading) return <div>loading</div>

return(
  <>
  <b>Client Page</b>
  <div>
  
  {data.content}
</div>
</>
)
}

export default ClientPage
