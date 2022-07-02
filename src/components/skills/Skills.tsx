import SkillItem from "./SkillItem";
import {AiFillHtml5} from "react-icons/ai";
import {FaCss3Alt, FaReact, FaNode} from "react-icons/fa";
import {SiTypescript} from "react-icons/si";
import {DiMongodb} from "react-icons/di";
import {TbBrandKotlin} from "react-icons/tb";
import {BiGitBranch} from "react-icons/bi";

import "./Skills.scss";

const Skills = () => {
  return (
    <div id="skills">
      <h1>
        <strong>What I know</strong>
      </h1>
      <div className="skills">
        <SkillItem
          linkRef={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          name={"HTML"}
          icon={<AiFillHtml5 />}
        />
        <SkillItem
          linkRef={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          name={"CSS"}
          icon={<FaCss3Alt />}
        />
        <SkillItem
          linkRef={"https://kotlinlang.org/"}
          name={"Kotlin"}
          icon={<TbBrandKotlin />}
        />
        <SkillItem
          linkRef={"https://www.typescriptlang.org/"}
          name={"TypeScript"}
          icon={<SiTypescript />}
        />
        <SkillItem
          linkRef={"https://git-scm.com/"}
          name={"Git and GitHub"}
          icon={<BiGitBranch />}
        />
        <SkillItem
          linkRef={"https://reactjs.org/"}
          name={"React JS"}
          icon={<FaReact />}
        />
        <SkillItem
          linkRef={"https://nodejs.org/en/"}
          name={"Node.js"}
          icon={<FaNode />}
        />
        <SkillItem
          linkRef={"https://www.mongodb.com/"}
          name={"MongoDB"}
          icon={<DiMongodb />}
        />
      </div>
    </div>
  );
};

export default Skills;
