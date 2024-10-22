# GitHub Search App

## Descripción

**GitHub Search App** es una aplicación móvil desarrollada en **React Native CLI** que permite a los usuarios buscar tanto usuarios como repositorios en GitHub, y ver detalles relacionados con ellos en tiempo real a través de la API de GitHub.

## Características

- **Búsqueda de Repositorios**: Los usuarios pueden buscar repositorios por nombre y obtener información relevante como el propietario, el número de estrellas y la descripción.
- **Búsqueda de Usuarios**: Permite la búsqueda de usuarios por su nombre o alias de GitHub, mostrando detalles básicos como el nombre, ubicación y cantidad de repositorios públicos.
- **Visualización Detallada**: Acceso a más detalles sobre los usuarios, incluidos sus repositorios, seguidores y otras estadísticas importantes.

## Instalación

Sigue los pasos a continuación para instalar y ejecutar la aplicación en tu entorno local.

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/githubSearchApp.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd githubSearchApp
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

## Uso

1. Inicia la aplicación en el emulador o dispositivo real:
   - Para Android:

     ```sh
     npx react-native run-android
     ```

   - Para iOS:

     ```sh
     npx react-native run-ios
     ```

2. La aplicación se ejecutará en el dispositivo o emulador seleccionado.

## Organización de Carpetas

El proyecto sigue una estructura modular para facilitar la escalabilidad y el mantenimiento.

- `src/`: Código fuente de la aplicación.
  - `components/`: Componentes reutilizables como botones, tarjetas, etc.
  - `screens/`: Pantallas principales de la aplicación.
  - `services/`: Lógica de conexión con la API de GitHub, utilizando fetch para realizar las solicitudes.
  - `navigation/`: Configuración de las rutas de la aplicación usando React Navigation.
  - `styles/`: Estilos globales y específicos de componentes en formato StyleSheet.
  - `utils/`: Funciones auxiliares y utilidades generales.
  
- `ios/` y `android/`: Directorios específicos de cada plataforma.

## Tecnologías Utilizadas

- **React Native CLI**: Framework para desarrollar aplicaciones móviles nativas con JavaScript.
- **Fetch API**: Utilizada para hacer peticiones a la API de GitHub.
- **React Navigation (v6)**: Librería para gestionar la navegación en la aplicación.
- **TypeScript**: Tipado estático para mejorar la seguridad y robustez del código.

## Compatibilidad

La aplicación es compatible con:

- **Android**: versión 5.0 (Lollipop) en adelante.
- **iOS**: versión 11.0 en adelante.

## Recursos Adicionales

- [Documentación de React Native](https://reactnative.dev/docs/getting-started)
- [Documentación de React Navigation](https://reactnavigation.org/docs/getting-started)
- [Documentación de la API de GitHub](https://docs.github.com/en/rest)
