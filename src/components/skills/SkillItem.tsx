import "./Skills.scss";

type Props = {
  linkRef: string;
  icon: any;
  name: string;
};

const SkillItem = ({ linkRef, icon, name }: Props) => {
  return (
    <div className="skills__children">
      <a href={linkRef}>{icon}</a>
      <h3>
        <strong>{name}</strong>
      </h3>
    </div>
  );
};

export default SkillItem;
