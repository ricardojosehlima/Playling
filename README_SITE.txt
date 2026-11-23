PLAYLING — ESTRUTURA DO SITE
============================

PÁGINA PRINCIPAL
- index.html

ACESSOS PERMANENTES
- avaliacoes.html
- cronograma.html
- textos.html

BLOCO INTRODUTÓRIO
- aula-01-jogo.html
- aulas-02-03-saussure.html
- aula-04-revisao-proximos-passos.html

CICLOS
- ciclo-01-lego-gerativismo.html
- ciclo-02-lingbet-sociolinguistica.html
- ciclo-03-unoling-analise-discurso.html

ARQUIVOS COMPARTILHADOS
- site-config.js  -> controla AGORA / A SEGUIR / LIBERADO / BLOQUEADO
- site-nav.js     -> monta automaticamente ANTERIOR / PRÓXIMO
- site-common.css -> estilos desses componentes compartilhados

COMO AVANÇAR O CURSO
--------------------
Edite SOMENTE o objeto "states" em site-config.js.
Há exemplos comentados no começo do próprio arquivo.

Estado inicial atual:
- Aula 01: AGORA
- Aula 02: A SEGUIR
- Aula 03 em diante: BLOQUEADO

Os cartões da página inicial, os cartões das Aulas 02–03 e a navegação
ANTERIOR / PRÓXIMO consultam esse mesmo arquivo.

PORTAL DOS TEXTOS
-----------------
As páginas de aula apontam diretamente para o Google Drive.
Os links contextuais de leitura levam diretamente à pasta de textos no Google Drive.
O link permanente TEXTOS no portal continua levando à página textos.html.


AULAS INTERNAS DO CICLO 01
===========================
As cinco apresentações estão em ciclo-01-lego-gerativismo.html.
Para liberar cada aula, edite apenas site-config.js:
  "ciclo-01-aula-01": "current/open/next/locked"
  "ciclo-01-aula-02": "current/open/next/locked"
  "ciclo-01-aula-03": "current/open/next/locked"
  "ciclo-01-aula-04": "current/open/next/locked"
  "ciclo-01-aula-05": "current/open/next/locked"
Padrão recomendado: passada=open; atual=current; próxima=next; demais=locked.



CICLO 02 — LINGBET + SOCIOLINGUÍSTICA
=====================================
As cinco apresentações estão em:
  ciclo-02-lingbet-sociolinguistica.html

Liberação interna:
  edite apenas site-config.js
  ciclo-02-aula-01 ... ciclo-02-aula-05

O mesmo conjunto de estados já foi reservado para o Ciclo 03:
  ciclo-03-aula-01 ... ciclo-03-aula-05

Nenhuma alteração adicional foi necessária em index.html ou site-nav.js:
os links para os Ciclos 02 e 03 já estavam reservados na estrutura do portal.


CICLO 03 — UNOLING + ANÁLISE DO DISCURSO
=========================================
As cinco apresentações estão em:
  ciclo-03-unoling-analise-discurso.html

Liberação interna:
  edite apenas site-config.js
  ciclo-03-aula-01 ... ciclo-03-aula-05

A página usa o mesmo sistema de accordions, apresentações, bloqueios,
navegação e Portal dos Textos dos Ciclos 01 e 02.

Nenhuma alteração foi necessária em index.html ou site-nav.js:
o link do Ciclo 03 já existia na estrutura geral do portal.


CRONOGRAMA
==========
cronograma.html mostra as 30 aulas integralmente, sem accordions ou bloqueios.
Os campos DATA foram deixados para atualização progressiva.


AVALIAÇÕES
==========
avaliacoes.html apresenta a filosofia de avaliação da disciplina e três accordions.
A Avaliação 01 já está preenchida; Avaliação 02 e Avaliação Final permanecem como placeholders editáveis.


TEXTOS
======
textos.html apresenta a política de leitura da disciplina, o acesso à pasta do Google Drive,
orientações de leitura da disciplina.


ATUALIZAÇÃO DOS LINKS DE LEITURA
================================
Os links contextuais "Tem texto sobre este assunto" nas páginas de aula e dos três ciclos
agora apontam diretamente para a pasta de textos no Google Drive:
https://drive.google.com/drive/folders/1tIUsTf-qjTyWiIr1S74jszs9MIUOoq1M?usp=sharing

A página textos.html continua disponível no portal como apresentação da política de leitura
da disciplina, mas não precisa mais ser visitada a cada aula.

O interlúdio "A sombra de um deus morto" e a intervenção "Um texto contra o texto"
foram removidos de textos.html para manter a página mais concisa.


REVISÃO DA AULA 04 (NOVEMBRO DE 2026)
===================================
Aula 04 (03/12): Revisão e Próximos Passos.
A atividade central é a árvore “Quando nasce uma ciência”, promovida de página extra
para a página oficial da Aula 04. Foram removidos do pacote os arquivos anteriores:
  aula-04-lingua-linguagem.html
  quando-nasce-uma-ciencia.html
O novo arquivo é:
  aula-04-revisao-proximos-passos.html

Aula 04 consulta seu status em site-config.js como as demais aulas;
foi definida inicialmente como "locked". Para liberá-la, use "current" ou "open".
A página index.html, o cronograma e a referência da Aula 01 foram atualizados.
Não houve mudanças nas páginas dos três ciclos nem em site-nav.js.
