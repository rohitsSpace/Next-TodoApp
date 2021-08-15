import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Icon extends React.PureComponent {
  render() {
    const {
      icon,
      onClick,
      className = "",
      fixedWidth = false,
      spin = false,
      title = "",
      rotation,
      ...rest
    } = this.props;
    const isStringIcon = icon && icon.constructor === String;

    if (isStringIcon && (icon.startsWith("fab-") || icon.startsWith("fal-"))) {
      const iconClass = icon.slice(0, 3);
      const iconName = icon.slice(4, icon.length);
      return (
        <FontAwesomeIcon
          className={className}
          fixedWidth={fixedWidth}
          icon={[iconClass, iconName]}
          onClick={onClick}
          spin={spin}
          rotation={rotation}
          title={title}
        />
      );
    }

    if (!icon || (isStringIcon && icon.startsWith("fa-"))) {
      return (
        <FontAwesomeIcon
          className={className}
          fixedWidth={fixedWidth}
          icon={["fal", "diamond"]}
          onClick={onClick}
          spin={spin}
          rotation={rotation}
          title={title}
        />
      );
    }

    if (isStringIcon) {
      return (
        <FontAwesomeIcon
          className={className}
          fixedWidth={fixedWidth}
          icon={["fal", icon]}
          onClick={onClick}
          spin={spin}
          rotation={rotation}
          title={title}
        />
      );
    }

    return (
      <FontAwesomeIcon
        className={className}
        fixedWidth={fixedWidth}
        icon={icon}
        onClick={onClick}
        spin={spin}
        rotation={rotation}
        title={title}
        {...rest}
      />
    );
  }
}

export default Icon;
