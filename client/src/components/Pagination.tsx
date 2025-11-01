const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-blue-400  hover:text-blue-600 hover:bg-slate-30000 hover:scale-[1.03] transition-all duration-200 ease-out ">
                Prev
            </button>
            <div className="flex items-center gap-4 text-sm">
                <button className="px-2 rounded-xl bg-slate-200 text-sm font semibold text-black hover:text-blue-600 hover:bg-slate-30000 hover:scale-[1.03] transition-all duration-200 ease-out ">
                    1
                </button>
                <button className="px-2 rounded-xl text-sm font semibold text-black hover:text-blue-600 hover:bg-slate-30000 hover:scale-[1.03] transition-all duration-200 ease-out ">
                    2
                </button>
                <button className="px-2 rounded-xl text-sm font semibold text-black hover:text-blue-600 hover:bg-slate-30000 hover:scale-[1.03] transition-all duration-200 ease-out ">
                    3
                </button>
                ....
                <button className="px-2 rounded-xl text-sm font semibold text-black hover:text-blue-600 hover:bg-slate-30000 hover:scale-[1.03] transition-all duration-200 ease-out ">
                    10
                </button>
            </div>
            <button className="py-2 px-4 rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-blue-400  hover:text-blue-600 hover:bg-slate-300 hover:scale-[1.03] transition-all duration-200 ease-out">
                Next
            </button>
        </div>
    );
};

export default Pagination;
