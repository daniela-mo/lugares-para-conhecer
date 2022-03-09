import {
  FormComponent,
  Form,
  FormContent,
  Label,
  Select,
  Option,
  Input,
  Button,
  MaskInput,
} from "./styles";

const Formulario = ({ paises, state, handleSend }: any) => {
  return (
    <FormComponent>
      <Form>
        <FormContent>
          <Label>País</Label>
          <Select
            value={state.value.pais}
            onChange={(e) =>
              state.action({ ...state.value, pais: e.target.value })
            }
          >
            <Option defaultValue="Selecione..." disabled>
              Selecione...
            </Option>
            {paises &&
              paises.map((pais: any) => (
                <Option key={pais.alpha2Code} value={pais.alpha2Code}>
                  {pais.name}
                </Option>
              ))}
          </Select>
        </FormContent>
        <FormContent>
          <Label>Local</Label>
          <Input
            onChange={(text) =>
              state.action({ ...state.value, local: text.target.value })
            }
            value={state.value.local}
            type="text"
            placeholder="Digite o local que deseja conhecer"
          />
        </FormContent>
        <FormContent>
          <Label>Meta</Label>
          <MaskInput
            mask="99/9999"
            onChange={(text) =>
              state.action({ ...state.value, meta: text.target.value })
            }
            value={state.value.meta}
            type="data"
            placeholder="mês/ano"
          />
        </FormContent>

        <Button onClick={() => handleSend()}>Adicionar</Button>
      </Form>
    </FormComponent>
  );
};

export { Formulario };
