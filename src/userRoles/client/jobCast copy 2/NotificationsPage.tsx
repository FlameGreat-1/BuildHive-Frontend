import BuildHiveLoader from "@/generalComponents/BuildHiveLoader"

const NotificationsPage = () => {
  
  const loading = true

  if(loading)return <BuildHiveLoader/>
  
  return (
    <div>NotificationsPage</div>
  )
}

export default NotificationsPage