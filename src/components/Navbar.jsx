import { links } from "../../data";
const navbar = () => {
  return (
    <nav className="bg-blue-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-48 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-blue-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((data) => {
            const { href, id, text } = data;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg tracking-wide hover:text-blue-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default navbar;
