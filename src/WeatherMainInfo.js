function WeatherMainInfo({ weather }) {
  if (!weather) {
    return null; // O mostrar un mensaje de carga u otro contenido apropiado
  }

  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
      </div>
    </div>
  );
}
// function WeatherMainInfo({weather}) {

//     return (
//       <div>
//         <div>{weather?.location.name}</div>
//         <div>{weather?.location.country}</div>
//         <div>
//           <div>
//             <img src={`http:${weather?.current.condition.icon}`} width="128" alt={weather?.current.condition.text} />
//           </div>
//         </div>
//       </div>
//     );
// }

export default WeatherMainInfo;
