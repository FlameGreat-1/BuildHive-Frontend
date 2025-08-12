import BuildHiveLoader from "@/generalComponents/BuildHiveLoader"

const Messages = () => {
  
  const loading = true

  if(loading)return <BuildHiveLoader/>
  
  return (
    <div>Messages</div>
  )
}

export default Messages