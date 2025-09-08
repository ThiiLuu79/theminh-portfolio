//Constant for Academics.jsx
export const ACADEMICS_WELCOME = "Here are my ";
export const ACADEMICS_PROJECT = "Academic Projects";
export const GITHUB_REPO = "GitHub repository";

// STIL PROJECT (CAPSTONE)
export const STIL_PROJECT = {
    title: "Capstone Project - STIL Research Lab Website",
    period: "Summer 2025 (ÉTS)",
    description: "As part of my capstone project at ÉTS, I designed and developed a modern, interactive, and structured website for the Software Technology and Intelligence Research Lab (STIL). The platform centralizes research projects, members, publications, events, awards, and teaching activities into one accessible hub. Developed as an open-source solution under the MIT license, it is secure, maintainable, and performant. Following an Agile methodology with CI/CD pipelines, the project applied best practices in software architecture, DevOps, and collaboration to meet both current and future needs of the lab.",
    contributions: [
        "Collaborated within a team of 5 students.",
        "Drafted the Software Requirements Specification (SRS) and designed the relational database schema.",
        "Defined functional and non-functional requirements through needs analysis.",
        "Designed the system architecture using micro-frontends and REST APIs.",
        "Developed the frontend in Vue.js 3 and TypeScript with Tailwind CSS for a responsive UI.",
        "Implemented the backend with Django REST Framework and Python for robust data management.",
        "Integrated a PostgreSQL database to store research projects, members, publications, events, awards, and courses.",
        "Automated publication imports via the OpenAlex API, with fallback to Google Scholar.",
        "Implemented authentication and role-based access control with JWT and Django permissions.",
        "Configured CI/CD pipelines with GitHub Actions for automated builds, tests, and deployments.",
        "Achieved unit test coverage of ~70% for both frontend and backend.",
        "Documented the system with programmer and user guides, published in open source under the MIT license."
    ],
    tools: [
        "Languages: TypeScript, Python, HTML, CSS, UML",
        "Frameworks: Vue.js, Django REST Framework, Node.js, Express, Tailwind CSS, Vitest, Pytest",
        "Architecture: Micro-frontends, REST API, containerized with Docker",
        "Database: PostgreSQL",
        "Methodologies: Agile (Scrum), DevOps, CI/CD",
        "Tools: GitHub, GitHub Actions, GitHub Projects (Kanban), Docker, Swagger, Postman, VSCode, pgAdmin, ESLint, Black, JWT Authentication"
    ],
    imgAlt: "stil-research-lab-website"
};

//DEVOPS PROJECT
export const DEVOPS_PROJECT = {
    title: "DevOps Project",
    period: "Winter 2025 (ÉTS)",
    description: "As part of the Introduction to DevOps approach (LOG680) course, we had to put in place the best practices for a DevOps project. The goal of this project was to modify an existing app to make it more efficient and to implement the DevOps approach.",
    contributions: [
        "Collaborated in a team of 4 students.",
        "Created a GitLab Kanban board to manage the project and tasks.",
        "Created an API in Python to retrieve GitLab metrics, such as the average lead time of an issue, the number of issues created, and the number of issues closed.",
        "Created Dockerfiles to containerize the applications of this project.",
        "Deploy the applications on a Kubernetes cluster by creating deployment, service, ingress, secret and configmap ressources.",
        "Created a GitLab CI/CD pipeline to automate the deployment of the applications.",
        "Created a monitoring system using Prometheus and Grafana to monitor the applications metrics."
    ],
    tools: [
        "Language(s): Python", 
        "Framework(s): Flask, FastAPI",
        "Database: PostgreSQL",
        "Methodology: Agile, Scrum, DevOps",
        "Tool(s): GitLab, GitLab CI/CD, GitLab Kanban Board, Docker, Kubernetes, Prometheus, Grafana, Swagger, Postman, VSCode, pgAdmin"
    ],
    imgAlt: "devops"
};

//WEATERMATE PROJECT
export const WEATHERMATE_PROJECT = {
    title: "Weather Mate Application",
    period: "Fall 2024 (ÉTS)",
    description: "As part of the Web Development Technologies (GTI525) course, we were tasked with developing a weather application named Weather Mate. This application was designed to provide users with real-time weather information, including temperature, wind speed, and precipitation of each Canadian provinces. The application was designed to be user-friendly, with an intuitive interface that allowed users to easily navigate through the various features and functionalities. As for the first part, we had the responsibility to develop the front-end and gathering the data from CSV files. For the second part, we had to implement the back-end to call external APIs. Finally, for the third part, we had to integrate a database to store data from the CSV files.",
    contributions: [
        "Parsed data from CSV files to display the weather information.",
        "Designed and implemented the front-end of the application.",
        "Implemented the data and statistic view, displaying the weather information of each Canadian provinces.",
        "Called Canada Environment's API to get previous Wheater data for a specific day.",
        "Used NodeJs and Express to create the back-end of the application.",
        "Used MongoDB to store the weather information of the CSV files.",
        "Cached the response of API calls to improve the performance of the application."
    ],
    tools: [
        "Language(s): JavaScript, HTML, CSS", 
        "Framework(s): Vue.js, NodeJS, Express, Axios",
        "Architectural pattern: Micro-frontends, REST API",
        "Database: MongoDB",
        "Tool(s): Git/GitHub, VSCode, MongoDB Compass, Postman, Docker"
    ],
    imgAlt: "weathermate"
};

//WEBFLIX PROJECT
export const WEBFLIX_PROJECT = {
    title: "Webflix Application",
    period: "Fall 2023 (ÉTS)",
    description: "As part of the High Performance Databases (LOG660) course, we were tasked with developing a Full Stack application named Webflix, allowing clients to rent movies in accordance with their subscriptions. Our data management required the utilization of an Oracle database, and interaction with this data was achieved through an object-oriented program. This assignment was structured in three phases. In the initial phase, we focused on designing class and relational diagrams for the application, tailored to various use cases. Additionally, we were responsible for importing a vast amount of data into the database from an XML file containing thousands of entries. For the second phase of this assignment, our task was to design and develop a user interface (UI) for the application. Within this interface, clients could log in to access detailed information about movies, actors and directors. Moreover, clients with eligible subscriptions had the ability to rent movies. In the third phase, our task included establishing an analytical data system to evaluate rental frequencies across various dimensions. Additionally, we were tasked with implementing a recommendation function for each movie, by getting the client ratings from an external database.",
    contributions: [
        "Led a team of four students.",
        "Designed and optimized the class and relational diagram for the Webflix application.",
        "Created database tables for the Webflix application.",
        "Created SQL triggers to implement the business logic within the database.",
        "Inserted data entries into the database from a given XML file using JDBC.",
        "Created a bridge between an object-oriented program and a relational database using an ORM (Hibernate).",
        "Implemented the user interface using Java and JavaSwing including a log in system, a movie searching window and a movie details window.",
        "Created a user manual to assist the client in using the application.",
        "Designed and optimized the star schema for the analytical data system.",
        "Utilized the ETL (Extract, Transform, Load) process to transform data and seamlessly insert it into both fact and dimensions tables."
    ],
    tools: [
        "Language(s): Java, SQL, PLSQL, HQL, JDBC, UML, ERD, XML", 
        "Database: Oracle",
        "Framework(s): Hibernate, JavaSwing",
        "Pattern Design(s): Data Access Object (DAO), Singleton",
        "Tool(s): Git/GitHub, IntelliJ, Visual Paradigm, SQL Developer"
    ],
    imgAlt: "webflix"
};

//PUHSERS PROJECT
export const PUSHERS_PROJECT = {
    title: "Pushers Game",
    period: "Winter 2023 (ÉTS)",
    description: "As part of the Data Structures and Algorithms (LOG320) course, giving a board game, we had the task to implement an AI that determines the best moves to play in that game. The game is called Pushers, where the player have to reach the opponent's last row by moving his pieces. The rules are simple: Pushables are the smaller pieces and can only be pushed by pushers. Pushers are the bigger pieces and can move by themselves. Pieces can move up or diagonally, but not backward or sideways. Pieces can only capture diagonally. The AI was implemented using the minimax algorithm with prunning to score all the possible moves. A static evaluation function was also implemented in order to determine the AI's strategy.",
    contributions: [
        "Implemented a move generator that returns all the possible moves in a turn.",
        "Implemented the minimax algorithm with prunning to score all the possible moves.",
        "Implemented a static evaluation function in order to determine the AI's strategy."
    ],
    tools: [
        "Language(s): Java",
        "Algorithm(s): MiniMax, Alpha-Beta Pruning, Recursive",
        "Data structure(s): 2D arrays",
        "Tool(s): Git/GitHub, IntelliJ"
    ],
    imgAlt: "pushers"
};

//CHAIN OF PRODDUCTION PROJECT
export const CHAIN_PROJECT = {
    title: "Chain of Production Simulation",
    period: "Fall 2022 (ÉTS)",
    description: "As part of the Object-Oriented Programming and Conception (LOG121) course, we worked on creating a simulated production chain for making airplanes. This involved coordinating different factories needed for airplane production. For example, metal factories made metal, which was then transported to wing and engine factories for assembly. The final step was sending wings and engines to an assembly factory to build the complete airplane. These airplanes were stored in a warehouse before being released to the market at set times or randomly. The warehouse had a maximum capacity, so production stopped when it was full. Before starting the actual coding, we planned the system by creating UML class diagrams and sequence diagrams, detailing how the system would work.",
    contributions: [
        "Creating a conceptual diagram of the system with UML.",
        "Implemented the chain of production with Java and JavaSwing.",
        "Applied the observator and stategy pattern design to make the code more maintainable."
    ],
    tools: [
        "Language(s): Java, XML, UML",
        "Framework(s): JavaSwing",
        "Pattern Design(s): Observator, Strategy, Singleton",
        "Tool(s): Git/GitHub, IntelliJ, Visual Paradigm"
    ],
    imgAlt: "chain"
};

//KOHA'S OPAC PAGES PROJECT
export const KOHA_PROJECT = {
    title: "Koha's OPAC pages",
    period: "Winter 2022 (Internship)",
    description: "During my first internship at Solution inLibro, I had the opportunity to customize the OPAC page for both St-Jean Vianney College and the Cultural French Center of Vancouver. The Koha OPAC serves as a versatile interface, enabling clients to effortlessly perform various tasks, including reserving items and conducting specific item searches, among other functionalities. Engaging with this project was particularly enjoyable for me, as it allowed me to indulge my passion for web development and enhance my creative skills.",
    contributions: [
        "Customized the OPAC page for both St-Jean Vianney College and the Cultural French Center of Vancouver."
    ],
    tools: [
        "Language(s): JavaScript, CSS",
        "Tool(s): Git/GitHub, Koha"
    ],
    imgAlt: "opac"
};
