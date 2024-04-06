
const page = ({params} : {params : {categorySlug : string}}) => {
  return (
    <div>{params.categorySlug}</div>
  )
}

export default page