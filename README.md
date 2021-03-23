  # File Patterns

- **snnipets:**\
	exporta apenas uma funçao\
	styled component deve estar dentro\
	nao por importar nenhum outro snnipet\

- **sections:**\
	junçao de snnipets e as vezes de pequenas sections\
	exporta apenas uma funçao\
	nao pode ter styled component dentro\

- **components:**\
	exporta a constante, que é no caso o elemento\
	geralmente os arquivos seram os elementos que serao usados nas sections\

- **pages:**\
	junçao de uma ou mais sections e/ou snnipets\
	pode ter styled components dentro, desde q seja pouco\

- **assets:**\
	funçoes ou modelos q serao importados em outros arquivos\

**Obs:**
- folder "Short" inside sections\
	sections que sao pequenas e pelo tamanho poderiam ser um snnipet\
  
  # L&IS
1. Boas práticas GitHub
  - nome da branch sera oq esta sendo feito na branch
      exemplo: Cabeçalho
  - Colocar commit direito, sem preguiça e que de pra entender oq a pessoa está fazendo a partir do commit
  - Sempre editar numa branch secundaria
2. Usar tab como sendo 2 espaços
  
  # Connect repository
1. instalar o git no pc
2. criar pasta no seu pc para armazenar o projeto
3. abrir no terminal o diretorio da pasta
4. executar o comando "git clone https://github.com/andreylcj/mufasa_vercel.git"

  # Run Application
Command: npm run dev
