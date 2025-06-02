import { SvgIcon } from "@mui/material";
import { Layers } from "lucide-react";

const Logo = (props) => {
  return (
    <SvgIcon {...props} sx={{ fontSize: 32 }}>
      <Layers />
    </SvgIcon>
  );
};

export default Logo;
