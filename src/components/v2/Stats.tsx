import data from '../../data/BooksData.json'

const Stats = () => {

  return (
    <div>
      <div className='bg-black bg-opacity-50 p-10 rounded-lg'>We've read: {data.length} Books</div>
    </div>
  )
}

export default Stats