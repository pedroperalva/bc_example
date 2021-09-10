# Teste de nível - Dev Junior

**Obrigado por se candidatar para a vaga de Dev Junior na Kuppi.**

Para podermos proseguir com o processo de avaliação, estamos disponibilizando um teste dividido dois exercícios (Exercício prático e Exercício conceitual). Você terá um dia para desenvolvê-lo. Mas se surgir algum imprevisto ou problema é só nos avisar.

### **Orientações iniciais**

O teste proposto será bem simples, porém por sermos uma startup, além das habilidades técnicas é muito importante a comunicação e pesquisa por soluções de problemas. Tenha isso em mente ao resolvê-lo. 

O teste é composto por dois exercicios, é importante **fazer os dois**. 

O uso de requisitos e os diferenciais listados na vaga será considerado um bônus.

O desenvolvimento deverá ser **feito em ReactJs**. O projeto deve ser entregue em outro repositório.

Será disponibilizado o ambiente de *dev* da Kuppi para a utilização durante o teste.

**url:** https://dev-api.kuppi.com.br

| Uri | Método | Verbo | Descrição
|---|---|---|---|
| **/example/products**  | GET | INDEX | *Array* com todos os produtos.
| **/example/products/:product_id**  | GET | SHOW | *Object* com todas as informações do produto com o *id* especificado.

#### **Packages requeridos**

É obrigatório o uso das bibliotecas listadas a seguir e será levados em consideração na análise do teste.

- axios
- styled-components

Esses outros packages a seguir também são obrigatórios, porém já estão implementados a arquitetura de seu uso, fique vontade para incrementar o que achar necessário e pertinente. 

- immer
- react-router-dom
- history
- redux
- react-redux
- redux-persist
- redux-saga

Boa sorte!

### **Exercício 1 - Teste prático**

Para prosseguir faça um Fork desse projeto para utilizá-lo como base no teste.

- Implemente uma aplicação que exiba em uma rota, uma listagem de produtos com seus nomes e preços.

- Crie também em cada item da listagem, um componente que direcione para outra rota, que servirá para exibir os detalhes desse produto com o restante das informações disponíveis.

- A estilização do projeto deve ser feito em *Styled Component* e ela juntamente com o layout desenvolvido serão levados em consideração na análise do teste.

### **Exercício 2 - Teste conceitual**

Responda as perguntas abaixo com suas próprias palavras, mas também fique livre em aplicar algum desses conceitos na primeira parte do teste.

- Se uma rota é repetida diversas vezes em sua aplicação, como seria possível melhorar a arquitetura para facilitar em manutenções posteriores?
- É possível melhorar a performance da solução? Como as melhorias impactam a leitura e manutenção do código?
- De que forma o sistema pode escalar com a arquitetura planejada?
- Considerando as informações de retorno nas rotas da API disponibilizada para o teste, qual seria a sua sugestão para o controller que alimentaria essas rotas? Leve em consideração os conhecimentos de RESTful API.

