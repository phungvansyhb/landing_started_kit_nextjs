import { footerData } from "@/mocks/footer";
import MenuNGS from "../../icon/logo/MenuNGS";
import InforFooter from "./info";

const Footer = () => {
  return (
    <section className="w-full flex flex-col gap-5 justify-between items-center mx-auto px-16 py-10 bg-[#000] text-white font-thin">
      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="flex flex-col justify-center items-start">
          <MenuNGS className="mb-3" />
          <p>Địa chỉ: {footerData.contactData.address}</p>
          <p>Số điện thoại: {footerData.contactData.phone}</p>
          <p>Email: {footerData.contactData.email}</p>
        </div>
        <div className="flex flex-col">
          <InforFooter title="Dịch vụ" info={footerData.service} />
        </div>
        <div className="flex flex-col">
          <InforFooter title="Cong ty" info={footerData.company} />
        </div>
        <div className="flex flex-col">
          <InforFooter title="Ho tro" info={footerData.support} />
        </div>
      </div>
      <div className="w-full flex justify-between items-center border-t-2 pt-5">
        <p>International (EN)</p>
        <ul className="flex justify-between items-center gap-3">
          <li>Risk & Violation Reporting</li>
          <li>Legal Notice</li>
          <li>Terms & Conditions</li>
          <li>Data Protection Policy</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
