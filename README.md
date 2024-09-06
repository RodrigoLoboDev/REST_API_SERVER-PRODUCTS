# 👋 ¡Hola gracias por visitar mi Proyecto!

## 🚀 Proyecto: Administrador de Productos - Backend

Este es el backend de **Administrador de Productos**, una aplicación web diseñada para gestionar productos de manera eficiente. El backend está construido con Node.js y Express, y se encarga de la lógica de negocio y la interacción con la base de datos.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir APIs y manejar rutas.
- **TypeScript**: Un superset de JavaScript que añade tipos estáticos.
- **Sequelize**: ORM para manejar la base de datos PostgreSQL.
- **PostgreSQL**: Base de datos relacional utilizada para almacenar los datos de los productos.
- **Swagger**: Herramienta para documentar la API.
- **Supertest**: Framework para pruebas de integración de APIs.
- **Jest**: Framework de testing para JavaScript.
- **CORS**: Middleware para habilitar CORS en las peticiones.
- **Morgan**: Middleware para el registro de solicitudes HTTP.
- **Colors**: Librería para agregar colores a la consola.

## 🎥 Demostración

Puedes ver una demostración en video de cómo funciona la aplicación en [este enlace de YouTube](https://www.youtube.com/watch?v=OPiSc6o85jY&t=11s).

## 📂 Estructura del Proyecto

```bash
src/
├── __tests__/       # Testing de la API
├── config/          # Conexion con la base de datos
├── data/            # 
├── handlers/        # Controladores
├── middleware/      # Manejo de errores
└── models/          # Modelado de la base de datos
```

## 🚀 Cómo Empezar
1. Clona el repositorio:

```bash
git clone https://github.com/RodrigoLoboDev/REST_API_SERVER-PRODUCTS
```
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📝 Documentación de la API
La documentación de la API está disponible en Swagger. Puedes acceder a ella en la ruta `http://localhost:4000/docs/` una vez que el servidor esté en funcionamiento.

## 🧪 Testing

El proyecto utiliza **Jest** y **Supertest** para realizar pruebas automatizadas, asegurando la calidad y correcto funcionamiento de la API.

### Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm test
```

Este comando ejecutará todas las pruebas definidas en la carpeta `__tests__`, verificando el comportamiento de las rutas y controladores de la API.

### Cobertura de Código

Para obtener un informe de la cobertura de las pruebas, puedes ejecutar:

```bash
npm run test:coverage
```

Este comando generará un informe detallado sobre qué partes del código están cubiertas por las pruebas y cuáles no, ayudándote a identificar áreas que necesitan más atención.

### Estructura de los Tests

Los tests están organizados en la carpeta `__tests__` y están enfocados en:

- **Pruebas de Rutas:** Validan que las rutas de la API respondan correctamente a las peticiones.
- **Pruebas de Controladores:** Verifican que los controladores gestionen los datos de manera adecuada.
- **Pruebas de Integración:** Evalúan la interacción entre los diferentes componentes de la API.

Asegúrate de mantener los tests actualizados a medida que se realizan cambios en la aplicación para garantizar la fiabilidad del sistema.

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto, no dudes en abrir un issue o hacer un pull request.

## 📧 Contacto
- Email: rolobo2812@gmail.com
- LinkedIn: [Jesús Luis Rodrigo Lobo](https://www.linkedin.com/in/jes%C3%BAs-luis-rodrigo-lobo-6594a81b4/)
- GitHub: [RodrigoLoboDev](https://github.com/RodrigoLoboDev)

#### ⭐️ Si te gusta lo que hago, no dudes en seguirme y contribuir a mis proyectos. ⭐️