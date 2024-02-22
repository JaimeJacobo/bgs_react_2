import Pagination from 'react-bootstrap/Pagination'

const AllUsers = () => {
  return (
    <div>
      <Pagination>
        {/* <Pagination.First /> */}
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{8}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{10}</Pagination.Item>

        <Pagination.Next />
        {/* <Pagination.Last /> */}
      </Pagination>
    </div>
  )
}

export default AllUsers

// 10 paginas de 5 usuarios cada una
