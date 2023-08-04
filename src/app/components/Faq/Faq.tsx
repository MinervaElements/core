import styles from "./Faq.module.css";
import ItemFaq from './ItemFaq/ItemFaq';

const Faq = () => {
  return (
    <div>
      <h2>FAQ - Preguntas Frecuentes</h2>
      {/*ItemFaq contiene un div*/}
      <ItemFaq pregunta="¿Qué tipo de servicios de páginas web ofrece tu ecommerce?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Cómo puedo empezar a trabajar contigo en mi página web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Cuál es el proceso de diseño y desarrollo de una página web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Cuánto tiempo tomará crear mi sitio web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Puedo tener un diseño personalizado para mi página web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Cuál es el costo aproximado de un sitio web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Qué información necesitas de mí para comenzar el desarrollo de mi página web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Ofreces servicios de mantenimiento y actualización de sitios web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Cuál es tu política de pagos y formas de pago aceptadas?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Qué sucede si no estoy satisfecho con el diseño de mi sitio web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Ofreces servicios de alojamiento web?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Puedo solicitar funciones específicas para mi página web, como un formulario de contacto o integración con redes sociales?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Proporcionas servicios de optimización para motores de búsqueda (SEO)?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Cómo puedo ponerme en contacto contigo si tengo preguntas o inquietudes adicionales?" respuesta="Tu respuesta aquí..." />
      <ItemFaq pregunta="¿Tienes ejemplos de trabajos anteriores que hayas realizado?" respuesta="Tu respuesta aquí..." />
    </div>
  );
};

export default Faq;
