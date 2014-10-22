# PROGRESSO #
* ## TODO ##

* ## DOING ##
    * Cadastro de usuários

# Informações gerais #
* Template Engine : Mustache
* Database : MongoDB
* ORM : Mongoose

# Especificações CSS #
## Regras de nomenclatura de classes ##
1. Classes gerais para todos os layouts
    1. **DEVEM** ser escritas com o prefixo de layout ```a-{nome da classe}```
    2. **DEVEM** ser unicas e sucintas, serão utilizadas por todos 
    para facilitar a alteração do layout
    3. **PODEM** seguir as sugestões de nomenclatura
        1. Para classes de texto usar 
        ```{prefixo de layout}-text-{nome da classe}```
        2. Para classes de cores usar 
        ```{prefixo de layout}-color-{nome da classe}```
        3. Para classes de botões usar
        ```{prefixo de layout}-btn-{nome da classe}```
        4. Para classes de blocos de layout
        ```{prefixo de layout}-layout-{nome da classe}```
2. Classes de layouts especificas
    1. **DEVEM** ser escritas com um prefixo 
    nome do layout exemplo: ```desenvolvimento-{nome da classe}```
    2. **PODEM** seguir as regras definidas em 1.3