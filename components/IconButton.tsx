import { Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* ICON */}
      <EvilIcons name={icon} size={24} color="gray" />
      {/* NUMBER */}
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </View>
  );
};

export default IconButton;
