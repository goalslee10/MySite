export default function Header() {
    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="30px" height="30px"><path fill="#dbf2ff" d="M3.5 38.5L3.5 13.286 19.998 3.58 36.5 13.286 36.5 38.5z"/><path fill="#7496c4" d="M19.998,4.16L36,13.572V38H4V13.572L19.998,4.16 M19.998,3L3,13v26h34V13L19.998,3L19.998,3z"/><path fill="#b5ddf5" d="M4 34H36V38H4z"/><path fill="#f78f8f" d="M19.998 4.645L1.5 15.955 1.5 12.896 19.998 1.586 38.5 12.896 38.5 15.955z"/><path fill="#c74343" d="M19.998,2.172L38,13.176v1.887L20.519,4.378l-0.522-0.319l-0.522,0.319L2,15.063v-1.887 L19.998,2.172 M19.998,1L1,12.615v4.231L19.998,5.231L39,16.846v-4.231L19.998,1L19.998,1z"/><g><path fill="#ffc49c" d="M14.5 21.5H25.5V38.5H14.5z"/><path fill="#a16a4a" d="M25,22v16H15V22H25 M26,21H14v18h12V21L26,21z"/></g><path fill="#a16a4a" d="M23 30A1 1 0 1 0 23 32A1 1 0 1 0 23 30Z"/></svg>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">GOALS</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Python</a>
            <a className="mr-5 hover:text-gray-900">Java</a>
            <a className="mr-5 hover:text-gray-900">Link</a>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
        </div>
        <hr></hr>
        </header>
    )
}