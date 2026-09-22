import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const frases = [
    "Grandes coisas começam com pequenos passos.",
    "Hoje pode ser o começo de algo incrível.",
    "Confie mais no seu processo",
    "Persistência vence o talento quando o talento desiste",
    "Uma boa oportunidade está mais perto do que parece",
    "Seu esforço de hoje será resultado amanhã",
    "Nem todo bug é um problema. As vezes é uma feature",
    "Continue. Até o código perfeito começou com erro",
    "A sorte ajuda quem também faz o commit",
    "Respire. Salve. Teste de novo",

    "Cada linha de código é um passo mais perto do seu objetivo.", 
    "Errar faz parte do processo. Corrigir também.",
    "Seu próximo grande projeto começa com uma pequena ideia.",
    "Não desista no primeiro erro. Dê mais um commit.",
    "Aprender é transformar erros em novas versões de você."
  ];

  const [frase, setFrase] = useState("");
  const [aberto, setAberto] = useState(false);
  const [favoritas, setFavoritas] = useState([]);

  const fraseFavorita = favoritas.includes(frase);

  function abrirBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseSorteada = frases[indice];

    setFrase(fraseSorteada);
    setAberto(true);
  }

  function voltarBiscoito() {
    setFrase("");
    setAberto(false);
  }

  function alternarFavorito() {
    setFavoritas((favoritasAtuais) =>
      fraseFavorita
        ? favoritasAtuais.filter((fraseAtual) => fraseAtual !== frase)
        : [...favoritasAtuais, frase]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Biscoito da Sorte</Text>
      {!aberto ? (
        <>
          <Pressable onPress={abrirBiscoito}>
            <Image
              source={require("./assets/biscoito.svg")}
              style={styles.imagem}
              resizeMode="contain"
            />
          </Pressable>

          <Text style={styles.instrucao}>Toque no biscoito para quebrar</Text>
        </>
      ) : (
        <>
          <Image
            source={require("./assets/biscoito-quebrado.svg")}
            style={styles.imagem}
            resizeMode="contain"
          />
          <View style={styles.caixaFrase}>
            <Text style={styles.frase}>"{frase}"</Text>
          </View>

          <Pressable
            style={styles.botaoFavorito}
            onPress={alternarFavorito}
            accessibilityRole="button"
            accessibilityLabel={
              fraseFavorita ? "Remover frase dos favoritos" : "Favoritar frase"
            }
          >
            <Text style={styles.textoFavorito}>
              {fraseFavorita ? "★ Favoritada" : "☆ Favoritar frase"}
            </Text>
          </Pressable>

          <Pressable style={styles.botao} onPress={voltarBiscoito}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </Pressable>

          <Pressable style={styles.quebrarbotao} onPress={abrirBiscoito}>
            <Text style={styles.textoquebrarbotao}>Quebrar Biscoito</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5d062f",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff8e7",
    marginBottom: 30,
  },

  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  instrucao: {
    fontSize: 16,
    color: "#f7e6d5",
    marginBottom: 20,
  },

  caixaFrase: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
  },

  frase: {
    fontSize: 18,
    textAlign: "center",
    color: "#333333",
    fontStyle: "italic",
  },

  botaoFavorito: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 14,
  },

  textoFavorito: {
    color: "#dc9f10",
    fontSize: 16,
    fontWeight: "bold",
  },

  botao: {
    backgroundColor: "#d4136d",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },

  quebrarbotao: {
    backgroundColor: "#d4136d",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 20,
  },

  textoquebrarbotao: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
}); 


