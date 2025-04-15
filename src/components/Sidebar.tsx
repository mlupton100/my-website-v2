const LinkedIn = () => (
  <a href="https://www.linkedin.com/in/martin-lupton-65036a244/">
    <svg
      width="20"
      height="20"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      className="text-indigo-50 fill-current"
    >
      <path
        d="M1.105 7.696h4.678v16.302H1.105V7.696zm2.22-2.04H3.29C1.6 5.657.5 4.41.5 2.833.5 1.222 1.63 0 3.357 0c1.726 0 2.787 1.22 2.82 2.828 0 1.578-1.094 2.83-2.852 2.83zM24.5 24h-5.304v-8.438c0-2.208-.83-3.714-2.655-3.714-1.394 0-2.17 1.016-2.532 1.998-.135.35-.114.84-.114 1.332V24H8.64s.067-14.946 0-16.304h5.254v2.558c.31-1.118 1.99-2.715 4.67-2.715 3.324 0 5.936 2.346 5.936 7.394V24z"
        fillRule="evenodd"
      ></path>
    </svg>
  </a>
);

export const Sidebar = () => (
  <div className="p-4 flex flex-col gap-6 w-64 text-indigo-50 bg-gray-900 border-r border-gray-700">
    <div className="pb-4 text-center border-b border-purple-600">
      👾 Martin Lupton 👾
    </div>
    <div className="px-2 text-center">
      <p>I'm a software engineer.</p>
    </div>
    <div className="px-2 mx-auto">
      <LinkedIn />
    </div>
  </div>
);
