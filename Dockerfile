# Base image olarak Node.js 18.20.8 kullanıyoruz
FROM node:18.20.8

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Angular CLI global olarak yükleniyorsa buraya ekle
RUN npm install -g @angular/cli@15

# Proje dosyalarını kopyala
COPY . .

# Uygulamanın build edilmesi (isteğe bağlı — prod modda derlemek için) RUN npm run build

# Portu expose et (örneğin Angular dev server için 4200)
EXPOSE 4200

# Angular uygulamasını başlat
CMD ["npm", "start"]
