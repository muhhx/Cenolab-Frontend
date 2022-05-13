import { Link } from "react-router-dom";
import { data } from "./data";
import * as C from "./styles";

export default function NotFound() {
  return (
    <C.Section>
        <C.Container>
            <C.Text>{data.title}</C.Text>
        </C.Container>
    </C.Section>
  )
}
