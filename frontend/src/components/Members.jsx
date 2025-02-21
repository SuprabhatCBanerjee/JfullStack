const Members = ({data}) => {
    return(
        <>


  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
      <div className="min-w-0 flex-auto">
        <p className="text-sm/6 font-semibold text-gray-900">{data.name}</p>
        <p className="mt-1 truncate text-xs/5 text-gray-500">{data.email}</p>
      </div>
    </div>
  </li>
  
            
        </>
    );
};

export default Members;