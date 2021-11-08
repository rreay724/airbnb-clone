import { footerText } from "../footerText";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 px-32 py-14 text-gray-600 gap-y-10">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">{footerText.about.title}</h5>
        {footerText.about.text.map((text) => (
          <p>{text}</p>
        ))}
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">{footerText.community.title}</h5>
        {footerText.community.text.map((text) => (
          <p>{text}</p>
        ))}
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">{footerText.host.title}</h5>
        {footerText.host.text.map((text) => (
          <p>{text}</p>
        ))}
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">{footerText.support.title}</h5>
        {footerText.support.text.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default Footer;
