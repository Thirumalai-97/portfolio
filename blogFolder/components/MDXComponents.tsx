const MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-bold text-cyan-400 mt-10" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold text-violet-400 mt-8" {...props} />,
  code: (props) => <code className="bg-gray-800 px-1 rounded text-cyan-300" {...props} />,
  p: (props) => <p className="my-5 text-gray-300 leading-relaxed" {...props} />,
};

export default MDXComponents;
