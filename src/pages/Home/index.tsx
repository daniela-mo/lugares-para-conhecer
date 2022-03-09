import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Formulario } from "../../components/Form";
import { Square } from "../../components/Square";
import { Container } from "./styles";
import DEFAULT_API_URLS from "../../utils/enum";
import axios from "axios";

const Home = () => {
  const [paises, setPaises] = useState([]);
  const [form, setForm] = useState({
    pais: "Selecione...",
    local: "",
    meta: "",
  });
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(false);

  const handlePaises = async () => {
    try {
      const { data } = await axios.get(DEFAULT_API_URLS.COUNTRIES);
      setPaises(data);
    } catch (error) {}
  };

  const handleSend = async () => {
    const arr: any = [];
    paises.filter((pais: any) => {
      if (pais.alpha2Code === form.pais) {
        arr.push({
          country: pais.alpha2Code,
          local: form.local,
          meta: form.meta,
          flag: pais.flag,
          name: pais.name,
        });
      }
    });

    try {
      await axios.post(`${DEFAULT_API_URLS.PLACES}places`, ...arr);
      setLoad(true);
      setForm({
        pais: "Selecione...",
        local: "",
        meta: "",
      });
    } catch (error) {
      console.log("error");
    }
  };

  const handleList = async () => {
    try {
      await axios.get(`${DEFAULT_API_URLS.PLACES}`).then((res) => {
        setList(res.data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    handlePaises();
    handleList();
  }, []);

  useEffect(() => {
    handleList();
    setLoad(false);
  }, [load]);

  return (
    <Container>
      <Header />
      <Formulario
        paises={paises}
        state={{ value: form, action: setForm }}
        handleSend={handleSend}
      />
      <Square list={list} />
    </Container>
  );
};

export default Home;
