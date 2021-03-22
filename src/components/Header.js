import { Icon } from "@iconify/react";
import hazardIcon from "@iconify/icons-mdi/biohazard";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={hazardIcon} /> Natural Events Tracker (Powered by NASA)
      </h1>
    </header>
  );
};

export default Header;
