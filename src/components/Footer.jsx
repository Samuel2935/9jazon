

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-body-tertiary p-4 fixed bottom-0 left-0 right-0 z-index-1000 text-center'>
      <p>&copy;9JAZON {currentYear}</p>
    </div>
  )
}

export default Footer
