
const Index = ({todoList}) => {

  return(
    <table className='list-table'>
    {todoList.map((item) => (
        <tr>
            <td>{item.id}</td>  
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
            <button>Update</button>
            </td>
      </tr>
    )
    )}
  </table>
  )
};

export default Index;