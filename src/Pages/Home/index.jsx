import React from "react"
import Layout from "../../Component/Layout"
import Card from "../../Component/Card"
import { ProductDetail } from "../../Component/ProductDetail"


function Home() {
  const [items, setItems] = React.useState(null)

  React.useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then(data=>setItems(data))

  },[])

  return (
    <> 
     <Layout>
    <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mr-52">
    {
      items?.map((item)=>(
        <Card key={item.id} data={item} />
      ))
    }

    </div>
    <ProductDetail />
  </Layout>


  
     </>
 
  )
}

export default Home