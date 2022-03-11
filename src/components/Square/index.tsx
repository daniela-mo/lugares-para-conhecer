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
  Buttons,
} from "./styles";

import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";

const Square = ({ list, deleteCard, openModal }: any) => {
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
                  <Buttons onClick={() => openModal(item)}>
                    <EditIcon
                      style={{
                        color: "#868686",
                        cursor: "pointer",
                        fontSize: 20,
                      }}
                    />
                  </Buttons>
                  <Buttons onClick={() => deleteCard(item._id)}>
                    <CloseIcon
                      style={{
                        color: "#868686",
                        cursor: "pointer",
                        fontSize: 22,
                      }}
                    />
                  </Buttons>
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
