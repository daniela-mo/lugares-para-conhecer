import {
  Modal,
  Overlay,
  ContentSquare,
  Result,
  Top,
  Bandeira,
  Flag,
  Edit,
  Buttons,
  Border,
  Text,
  NomePais,
  Input,
  FormContent,
  Label,
  MaskInput,
} from "./styles";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const ModalComponent = ({ item, setClose, editCard, state }: any) => {
  const [edit, setEdit] = useState({
    local: item.local,
    meta: item.meta,
  });

  return (
    <>
      <Overlay />
      <Modal>
        <ContentSquare>
          <Result>
            <Top>
              <Flag>
                <Bandeira src={item.flag} alt={item.name} />
                <NomePais>{item.name}</NomePais>
              </Flag>
              <Edit>
                <Buttons
                  onClick={() =>
                    editCard({
                      ...item,
                      local: edit.local,
                      meta: edit.meta,
                    })
                  }
                >
                  <CheckIcon
                    style={{
                      color: "#868686",

                      cursor: "pointer",
                      fontSize: 20,
                    }}
                  />
                </Buttons>
                <Buttons onClick={() => setClose()}>
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
              <FormContent>
                <Label>Local</Label>
                <Input
                  onChange={(text) =>
                    setEdit({ ...edit, local: text.target.value })
                  }
                  value={edit.local}
                  type="text"
                  placeholder="Digite o local que deseja conhecer"
                />
              </FormContent>
              <FormContent>
                <Label>Meta</Label>
                <MaskInput
                  mask="99/9999"
                  onChange={(text: any) =>
                    setEdit({ ...edit, meta: text.target.value })
                  }
                  value={edit.meta}
                  type="data"
                  placeholder="mês/ano"
                />
              </FormContent>
            </Text>
          </Result>
        </ContentSquare>
      </Modal>
    </>
  );
};

export { ModalComponent };
