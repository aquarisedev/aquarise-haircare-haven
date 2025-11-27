# Como Adicionar sua Logo no Preview de Link

## O que você precisa fazer:

### 1. Criar a Imagem de Preview (og-image.png)

Você precisa criar uma imagem com as seguintes especificações:
- **Tamanho:** 1200x630 pixels (formato recomendado para Open Graph)
- **Formato:** PNG ou JPG
- **Conteúdo:** Sua logo da Aquarise + texto/título do site
- **Nome do arquivo:** `og-image.png`

### 2. Onde colocar a imagem:

Coloque o arquivo `og-image.png` na pasta `public/` do projeto:
```
public/og-image.png
```

### 3. Substituir o Favicon

Substitua também o arquivo `public/favicon.ico` pelo favicon da Aquarise.

## Ferramentas para criar a imagem:

### Opção 1: Canva (Recomendado - Grátis)
1. Acesse https://www.canva.com
2. Crie um design com 1200x630 pixels
3. Adicione sua logo da Aquarise
4. Adicione o texto "Aquarise Shop - Cuidados Premium para seus Cabelos"
5. Baixe como PNG
6. Renomeie para `og-image.png`
7. Coloque na pasta `public/`

### Opção 2: Figma
1. Crie um frame de 1200x630px
2. Adicione sua logo e texto
3. Exporte como PNG
4. Coloque na pasta `public/`

### Opção 3: Photoshop/GIMP
1. Crie um documento 1200x630px
2. Adicione sua logo e texto
3. Exporte como PNG
4. Coloque na pasta `public/`

## Após adicionar a imagem:

1. Faça commit e push das alterações
2. Aguarde o deploy no Vercel
3. Teste o preview usando:
   - https://www.opengraph.xyz/url/https://aquarise-haircare-haven.vercel.app/
   - Ou compartilhe o link em uma conversa para ver o preview

## Importante:

- A URL no `index.html` já está configurada para `https://aquarise-haircare-haven.vercel.app/og-image.png`
- Certifique-se de que o domínio está correto (se mudar, atualize no `index.html`)
- A imagem deve ser acessível publicamente via URL completa

