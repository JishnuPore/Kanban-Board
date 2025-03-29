import { useState } from "react";

const Navbar = ({
  onSearch,
  onKanbanClick,
  onAboutClick,
}: {
  onSearch: (value: string) => void;
  onKanbanClick: () => void;
  onAboutClick: () => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const toggleMobileSearch = () => {
    setMobileSearchVisible(!mobileSearchVisible);
  };

  return (
    <nav className="bg-white px-6 py-4 shadow-lg border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 w-full sm:w-auto justify-between">
          <h2 className="text-2xl font-bold text-blue-600">Kanban Board</h2>

          <div className="flex items-center gap-4 sm:hidden">
            <button
              className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
              onClick={toggleMobileSearch}
              aria-label="Toggle search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 w-full sm:w-auto justify-between">
          <div className="flex gap-4">
            <button
              onClick={onKanbanClick}
              className="px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
            >
              What's Kanban?
            </button>
            <button
              onClick={onAboutClick}
              className="px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
            >
              About Us
            </button>
          </div>

          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Mobile search - conditionally visible based on toggle state */}
        {mobileSearchVisible && (
          <div className="w-full sm:hidden mt-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
