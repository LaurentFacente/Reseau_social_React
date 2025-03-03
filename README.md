#

# OpenClassrooms - Développeur Web - Création d'un réseau social d’entreprise avec React / Node.js / MySQL

## Auteur

👤 **Laurent FACENTE**\
📎 LinkedIn: [Laurent Facente](https://www.linkedin.com/in/laurentFacente/ "Visitez mon profil LinkedIn")

---

## 📌 Projet 7 - "GROUPOMANIA" - Création d'un réseau social d’entreprise

### 🎯 Objectif du projet

Développer une application web permettant aux employés d'une entreprise de partager et d'échanger des contenus sous la forme d'un forum.

##### 🚀 Compétences évaluées

✅ Authentifier un utilisateur et maintenir sa session\
✅ Personnaliser le contenu envoyé à un client web\
✅ Gérer un stockage de données avec SQL\
✅ Implémenter un stockage de données sécurisé en utilisant SQL

---

## 🛠 Technologies utilisées

### 🔹 Frontend (React.js)

- React.js
- React Router-Dom
- Axios
- CSS

### 🔹 Backend (Node.js)

- Node.js (Express)
- Base de données MySQL
  - ORM Sequelize
- Sécurité OWASP et conformité RGPD

---

## 📝 Description du projet

Ce projet est le dernier de ma formation OpenClassrooms et consiste à développer un réseau social d'entreprise appelé **Groupomania**.

Il s'agit d'un **MVP** permettant à un employé du groupe de créer des articles et de les partager avec les autres collaborateurs. Le design a été laissé libre, et j'ai choisi une approche sobre et efficace.

J'ai développé **l'intégralité du backend avec Node.js** et **tout le frontend avec React**. Ce projet m'a permis de me familiariser avec SQL ainsi qu'avec React, qui est désormais ma technologie de prédilection.

Bien que certaines optimisations soient possibles, j'ai pris soin de respecter **scrupuleusement** le cahier des charges et de livrer un MVP fonctionnel.

---

## 🏗 Installation et lancement du projet

### 🔧 Prérequis

- **Node.js** installé sur votre machine
- **MySQL** pour la gestion de la base de données
- **Git** pour cloner le projet

### 🚀 Étapes d'installation

1️⃣ **Cloner le projet**

```sh
git clone <URL_du_projet>
```

2️⃣ **Installation et lancement du Backend**

```sh
cd backend/
npm install
nodemon server
```

3️⃣ **Installation et lancement du Frontend**

```sh
cd frontend/
npm install
npm start
```

4️⃣ **Configuration de la base de données**

- Assurez-vous que MySQL est installé et en cours d'exécution.
- Créez une base de données.
- Configurez les informations de connexion à la base de données dans un fichier `.env` et ajoutez les à db/sequelize.js.

```sh
mysql -u root -p
CREATE DATABASE <Nom_de_la_base_de_donnees>;
```

5️⃣ **Architecture**

<pre> ``` src ├── components │ ├── Footer │ │ ├── Footer.jsx │ │ └── Footer.module.css │ ├── Header │ │ ├── Header.jsx │ │ └── Header.module.css │ ├── Button │ │ ├── Button.jsx │ │ └── Button.module.css ├── hooks │ ├── useAuth.js │ ├── useFetch.js ├── pages │ ├── Login │ │ ├── Login.jsx │ │ ├── Login.module.css │ │ └── index.js │ ├── Register │ │ ├── Register.jsx │ │ ├── Register.module.css │ │ └── index.js │ ├── Feed │ │ ├── Feed.jsx │ │ ├── Feed.module.css │ │ └── index.js ├── services │ ├── api.js │ ├── authService.js ├── utils │ ├── validation.js │ ├── helpers.js ├── App.jsx ├── index.js ``` </pre>

---
