import { AiFillHtml5, AiOutlineFileSync } from "react-icons/ai";
import {
  BiLogoPython,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import {
  BsFiletypeScss,
  BsFillFileEarmarkPdfFill,
  BsImageFill,
} from "react-icons/bs";
import { FaCss3Alt, FaJava, FaReact } from "react-icons/fa";

export default function FileIcon(name: string) {
  const extension = name.split(".")[1];

  if (extension.toLowerCase().includes("ts")) {
    return <BiLogoTypescript />;
  } else if (
    extension.toLowerCase().includes("jsx") ||
    extension.toLowerCase().includes("tsx")
  ) {
    return <FaReact />;
  } else if (extension.toLowerCase().includes("css")) {
    return <FaCss3Alt />;
  } else if (extension.toLowerCase().includes("scss")) {
    return <BsFiletypeScss />;
  } else if (extension.toLowerCase().includes("html")) {
    return <AiFillHtml5 />;
  } else if (extension.toLowerCase().includes("js")) {
    return <BiLogoJavascript />;
  } else if (extension.toLowerCase().includes("java")) {
    return <FaJava />;
  } else if (extension.toLowerCase().includes("py")) {
    return <BiLogoPython />;
  } else if (extension.toLowerCase().includes("pdf")) {
    return <BsFillFileEarmarkPdfFill />;
  } else if (
    extension.toLowerCase().includes("png") ||
    extension.toLowerCase().includes("jpg") ||
    extension.toLowerCase().includes("jpeg")
  ) {
    return <BsImageFill />;
  } else {
    return <AiOutlineFileSync />;
  }
}
