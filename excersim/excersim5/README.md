# Excercims 5 
##Calculador de Valor de Resistencia

## Importación de React y useState
- Se importa React y la función useState desde el paquete 'react'. Esto permite utilizar el estado local en componentes funcionales.

## Definición de la constante ColorAry
- Se define un array `ColorAry` que contiene los colores utilizados en las bandas de las resistencias.

## Definición de la constante ohms
- Se define un array `ohms` que contiene los factores de multiplicación y los prefijos correspondientes para los valores de resistencia.

## Declaración de la función ResistorValueCalculator
- Se declara la función `ResistorValueCalculator`, que es el componente principal de la aplicación.

## Declaración de estados con useState
- Se utilizan los hooks `useState` para definir los estados `band1`, `band2` y `band3`, que representan los colores seleccionados para las tres primeras bandas de la resistencia. Se inicializan con el valor `'black'`.

## Definición de la función handleChange
- Se define la función `handleChange`, que toma un evento y un setter como parámetros. Esta función actualiza el estado correspondiente con el valor seleccionado en el dropdown.

## Definición de la función decodedResistorValue
- Se define la función `decodedResistorValue`, que calcula el valor de la resistencia decodificada utilizando los colores seleccionados y los factores de multiplicación de `ohms`.

## Definición de la función handleCalculate
- Se define la función `handleCalculate`, que maneja el evento de clic en el botón de "Calcular" y muestra el valor calculado de la resistencia en un cuadro de alerta.

## Renderizado del componente
- Se renderiza la interfaz de usuario del componente, que incluye tres dropdowns para seleccionar los colores de las tres primeras bandas de la resistencia.
- Cada dropdown está asociado a un estado y tiene opciones generadas dinámicamente a partir del array `ColorAry`.
- También se incluye un botón "Calcular" que al hacer clic llama a la función `handleCalculate`.

## Exportación del componente
- Se exporta el componente `ResistorValueCalculator` como el componente predeterminado para su uso en otras partes de la aplicación.

