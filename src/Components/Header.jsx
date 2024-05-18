
function Header() {
  return (
    <div className=' w-full absolute flex justify-between items-center p-7 text-white h-[70px] z-10'>
    <div>
        logo
    </div>
    <div className='w-[500px] h-full flex justify-center items-center '>
        <ul className=' flex w-full justify-between items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Support</li>
        </ul>
    </div>
   
</div>
  )
}

export default Header