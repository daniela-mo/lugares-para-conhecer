import {
  Content,
  ContentSquare,
  Result,
  Top,
  Bandeira,
  Border,
  Edit,
  Text,
  P,
  Flag,
  NomePais,
} from "./styles";

import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

const Square = ({ list }: any) => {
  return (
    <Content>
      <ContentSquare>
        {list &&
          list.map((item: any) => (
            <Result key={item.country}>
              <Top>
                <Flag>
                  <Bandeira src={item.flag} alt={item.name} />
                  <NomePais>{item.name}</NomePais>
                </Flag>
                <Edit>
                  <EditIcon style={{ color: "#868686", fontSize: 20 }} />
                  <CloseIcon style={{ color: "#868686", fontSize: 22 }} />
                </Edit>
              </Top>
              <Border />
              <Text>
                <P>Local: {item.local}</P>
                <P> Meta: {item.meta}</P>
              </Text>
            </Result>
          ))}
      </ContentSquare>
    </Content>
  );
};

export { Square };
