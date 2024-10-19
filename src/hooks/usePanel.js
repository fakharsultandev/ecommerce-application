import { useContext } from "react";
import { PanelContext } from "../contexts/panelContext";

export default function usePanel() {
  return useContext(PanelContext);
}
