const Sidebar = ({count, titles, readTime}) => {
    
    return (
        <div className='me-6 w-1/3 sticky top-0'>
            <h3 className='text-center text-lg font-bold text-purple-600 border border-purple-400 rounded-lg bg-purple-100 p-5 mb-5'>Spent time on read : {readTime}</h3>
            <div className='bg-gray-100 py-2 rounded-lg sticky top-0'>
                <h3 className='font-bold text-lg pt-4 ps-6'>Bookmarked Blogs : {count}</h3>
                {
                   titles.map(title => <p className='w-5/6 bg-white rounded-lg mx-auto my-3 px-3 py-2'>{title}</p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;