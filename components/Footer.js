import { footerText } from "../footerText";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 px-32 py-14 text-gray-600 gap-y-10">
      {footerText.map(({ title, text, id }) => (
        <div key={id} className="space-y-4 text-xs text-gray-800">
          <h5 key={title} className="font-bold">
            {title}
          </h5>
          {text.map((text) => (
            <p key={text} className="cursor-pointer">
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
