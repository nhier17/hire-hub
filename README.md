<div align="center"> <br /> <img src="https://github.com/nhier17/my-portfolio/blob/main/public/hh.png" alt="HireHub Banner"> <br /> <div> <img src="https://img.shields.io/badge/-Python-black?style=for-the-badge&logoColor=white&logo=python&color=3776AB" alt="Python" /> <img src="https://img.shields.io/badge/-Flask-black?style=for-the-badge&logoColor=white&logo=flask&color=000000" alt="Flask" /> <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React" /> <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=336791" alt="PostgreSQL" /> <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" /> </div> </div>
## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Environmental VAriables](#env)
6. 🔗 [Deployment](#deploy)
7. 📞 [Contact](#more)


## <a name="introduction">🤖 Introduction</a>

HireHub is a full-stack professional networking platform inspired by LinkedIn, designed to enable users to explore job opportunities, connect with other professionals, and share career updates. Built with Python Flask and React, HireHub provides an engaging and user-friendly interface for professionals to build their network and stay updated in their career fields.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Python (Flask)
- React
- PostregreSQL
- TailwindCSS


## <a name="features">🔋 Features</a>


👉 **Authentication**: Secure signup and login with email and password..

👉 **Job listings**: Discover and apply to job postings across various industries.
👉 **Professional Connections**: Connect with other professionals to grow your network.

👉 **News Feed**: Share career updates and follow updates from connections

👉 **Messaging**: Built-in messaging feature for direct communication between users.

👉 **Personal Dashboard**: Create and customize your profile with details about experience, skills, and projects.
👉 **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

and many more, including code architecture and reusability. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/nhier17/hire-hub.git
cd hire-hub
```
** Set up the backend

```bash
cd hire-hub-api
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Flask
FLASK_ENV=development
SECRET_KEY=your_secret_key

# Database
DATABASE_URL

# JWT
JWT_SECRET_KEY=your_jwt_secret_key



```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="env">🕸️ Enviromental Variables</a>

<details>
<summary><code>.env.example</code></summary>

```env
# Flask
FLASK_ENV=development
SECRET_KEY=your_secret_key

# Database
DATABASE_URL

# JWT
JWT_SECRET_KEY=your_jwt_secret_key

```

</details>

## <a name="deploy">🔗 Deployment</a>

### To deploy the backend use [Render](Render) or [Heroku](Heroku)
For detailed deployment instructions, check out [Flask Deployment Documentation].

The easiest way to deploy your React.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## <a name="more">📞 Contact</a>
## Author: Abraham Nhier

## Contact Information;
   Email: abrahamnhier97@gmail.com
   
   Phone: +254716903151
   
   Portfolio: https://abrahamnhier.vercel.app
       
 ## LICENSE: [MIT License](link-to-license-file).

