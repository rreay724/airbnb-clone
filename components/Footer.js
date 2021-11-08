import { footerText } from "../footerText";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 px-32 py-14 text-gray-600 gap-y-10">
      {footerText.map((item) => (
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">{item.title}</h5>
          {item.text.map((text) => (
            <p>{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
